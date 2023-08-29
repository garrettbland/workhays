import { main } from '../index.mjs'
import arc from '@architect/functions'

jest.mock('@architect/functions', () => {
    return {
        http: {
            async: jest.fn(),
        },
        tables: jest.fn(),
    }
})

/** @type {any} */
const mockRequest = {
    httpMethod: 'POST',
    path: '/v1/contacts',
    resource: '/v1/contacts',
    pathParameters: {},
    queryStringParameters: {},
    headers: {},
    body: {},
    isBase64Encoded: true,
}

describe('post-v1-contacts', () => {
    it('Should "put" into database if validations pass', async () => {
        const tablePutMock = jest.fn().mockResolvedValue('Created fake contact')

        arc.tables.mockResolvedValueOnce({
            workhays: {
                put: tablePutMock,
            },
        })

        const fakeBody = {
            ...mockRequest,
            body: {
                first_name: 'garrett',
                last_name: 'bland',
                email: 'garrett@bland.com',
                message: 'I have a question',
            },
        }
        const mockResponse = await main(fakeBody)
        expect(tablePutMock).toHaveBeenCalledTimes(1)
        expect(mockResponse.json.message).toEqual('Successfully posted contact')
        expect(mockResponse.json.data).toEqual('Created fake contact')
    })
    it('Should return a 400 if validations are not met', async () => {
        arc.tables.mockResolvedValue({
            workhays: {
                put: jest.fn(),
            },
        })

        const invalidEmailBody = {
            ...mockRequest,
            body: {
                first_name: 'garrett',
                last_name: 'bland',
                email: 'garrett@@bland.com',
                message: 'I have a question',
            },
        }

        const missingRequirementBody = {
            ...mockRequest,
            body: {
                first_name: 'garrett',
                last_name: '',
                email: 'garrett@bland.com',
                message: 'I have a question',
            },
        }

        const mockInvalidEmailResponse = await main(invalidEmailBody)
        const mockMissingRequirementResponse = await main(missingRequirementBody)

        expect(mockInvalidEmailResponse.status).toEqual(400)
        expect(mockMissingRequirementResponse.status).toEqual(400)
        expect(mockInvalidEmailResponse.json.message).toEqual(
            'Inputs did not pass validation checks'
        )
        expect(mockMissingRequirementResponse.json.message).toEqual(
            'Inputs did not pass validation checks'
        )
    })
    it('Should handle uncaught errors gracefully', async () => {
        arc.tables.mockResolvedValue({
            workhays: {
                put: jest.fn().mockRejectedValueOnce('Error'),
            },
        })

        const fakeBody = {
            ...mockRequest,
            body: {
                first_name: 'garrett',
                last_name: 'bland',
                email: 'garrett@bland.com',
                message: 'I have a question',
            },
        }
        const mockResponse = await main(fakeBody)
        expect(mockResponse.status).toEqual(500)
    })
})
