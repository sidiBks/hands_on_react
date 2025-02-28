import { useEffect, useRef, useState } from "react"


export default function FormValidation() {

    const name = useRef()
    const email = useRef()
    const message = useRef()
    const acceptConditions = useRef()

    const [isFormSent, setIsFormSent] = useState(false)
    const [errors, setErrors] = useState({})
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
                return {
                    ...prevState,
                    ...{ name: ['field required'] }
                }
            })
        }

        if (emailValue.trim() == '') {
            // name.current.style.border = 'red 1px solid'
            isFormValid = false
            setErrors(prevState => {
                return {
                    ...prevState,
                    ...{ email: ['field required'] }
                }
            })
        } else if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            isFormValid = false
            setErrors(prevState => {
                return {
                    ...prevState,
                    ...{ email: ['invalid email'] }
                }
            })
        }

        if (messageValue.trim() == '') {
            // name.current.style.border = 'red 1px solid'
            isFormValid = false
            setErrors(prevState => {
                return {
                    ...prevState,
                    ...{ message: ['field required'] }
                }
            })
        }

        if (!acceptConditionsValue) {
            isFormValid = false
            setErrors(prevState => {
                return {
                    ...prevState,
                    ...{ accept: ['must accept conditions'] }
                }
            })
        }

        return isFormValid
    }



    // useEffect(() => {
    //     setIsFormValid(errors.length == 0)
    // }, [errors])

    const getError = fieldName => errors[fieldName]

    const hasError = fieldName => getError(fieldName) != undefined

    const displayError = fieldName => {

        const field = document.querySelector(`#${fieldName}`)

        if (hasError(fieldName)) {
            field.style.border = '2px solid red'
            return <div className="text-danger">{getError(fieldName)}</div>
        }

        if (field != undefined) {
            field.removeAttribute('style')
        }
    }

    const displayErrors = () => {
        return Object.entries(errors).map((error, key) => {
            const [field, message] = error
            return <li key={key}> {field} : {message}</li>
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
        setIsFormSent(false)
        if (validateForm()) {
            setIsFormSent(true)
            resetForm()
        }

    }

    return (
        <div className="container my-3">
            {/* {isFormValid.toString()} */}

            {
                Object.keys(errors).length > 0 ?
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
                    {displayError('name')}
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input ref={email} type="email" id="email" className="form-control" />
                    {displayError('email')}
                </div>

                {/* Message input */}
                <div className="form-outline mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea ref={message} rows={4} className="form-control" id="message" ></textarea>
                    {displayError('message')}
                </div>

                {/* Checkbox */}
                <div className="form-outline mb-4">
                    <input ref={acceptConditions} type="checkbox" id="accept" className="form-check-input me-2" />
                    <label htmlFor="accept" className="form-check-label">
                        Accept all conditions
                    </label>
                    {displayError('accept')}
                </div>

                {/* Message input */}
                <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
            </form >
        </div>

    )
}