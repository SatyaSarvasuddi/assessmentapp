import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const [active, setActive] = useState('Home');

    const handleSelected = (data) => {
        setActive(data);
    }
    useEffect(() => {

    }, [active])
    return (
        <>
            <div style={{ width: "20vw", height: "100vh", background: "#82cbd3", marginTop: "-1rem" }}>
                <div >
                    <ul style={{ listStyle: "none", paddingTop: "4rem", paddingLeft: "1rem" }}>
                        <li onClick={() => handleSelected("Home")} className={active === 'Home' ? 'sidebar-li-active' : 'sidebar-li'}>
                            <Link className={active === 'Home' ? 'link-active' : 'link'} to='/'>Home</Link>
                        </li>
                        <li onClick={() => handleSelected("Add Scenario")} className={active === 'Add Scenario' ? 'sidebar-li-active' : 'sidebar-li'}>
                            <Link className={active === 'Add Scenario' ? 'link-active' : 'link'} to='/AddScenario'>Add Scenario</Link>
                        </li>
                        <li onClick={() => handleSelected("All Scenario")} className={active === 'All Scenario' ? 'sidebar-li-active' : 'sidebar-li'}>
                            <Link className={active === 'All Scenario' ? 'link-active' : 'link'} to='/AllScenario'>All Scenario</Link>
                        </li>
                        <li onClick={() => handleSelected("Add Vehicles")} className={active === 'Add Vehicles' ? 'sidebar-li-active' : 'sidebar-li'}>
                            <Link className={active === 'Add Vehicles' ? 'link-active' : 'link'} to='/AddVehicles'>Add Vehicles</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const linkStyles = {
    textDecoration: "none",
    color: "black",
    fontWeight: "600",
    fontSize: "18px",
}

const linkHoverStyles = {
    color: "blue",
};

export default SideBar;