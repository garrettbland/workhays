/**
 * Adds Simple Email Service to CloudFormation
 *
 * Only creates one email identity for staging and production.
 */
module.exports = {
    deploy: {
        start: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
            /**
             * Add Amazon Simple Email Service to CloudFormation
             * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html
             */
            cloudformation.Resources[`WorkhaysSES`] = {
                Type: 'AWS::SES::EmailIdentity',
                Properties: {
                    EmailIdentity: 'workhays.com',
                    MailFromAttributes: {
                        BehaviorOnMxFailure: 'USE_DEFAULT_VALUE',
                        MailFromDomain: 'mail.workhays.com',
                    },
                },
            }

            /**
             * Return the mutated CloudFormation document. Will be passed to any other
             * plugins in sequence
             */
            return cloudformation
        },
    },
}
