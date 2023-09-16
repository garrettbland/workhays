import Link from 'next/link'
import { useForm, Form } from 'react-hook-form'
import { VALID_EMAIL_PATTERN } from '@utils'
import { Button, PageTitle, Callout, MaxContentWidth } from '../components'
import { BookOpenIcon, CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ContactForm } from '@custom-types'

const Contact = () => {
    const {
        register,
        reset,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactForm>()

    const scrollToTop = () => window.scrollTo(0, 0)

    return (
        <>
            {errors?.root?.server && (
                <Callout type="warning" icon={<ExclamationCircleIcon className="h-6 w-6" />}>
                    Error. Something went wrong submitting your form, please try again.
                </Callout>
            )}
            {isSubmitSuccessful && (
                <Callout type="success" icon={<CheckIcon className="h-6 w-6" />}>
                    Success! Your submission was submitted successfully.
                </Callout>
            )}
            <PageTitle
                title="Contact Us"
                description="Have questions or comments? Please fill out the form below and we will be in touch as soon as we can."
            />
            <Callout icon={<BookOpenIcon className="h-6 w-6" />}>
                <Link href="/faqs" className="mr-1">
                    Click here
                </Link>
                to view our frequently asked questions
            </Callout>
            <MaxContentWidth>
                <Form
                    action="/api/v1/contacts"
                    method="post"
                    control={control}
                    headers={{ 'Content-Type': 'application/json' }}
                    onSuccess={() => {
                        reset()
                        scrollToTop()
                    }}
                    onError={() => {
                        // Log Error
                        // Check errors from server (like if validations failed)
                        scrollToTop()
                    }}
                    validateStatus={(status) => status === 200}
                    className="flex flex-col space-y-4"
                >
                    <div className="flex flex-col">
                        <label>First Name *</label>
                        <input
                            {...register('first_name', { required: true })}
                            aria-invalid={errors.first_name ? 'true' : 'false'}
                            placeholder="First Name"
                            type="text"
                        />
                        {errors.first_name && (
                            <span className="text-red-500 mt-1">First name required</span>
                        )}
                    </div>
                    <div>
                        <label>Last Name *</label>
                        <input
                            {...register('last_name', { required: true })}
                            placeholder="Last Name"
                            type="text"
                        />
                        {errors.last_name && (
                            <span className="text-red-500 mt-1">Last name required</span>
                        )}
                    </div>
                    <div>
                        <label>Email *</label>
                        <input
                            {...register('email', {
                                required: true,
                                pattern: VALID_EMAIL_PATTERN,
                            })}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email?.type === 'pattern' && (
                            <span className="text-red-500">Valid email address required</span>
                        )}
                        {errors.email?.type === 'required' && (
                            <span className="text-red-500 mt-1">Email address required</span>
                        )}
                    </div>
                    <div>
                        <label>Business</label>
                        <input
                            {...register('business', { required: false })}
                            placeholder="Business (optional)"
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Message *</label>
                        <textarea
                            {...register('message', { required: true })}
                            placeholder="Your Message"
                            rows={5}
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 mt-1">Message Required</span>
                        )}
                    </div>
                    <p className="font-light">(*) denotes a required field</p>
                    <div>
                        <Button title={isSubmitting ? 'Loading...' : 'Submit'} type="submit" />
                    </div>
                </Form>
            </MaxContentWidth>
        </>
    )
}

export default Contact
