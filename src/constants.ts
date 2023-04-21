import { Environment } from './types'

const ENVIRONMENT: Environment = {
    development: {
        showDevBanner: true,
        UserPoolId: '',
        ClientId: '',
    },
    staging: {
        showDevBanner: true,
        UserPoolId: '',
        ClientId: '',
    },
    production: {
        showDevBanner: false,
        UserPoolId: '',
        ClientId: '',
    },
}

export default ENVIRONMENT
