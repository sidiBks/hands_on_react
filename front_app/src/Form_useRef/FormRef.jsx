import { useRef, useState } from "react"

export default function FormRef() {

    const inputNameRef = useRef()
    const inputAgeRef = useRef()
    const inputContryRef = useRef()
    const inputAcceptConditionsRef = useRef()


    const [formValues, SetFormValues] = useState({
        name: '',
        country: 'MA',
        age: null,
        accept: false
    })


    // const handleChange = (e) => {
    //     const id = e.currentTarget.id // currentTarget return htmlElement


    //     /* Replace with sugar syntaxic conditional structure*/
    //     let value = e.currentTarget.value

    //     if(e.currentTarget.type == 'checkbox') {
    //         value = e.currentTarget.checked
    //     }


    //     SetFormValues(prev => {
    //         return { ...prev, ...{ [id]: value } } // [] gives a dynamic behavior to id
    //     })
    // }



    const onSubmit = (event) => {
        event.preventDefault()
        const values = {
            name: inputNameRef.current.value,
            country: inputContryRef.current.value,
            age: inputAgeRef.current.value,
            acceptConditoons: inputAcceptConditionsRef.current.checked,
        }        
        console.log(values)
    }

    
    return (
        <div className="container my-4">
            <h1>Last update:</h1>
            <hr />
            date : {(new Date()).toLocaleString()}
            <hr />
            <h1>Values</h1>
            <hr />
            render display : {JSON.stringify(formValues)}
            <hr />
            {/* 
                Note:
                    > la date et le render display ne changent pas ce qui vérifie
                la note dans FORM.md
            */}
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