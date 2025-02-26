import { useEffect, useRef, useState } from "react"

export default function FormRef_DefaultVal() {

    const inputNameRef = useRef()
    const inputAgeRef = useRef()
    const inputContryRef = useRef()
    const inputAcceptConditionsRef = useRef()

    useEffect(() => {
        inputNameRef.current.value = 'Ahmed'
        inputContryRef.current.value = 'MA'
        inputAgeRef.current.value = 22
        inputAcceptConditionsRef.current.checked = true
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()
        const values = {
            name: inputNameRef.current.value,
            country: inputContryRef.current.value,
            age: inputAgeRef.current.value,
            acceptConditoons: inputAcceptConditionsRef.current.checked
        }        
        console.log(values)
    }

    

    return (
        <div className="container my-4">

            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="name" className="form-control"
                        ref={inputNameRef} />
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select id="country" className="form-control" ref={inputContryRef}>
                        <option value="MA">Maroc</option>
                        <option value="DZ">Algérie</option>
                        <option value="TN">Tunisie</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="text" id="age" className="form-control"
                        ref={inputAgeRef} />
                </div>


                <div className="form-check">
                    <input type="checkbox" id="accept" className="form-check-input"
                        ref={inputAcceptConditionsRef} />
                    <label className="form-check-label" htmlFor="accept">
                        Accept our rules
                    </label>
                </div>

                <div className="form-group">
                    <button onClick={onSubmit} className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}