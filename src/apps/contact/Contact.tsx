import { useForm } from 'react-hook-form'

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log('submitted')
        console.log('data', data)
    }
    console.log(watch('example')) // watch input value by passing the name of it
    return (
        <>
            <h1>Contact Us Form</h1>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register('first_name', { required: true })} placeholder="First Name" />
                <label>Last Name</label>
                <input {...register('last_name', { required: true })} placeholder="Last Name" />
                <label>Email</label>
                <input
                    {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    placeholder="Email"
                />
                <label>Business</label>
                <input {...register('business', { required: false })} placeholder="Business" />
                <label>Message</label>
                <textarea
                    {...register('message', { required: true })}
                    placeholder="Your Message"
                    rows={6}
                ></textarea>
                {errors.first_name && <span>REQUIRED YO</span>}
                {errors.email?.type === 'pattern' && <span>Enter valid email</span>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
