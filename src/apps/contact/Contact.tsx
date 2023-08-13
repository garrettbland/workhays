import { useForm, Form } from 'react-hook-form'
import { VALID_EMAIL_PATTERN } from '@architect/shared/validEmail'

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm()
    // const onSubmit = async (data, e) => {
    //     await sleep(2000)

    //     e.target.reset()
    //     setStatus('LOADING')
    //     console.log('submitted')
    //     console.log('data', data)
    //     setStatus('SUCCESS')
    // }
    // console.log(watch('first_name')) // watch input value by passing the name of it
    return (
        <>
            <div>Status: {status}</div>
            <h1 className="text-blue-900">Contact Us Form</h1>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <Form
                action="/api/v1/contact"
                method="post"
                control={control}
                headers={{ 'Content-Type': 'application/json' }}
                onSuccess={() => reset()}
                onError={() => alert('There was an error submitting your form')}
                validateStatus={(status) => status === 200}
            >
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <div>
                    <label>First Name *</label>
                    <input
                        {...register('first_name', { required: true })}
                        placeholder="First Name"
                        className={errors.first_name ? 'border border-red-500' : ''}
                    />
                </div>
                <div>
                    <label>Last Name *</label>
                    <input
                        {...register('last_name', { required: true })}
                        placeholder="Last Name"
                        className={errors.last_name ? 'border border-red-500' : ''}
                    />
                </div>
                <div>
                    <label>Email *</label>
                    <input
                        {...register('email', {
                            required: true,
                            pattern: VALID_EMAIL_PATTERN,
                        })}
                        placeholder="Email"
                        className={errors.email ? 'border border-red-500' : ''}
                    />
                    {errors.email?.type === 'pattern' && (
                        <span className="text-red-500">Enter valid email</span>
                    )}
                </div>
                <div>
                    <label>Business</label>
                    <input {...register('business', { required: false })} placeholder="Business" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                        {...register('message', { required: true })}
                        placeholder="Your Message"
                        rows={6}
                        className={errors.message ? 'border border-red-500' : ''}
                    ></textarea>
                </div>
                <div>{isSubmitting ? 'LOADING' : 'NOT LOADING...'}</div>
                <div>{errors?.root?.server ? 'Form submit failure' : ''}</div>
                <div>{isSubmitSuccessful ? 'Success' : ''}</div>
                <button type="submit">Submit</button>
                {/* </form> */}
            </Form>
        </>
    )
}
