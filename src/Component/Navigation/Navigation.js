import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import AddScenario from "../AddScenario";
import { AllScenario } from "../AllScenario";
import Home from "../Home";
import { AddVehicles } from "../AddVehicles";
import './Navigation.css';
import { Link } from "react-router-dom";

export function Navigation() {
    const [HomeComponent, setHomeComponent] = useState(false);
    const [AddScenarioComponent, setAddScenarioComponent] = useState(false);
    const [AddVehicleComponent, setAddVehicleComponent] = useState(false);
    const [AllScenarioComponent, setAllScenarioComponent] = useState(false);
    const HandleClick = (e, ComponentName) => {
        if (e === "Home") {
            setHomeComponent(true);
            setAddScenarioComponent(false);
            setAddVehicleComponent(false);
            setAddVehicleComponent(false);
        }
        else if (e === "AddScenario") {
            setHomeComponent(false);
            setAddScenarioComponent(true);
            setAddVehicleComponent(false);
            setAddVehicleComponent(false);
        }
        else if (e === "AddVehicles") {
            setHomeComponent(false);
            setAddScenarioComponent(false);
            setAddVehicleComponent(true);
            setAddVehicleComponent(false);
        }
        else if (e === "AllScenario") {
            setHomeComponent(false);
            setAddScenarioComponent(false);
            setAddVehicleComponent(false);
            setAddVehicleComponent(true);
        }

    }


    return (
        // <div className="sidebar">
        //     <div>
        //         <Button className="button" onClick={(e) => HandleClick('Home')}>Home</Button>
        //         {HomeComponent && <Home />}
        //     </div>
        //     <div>
        //         <Button className="button" onClick={(e) => HandleClick('AddScenario')}>Add Scenario</Button>
        //         {AddScenarioComponent && <AddScenario />}
        //     </div>
        //     <div>
        //         <Button className="button" onClick={(e) => HandleClick('AllScenario')}>All Scenario</Button>
        //         {AllScenarioComponent && <AllScenario />}
        //     </div>
        //     <div>
        //         <Button className="button" onClick={(e) => HandleClick('AddVehicles')}>Add Vehicle</Button>
        //         {AddVehicleComponent && <AddVehicles />}
        //     </div>
        // </div>
        <div className="sidebar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/AddScenario'>Add Scenario</Link>
                </li>
                <li>
                    <Link to='/AllScenario'>All Scenario</Link>
                </li>
                <li>
                    <Link to='/AddVehicles'>Add Vehicles</Link>
                </li>
            </ul>
        </div>
    )
}
