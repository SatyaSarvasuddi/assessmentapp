import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import Home from './Home';
import { Navigation } from './Navigation/Navigation';
import { Link } from 'react-router-dom';
import { Constants } from './Constants';
import Swal from "sweetalert2";

const obj = new Constants();
export default function AddScenario() {
    const [scenarioName, setScenarioName] = useState('');
    const [scenarioTime, setScenarioTime] = useState(0);
    const [RenderHome, SetRenderHome] = useState(false);
    const [inputError, setInputError] = useState(false);
    const postData = () => {
        try {
            if (scenarioName !== "" && scenarioTime !== "") {
                axios.post(obj.APIurl, {
                    scenarioName,
                    scenarioTime
                }).then(() => {
                    Swal.fire({
                        icon: 'success',
                        text: 'Added Successfully'
                    });
                    setScenarioName('');
                    setScenarioTime('');
                    setInputError(false);
                });
            }
            else {
                setInputError(true);
            }
        } catch (error) {
            console.log(error);
        }

    }
    const ResetData = () => {
        try {
            setScenarioName('');
            setScenarioTime(0);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        try {
            SetRenderHome(true);
            console.log(RenderHome);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <React.Fragment>
            <div className='button-container'>
                <div className='right-content'>
                    <div className='sidebar-label'>
                        <label htmlFor="all-scenario">Scenario/add</label>
                    </div>
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
                    <div className="add-scenario-label">
                        <label htmlFor="add-scenario">Add Scenario</label>
                    </div>
                    <div className={`input-container ${inputError ? 'input-error' : ''}`}>
                        <label htmlFor="scenario-name">Scenario Name:</label>
                        <input
                            type="text"
                            id="scenario-name"
                            value={scenarioName}
                            onChange={(e) => setScenarioName(e.target.value)}
                        />
                    </div>
                    <div className={`input-container ${inputError ? 'input-error' : ''}`}>
                        <label htmlFor="scenario-time">Scenario Time:</label>
                        <input
                            type="text"
                            id="scenario-time"
                            value={scenarioTime}
                            onChange={(e) => setScenarioTime(e.target.value)}
                        />
                    </div>
                    <div className="buttons-wrapper">
                        <button className="green-button">New Scenario</button>
                        <button className="blue-button">Add Vehicle</button>
                        <button className="orange-button">Delete All</button>
                    </div>

                </div>
            </div>
            {/* <Button type="submit" onClick={postData}>Add</Button>
            <Button type="submit" onClick={ResetData}>Reset</Button>
            {/* <a type="submit" onClick={backtoHome}>Back</a> 
            <Button onClick={handleClick}>Back</Button>
            {RenderHome && <Home />} */}
        </React.Fragment>)
}

