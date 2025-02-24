import { useState } from "react"

export default function Form() {

    const [formValues, SetFormValues] = useState({
        name: '',
        country: 'MA',
        age: null, 
        accept: false
    })

    const handleChange = (e) => {
        const id = e.currentTarget.id // currentTarget return htmlElement
        let value = e.currentTarget.value

        if(e.currentTarget.type == 'checkbox') {
            value = e.currentTarget.checked
        }



        /*############## NON OPTIMAL (select type = text type) ##############*/
        // switch (e.currentTarget.type) {
        //     case 'text':
        //         value = e.currentTarget.value
        //         break
        //     case 'checkbox':
        //         value = e.currentTarget.checked
        //         break
        //     default:
        //         console.error('invalid type')
        // }

        SetFormValues(prev => {
            return { ...prev, ...{ [id]: value } } // [] gives a dynamic behavior to id
        })
    }


    return (
        <div className="container my-4">
            render display : {JSON.stringify(formValues)}
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="name" className="form-control"
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="country">City</label>
                    <select id="country" className="form-control" onChange={handleChange}>
                        <option value="MA">Maroc</option>
                        <option value="DZ">Algérie</option>
                        <option value="TN">Tunisie</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="text" id="age" className="form-control"
                        onChange={handleChange} />
                </div>


                <div className="form-check">
                    <input type="checkbox" id="accept" className="form-check-input"
                        onChange={handleChange} />
                    <label className="form-check-label" htmlFor="accept">
                        Accept our rules
                    </label>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}