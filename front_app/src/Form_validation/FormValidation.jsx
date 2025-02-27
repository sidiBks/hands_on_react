import { useEffect, useRef, useState } from "react"


export default function FormValidation() {

    const name = useRef()
    const email = useRef()
    const message = useRef()
    const acceptConditions = useRef()

    const [isFormSent, setIsFormSent] = useState(false)
    const [errors, setErrors] = useState([])
    // const [isFormValid, setIsFormValid] = useState(false)
    let isFormValid = true

    const validateForm = () => {
        const nameValue = name.current.value
        const emailValue = email.current.value
        const messageValue = message.current.value
        const acceptConditionsValue = acceptConditions.current.checked

        setErrors([])

        if (nameValue.trim() == '') {
            // name.current.style.border = 'red 1px solid'
            isFormValid = false
            setErrors(prevState => {
                return [...prevState, { field: 'name', message: ['field required'] }]
            })
        }

        if (emailValue.trim() == '') {
            // name.current.style.border = 'red 1px solid'
            isFormValid = false
            setErrors(prevState => {
                return [...prevState, { field: 'email', message: ['field required'] }]
            })
        } else if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            isFormValid = false
            setErrors(prevState => {
                return [...prevState, { field: 'email', message: ['invalid email'] }]
            })
        }

        if (messageValue.trim() == '') {
            // name.current.style.border = 'red 1px solid'
            isFormValid = false
            setErrors(prevState => {
                return [...prevState, { field: 'message', message: ['field required'] }]
            })
        }

        if( !acceptConditionsValue ) {
            isFormValid = false
            setErrors(prevState => {
                return [...prevState, { field: 'checkbox', message: ['field required'] }]
            })
        }

        return isFormValid
    }

    // useEffect(() => {
    //     setIsFormValid(errors.length == 0)
    // }, [errors])

    const displayErrors = () => {
        return errors.map((error, key) => {
            return <li key={key}> {error.field} : {error.message}</li>
        })
    }

    const resetForm = () => {
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''
        acceptConditions.current.checked = false
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (validateForm()) {
            setIsFormSent(true)
            resetForm()
        }

    }

    return (
        <div className="container my-3">
            {/* {isFormValid.toString()} */}

            {
                errors.length > 0 ?
                    <div className="alert alert-danger" role="alert">
                        <strong>ERRORS</strong>
                        {/* {JSON.stringify(errors)} */}
                        <ul>
                            {displayErrors()}
                        </ul>
                    </div> : ''
            }


            {
                isFormSent ?
                    <div className="alert alert-success" role="alert">
                        <strong>SUCCESS</strong> Message sent successfully !!
                    </div> : ''
            }


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