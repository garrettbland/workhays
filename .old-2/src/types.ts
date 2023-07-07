export type Stages = 'development' | 'staging' | 'production'
export type Environment = {
    [K in Stages]: {
        showDevBanner: boolean
        UserPoolId: string
        ClientId: string
    }
}
