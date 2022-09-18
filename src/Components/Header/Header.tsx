import Navbar from "../Navbar/Navbar"
import "./header.css"
const Header = () => {
    return(
        <div data-testid="headerElement" className="App-header">
            <Navbar/>
            <hr />
        </div>
    )    
}

export default Header