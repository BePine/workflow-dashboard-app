import { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Intro from "./Intro"
import './main.css'
const Main = () => {
    // const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod justo magna, vitae luctus lorem finibus at. Cras aliquet malesuada augue. Vestibulum id aliquet justo. Donec sit amet enim purus. Integer velit ex, efficitur a tempus ut, mollis suscipit nunc. Vivamus auctor ipsum ac mauris suscipit, eget tempus nunc malesuada. Integer placerat lacinia magna sed finibus. Proin vestibulum lacus imperdiet elit aliquam commodo. Nunc elit purus, bibendum quis est a, egestas convallis metus. Donec vehicula justo eu aliquet hendrerit. Praesent orci nisl, mattis gravida facilisis id, tincidunt vel lectus. Vestibulum aliquet maximus nulla, sed laoreet quam tincidunt nec. Aliquam luctus molestie tempus. Mauris tristique consectetur finibus. Nullam nisl sem, commodo nec suscipit nec, bibendum vitae ligula."
    const [show, setShow] = useState<"block"|"none">("none")
    const [visible, setVisible] = useState<1|0>(1)
    

        useEffect(()=>{
            if(sessionStorage.getItem("animationState") === null){
            setShow("block")
                setTimeout(() => {
                    setVisible(0)
                        setTimeout(() => {
                            setShow("none")
                            sessionStorage.setItem("animationState", "true") 
                        },500);
                    },2500);
            }
            else{
                setShow("none")
            }
                 
        },[])

    return(
        <>
            <Intro display={show} opacity={visible}/>
            <Header/>
            <h2>About us</h2>
            <div className="content">Workflow is our application dedicated for people looking forward to organize
            their workflow as the name suggests. With workflow you can easily schedule all your incoming meetings, 
            manage your todo list and plan upcoming days of work.</div>
            <img className="mainImage" src={require('../../Assets/Images/remote-team.png')} alt="" />
            <Footer/>
        </>
    )
}

export default Main