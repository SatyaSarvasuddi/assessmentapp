import { Link } from 'react-router-dom';


const SideBar = () => {


    return (
        <>
            <div style={{width: "20vw", height:"100vh", background: "#82cbd3"}}>
                <div style={{display: "flex"}}>
                <ul>
                    <li>
                            <Link style={linkStyles} to='/'>Home</Link>
                            </li>
                            <li>
                                <Link style={linkStyles} to='/AddScenario'>Add Scenario</Link>
                            </li>
                            <li>
                                <Link style={linkStyles} to='/AllScenario'>All Scenario</Link>
                            </li>
                            <li>
                                <Link style={linkStyles} to='/AddVehicles'>Add Vehicles</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </>
    )
}

const linkStyles = {
    textDecoration: "none",
     color:"black", 
     fontWeight:"600"
}

export default SideBar;