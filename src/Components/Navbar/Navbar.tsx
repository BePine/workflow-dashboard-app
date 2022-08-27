import { Link } from "react-router-dom"

const Navbar = () => {
    const linkArr=[
        {label:"Home", link:"/"},
        {label:"Login", link:"/authentication"}

    ]
    return(
        <>
            <ul>
                {linkArr.map(({label, link})=> <li key={label}><Link to={link}>{label}</Link></li>)}
            </ul>
        </>
    )
}

export default Navbar