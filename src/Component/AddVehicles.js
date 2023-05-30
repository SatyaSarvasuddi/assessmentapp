import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Constants } from './Constants';
import Select from "react-select";
import axios from 'axios';
import { Label, Input, TextArea, Button } from 'semantic-ui-react';
import { error } from 'jquery';
import Swal from "sweetalert2";
import Home from './Home';


const obj = new Constants();

export function AddVehicles() {
    const [scenariodata, setscenariodata] = useState([]);
    const [selectedScenarioOption, setselectedScenarioOption] = useState([]);
    const [vehicleName, setVehicleName] = useState('');
    const [SpeedNo, setSpeedNo] = useState('');
    const [Xvalue, setXvalue] = useState('');
    const [Yvalue, setYvalue] = useState('');
    const [selectedDirectionopt, setselectedDirectionopt] = useState([]);
    const [Homepage, setHomepage] = useState(false);
    const DirectionOptions = [
        { label: "Towards", value: "Towards" },
        { label: "Backwards", value: "Backwards" },
        { label: "Upwards", value: "Upwards" },
        { label: "Downwards", value: "Downwards" }
    ];
    useEffect(() => {
        try {
            let APIdata = [];
            axios.get(obj.APIurl).then((Response) => {
                Response.data.map((dat, val) => {
                    APIdata.push({ label: dat.scenarioName, value: dat.scenarioName });
                });
                setscenariodata(APIdata);
            }).catch((ex) => {
                console.error(ex);
            });
        } catch (error) {
            console.error(error);
        }

    }, []);
    const HandleChange = selectedOption => {
        try {
            setselectedScenarioOption(selectedOption);
        } catch (error) {
            console.error(error);
        }
    }
    const HandleDirectionChange = selectedOption => {
        try {
            setselectedDirectionopt(selectedOption);
        } catch (error) {
            console.error(error);
        }
    }
    const Handletextchange = (val, typeOftext) => {
        try {
            if (typeOftext === "VehicleName") {
                setVehicleName(val);
            }
            else if (typeOftext === "Speedno") {
                setSpeedNo(val);
            }
            else if (typeOftext === "Xval") {
                setXvalue(val);
            }
            else if (typeOftext === "Yval") {
                setYvalue(val);
            }
        } catch (error) {
            console.error(error);
        }
    }
    const postDatatoserver = () => {
        try {
            if (selectedScenarioOption.label != undefined && vehicleName != undefined && SpeedNo != undefined && Xvalue != undefined && Yvalue != undefined && selectedDirectionopt.label != undefined) {
                axios.post(obj.vehicleAPIurl, {
                    selectedDirectionopt,
                    selectedScenarioOption,
                    Xvalue,
                    Yvalue,
                    SpeedNo,
                    vehicleName
                }).then(() => {
                    Swal.fire({
                        icon: 'success',
                        text: 'Added Successfully'
                    });
                }).catch((ex) => {
                    console.error(ex);
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
    const ResetData = () => {
        try {
            setSpeedNo('');
            setVehicleName('');
            setXvalue('');
            setYvalue('');
            setselectedScenarioOption([]);
            setselectedDirectionopt([]);
        } catch (error) {
            console.error(error);
        }
    }
    const backtoHome = () => {
        try {
            setHomepage(true);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <React.Fragment>
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
            <div className='content'>
                <Label>Vehicle/add</Label>
                <Label>Scenario List</Label>
                <Select
                    options={scenariodata}
                    onChange={HandleChange}
                    value={selectedScenarioOption ? selectedScenarioOption : "Select Scenario"}
                    placeholder="Select Scenario"
                    className='mr-2'>
                    Scenario List
                </Select>
                <Label>Vehicle Name</Label>
                <Input placeholder='Vehicle Name' onKeyDown={(evt) => {

                    if (evt.key === "a" ||
                        evt.key === "a" || evt.key === "b" || evt.key === "c" || evt.key === "d" || evt.key === "e" || evt.key === "f" || evt.key === "g" || evt.key === "h" || evt.key === "i" || evt.key === "j" || evt.key === "k" || evt.key === "l" || evt.key === "m" || evt.key === "n" || evt.key === "o" || evt.key === "p" || evt.key === "q" || evt.key === "r" || evt.key === "s" || evt.key === "t" || evt.key === "u" || evt.key === "v" || evt.key === "w" || evt.key === "x" || evt.key === "y" || evt.key === "z" ||

                        evt.key === "A" || evt.key === "B" || evt.key === "C" || evt.key === "D" || evt.key === "E" || evt.key === "F" || evt.key === "G" || evt.key === "H" || evt.key === "I" || evt.key === "J" || evt.key === "K" || evt.key === "L" || evt.key === "M" || evt.key === "N" || evt.key === "O" || evt.key === "P" || evt.key === "Q" || evt.key === "R" || evt.key === "S" || evt.key === "T" || evt.key === "U" || evt.key === "V" || evt.key === "W" || evt.key === "X" || evt.key === "Y" || evt.key === "Z"

                        || evt.key === "v" || evt.key === "c" || evt.key === " " || evt.key == "Delete" || evt.key == "Backspace" || evt.key == "Control") {

                        return true;
                    }
                    else {
                        evt.preventDefault();
                    }

                }} value={vehicleName} className='vehicleName' onChange={(e) => Handletextchange(e.target.value, 'VehicleName')} ></Input>
                <Label>Speed</Label>
                <Input placeholder='Speed' onKeyDown={(evt) => {

                    if (evt.key === "1" || evt.key === "2" || evt.key === "3" || evt.key === "4" || evt.key === "5" || evt.key === "6" || evt.key === "7" || evt.key === "8" || evt.key === "9" || evt.key === "0" || evt.key == "Delete" || evt.key == "Backspace" || evt.key == "Control") {

                        return true;
                    }
                    else {
                        evt.preventDefault();
                    }

                }} value={SpeedNo} onChange={(e) => Handletextchange(e.target.value, "Speedno")}></Input>
                <Label>Position X</Label>
                <Input placeholder="X-coordinate" onKeyDown={(evt) => {

                    if (evt.key === "1" || evt.key === "2" || evt.key === "3" || evt.key === "4" || evt.key === "5" || evt.key === "6" || evt.key === "7" || evt.key === "8" || evt.key === "9" || evt.key === "0" || evt.key == "Delete" || evt.key == "Backspace" || evt.key == "Control") {

                        return true;
                    }
                    else {
                        evt.preventDefault();
                    }

                }} onChange={(e) => Handletextchange(e.target.value, "Xval")} value={Xvalue}></Input>
                <Label>Position Y</Label>
                <Input placeholder="Y-coordinate" onKeyDown={(evt) => {

                    if (evt.key === "1" || evt.key === "2" || evt.key === "3" || evt.key === "4" || evt.key === "5" || evt.key === "6" || evt.key === "7" || evt.key === "8" || evt.key === "9" || evt.key === "0" || evt.key === "Delete" || evt.key === "Backspace" || evt.key === "Control") {

                        return true;
                    }
                    else {
                        evt.preventDefault();
                    }

                }} onChange={(e) => Handletextchange(e.target.value, "Yval")} value={Yvalue}></Input>
                <Label>Direction</Label>
                <Select
                    options={DirectionOptions}
                    onChange={HandleDirectionChange}
                    value={selectedDirectionopt ? selectedDirectionopt : "Select Direction"}
                    placeholder="Select Direction"
                >
                </Select>
                <div>
                    <Button onClick={postDatatoserver} >Add</Button>
                    <Button onClick={ResetData}>Reset</Button>
                    <div>
                        <Button ><Link to='/'> Go Back</Link></Button>

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}