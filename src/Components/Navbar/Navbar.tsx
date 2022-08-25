const Navbar = () => {
    const linkArr=[
        {label:"Home", link:"/"},
        {label:"App", link:"/"}

    ]
    return(
        <>
            <ul>
                {linkArr.map(({label, link})=> <li key={label}><a href={link}>{label}</a></li>)}
            </ul>
        </>
    )
}

export default Navbar