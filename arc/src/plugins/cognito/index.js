/**
 * Adds Cognito authentication to CloudFormation
 */
module.exports = {
    deploy: {
        start: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
            /**
             * Create User Pool using Amazon Cognito
             * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html
             */
            cloudformation.Resources['WorkhaysCognitoUserPool'] = {
                Type: 'AWS::Cognito::UserPool',
                Properties: {
                    // AliasAttributes: ['email'], // email sign in only. This can't be changed after creation. It's either this or "Username Attributes". Using both results in errors
                    UsernameAttributes: ['email'], // email sign in only. This can't be changed after creation
                    Policies: {
                        PasswordPolicy: {
                            MinimumLength: 6, // lowest password policy length
                            RequireLowercase: false,
                            RequireNumbers: false,
                            RequireSymbols: false,
                            RequireUppercase: false,
                        },
                    },
                    MfaConfiguration: 'OFF', // no multi factor auth. Could enable in the future
                    AccountRecoverySetting: {
                        RecoveryMechanisms: [
                            {
                                Name: 'verified_email', // only allow verified users to self serve password reset
                                Priority: 1,
                            },
                        ],
                    },
                    AdminCreateUserConfig: {
                        AllowAdminCreateUserOnly: false, // allow users to sign themselves up
                        // InviteMessageTemplate: {
                        //     EmailMessage: 'Welcome to work hays',
                        //     EmailSubject: 'Work Hays Sign Up',
                        // },
                    },
                    EmailConfiguration: {
                        // Can eventually use SES for this to customize sending and from addresses
                        EmailSendingAccount: 'COGNITO_DEFAULT', // The default FROM address is no-reply@verificationemail.com
                        ReplyToEmailAddress: 'support@workhays.com',
                    },
                    UserPoolName: 'WorkHaysUserPool',
                    DeletionProtection: 'ACTIVE',
                },
            }

            /**
             * Create User Pool Client using Amazon Cognito
             * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html
             */
            cloudformation.Resources['WorkhaysCognitoUserClient'] = {
                Type: 'AWS::Cognito::UserPoolClient',
                Properties: {
                    UserPoolId: {
                        Ref: 'WorkhaysCognitoUserPool',
                    },
                    ClientName: 'WorkHaysUserPoolClient',
                    ExplicitAuthFlows: ['ALLOW_REFRESH_TOKEN_AUTH', 'ALLOW_USER_SRP_AUTH'], // email and password authentication
                    GenerateSecret: false,
                    PreventUserExistenceErrors: 'ENABLED', // show user 'incorrect username/password' instead of 'user not found'
                },
            }

            /**
             * Return the mutaged CloudFormation document. Will be passed to any other
             * plugins in sequence
             */
            return cloudformation
        },
    },
}
