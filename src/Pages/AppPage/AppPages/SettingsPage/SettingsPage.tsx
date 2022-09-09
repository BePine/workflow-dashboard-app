import { ChangeEvent, FormEvent, useContext, useState } from "react";
import PageContext from "../../../../Contexts/PageContext";
import './settingsPage.css'
const SettingsPage = () => {
	const { setDisplayedName } = useContext(PageContext);
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        setDisplayedName(inputValue)
        setInputValue('')
    }
    return(
        <>
            <form onSubmit={handleSubmit} data-testid="settingsPageTest">
                <h3>Your name or nickname:</h3>
                <input type="text" placeholder="displayed name" value={inputValue} onChange={handleChange}/>
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default SettingsPage