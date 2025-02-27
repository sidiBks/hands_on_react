import { useRef } from "react"


export default function FormValidation() {

    const name = useRef()
    const email = useRef()
    const message = useRef()
    const acceptConditions = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        const nameValue = name.current.value
        const emailValue = email.current.value
        const messageValue = message.current.value
        const acceptConditionsValue = acceptConditions.current.checked
        console.log({nameValue, emailValue, messageValue, acceptConditionsValue})
    }

    return (
        <div className="container my-3">
            <form onSubmit={submitForm}>
                <h1>Contact Form</h1>
                <hr />
                {/* Name input */}
                <div className="form-outline mb-4">
                    <label htmlFor='name' className="form-label">Name</label>
                    <input ref={name} type="text" id="name" className="form-control" />
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input ref={email} type="email" id="email" className="form-control" />
                </div>

                {/* Message input */}
                <div className="form-outline mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea ref={message} rows={4} className="form-control" id="message" ></textarea>
                </div>

                {/* Checkbox */}
                <div className="form-outline mb-4">
                    <input ref={acceptConditions} type="checkbox" id="acceptConditions" className="form-check-input me-2" />
                    <label htmlFor="acceptConditions" className="form-check-label">
                        Accept all conditions
                    </label>
                </div>

                {/* Message input */}
                <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
            </form >
        </div>

    )
}