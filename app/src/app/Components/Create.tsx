import { useState } from "react"

export default function Create() {
    const [todo, setTodo] = useState({
                                        name: '',
                                        description: ''                                
                                    })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        // send to api
        // return to home page
    }
    
    return (
        <form onChange={handleOnChange}>
            <input name="title" />
            <textarea name="description" />
            <input type="submit" onSubmit={handleOnSubmit}/>
        </form>
    )
}