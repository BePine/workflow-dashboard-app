import { useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


const WorkflowApp = () => {
    const [choice, setChoice]  = useState<number>(0)
    const handleClickLogin = () => {
        setChoice(1)
    }
    const handleClickRegister = () => {
        setChoice(2)
    }
    return(
        <>
            <Header/>
            <div className="loginRegister">
                Please choose option:
                <button onClick={handleClickLogin}>Login</button>
                <button onClick={handleClickRegister}>register</button>
                {choice===1? <SignIn/> : null}
                {choice===2? <SignUp/> : null}

            </div>
            <div className="appContainer">
                
            </div>
            <Footer/>
        </>
    )
}
export default WorkflowApp