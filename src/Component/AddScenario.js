import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import Home from './Home';
import { Navigation } from './Navigation/Navigation';
import { Link } from 'react-router-dom';
import { Constants } from './Constants';
import Swal from "sweetalert2";
import SideBar from './SideBar';
import TextField from '@mui/material/TextField';
import { Button, Stack } from "@mui/material"

const obj = new Constants();
export default function AddScenario() {
    const [scenarioName, setScenarioName] = useState('');
    const [scenarioTime, setScenarioTime] = useState(0);
    const [RenderHome, SetRenderHome] = useState(false);
    const [inputError, setInputError] = useState(false);
    const inputStyles = {
        m: 1,
        width: '25ch',
        '::placeholder': {
            color: 'red',
        },
    };
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
            <div className="grid-container">
                <div> <SideBar /></div>
                <div>
                    <div >
                        <h4 style={{ color: 'white' }}>Scenario / add</h4>
                        <h2 style={{ color: 'white' }}>Add Scenario</h2>

                        <div style={{ display: "flex", justifyContent: "space-between", background: "#232222", padding: "2rem 3rem" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label style={{ color: 'white', marginLeft: "5px" }}>Scenario Name</label>
                                <TextField
                                    sx={{
                                        m: 1,
                                        width: '25ch',
                                        "& .MuiInputBase-root": {
                                            color: 'white'
                                        },
                                        border: '1px solid grey', borderRadius: 1,
                                    }}
                                    inputProps={
                                        {
                                            sx: {
                                                '&::placeholder': {
                                                    color: 'grey',
                                                    opacity: 1, // otherwise firefox shows a lighter color
                                                },
                                                "& input": {
                                                    textAlign: "center",
                                                    color: "white",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'yellow',
                                                    },
                                                },
                                            },
                                        }
                                    }
                                    size="small" placeholder='Test Scenario'
                                    name="scenarioName"
                                    value={scenarioName}

                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label style={{ color: 'white', marginLeft: "5px" }}>Scenario Time (seconds)</label>
                                <TextField sx={{
                                    m: 1,
                                    width: '25ch',
                                    "& .MuiInputBase-root": {
                                        color: 'white'
                                    },
                                    border: '1px solid grey', borderRadius: 1
                                }}
                                    inputProps={
                                        {
                                            sx: {
                                                '&::placeholder': {
                                                    color: 'grey',
                                                    opacity: 1, // otherwise firefox shows a lighter color
                                                },
                                                "& input": {
                                                    textAlign: "center",
                                                    color: "white",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'yellow',
                                                    },
                                                },
                                            },
                                        }
                                    }
                                    size="small" placeholder=' 10'
                                    name='scenarioTime'
                                    value={scenarioTime}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: "2rem" }}>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" style={{ background: "#278c31" }}>Add</Button>
                                <Button variant="contained" style={{ background: "#d56b31" }}>Reset</Button>
                                <Button variant="contained" >Go Back</Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>

            {/* <div className='button-container'>
                <div className='right-content'>
                    <div className='sidebar-label'>
                        <label htmlFor="all-scenario">Scenario/add</label>
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
            </div> */}
            {/* <Button type="submit" onClick={postData}>Add</Button>
            <Button type="submit" onClick={ResetData}>Reset</Button>
            {/* <a type="submit" onClick={backtoHome}>Back</a> 
            <Button onClick={handleClick}>Back</Button>
            {RenderHome && <Home />} */}
        </React.Fragment >)
}

