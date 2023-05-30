import React, { PureComponent, useEffect, useState } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import { Constants } from './Constants';
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';
import axios from 'axios';
import SideBar from './SideBar';
import { Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete, MdEdit, MdAddCircle } from 'react-icons/md';

const obj = new Constants();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#302e2e",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "rgb(255 255 255 / 44%)",
    },
    '&:nth-of-type(even)': {
        backgroundColor: "rgb(255 255 255 / 44%)",
    },
    '& + &': {
        borderTop: '2px solid black',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export function AllScenario() {
    const [scenarioData, setscenariodata] = useState([]);
    const [vehicledata, setvehicledata] = useState([]);
    const [tabledata, settabledata] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        try {
            let tabledat = [];
            let count = 0;
            axios.get(obj.APIurl).then((response) => {
                setscenariodata(response.data);
            }).then(async () => {
                await axios.get(obj.vehicleAPIurl).then((val) => {
                    setvehicledata(val.data);
                }).catch((ex) => {
                    console.log(ex);
                }).then(async () => {
                    await scenarioData.map((dat) => {
                        vehicledata.map((val) => {
                            if (dat.scenarioName === val.selectedScenarioOption.label) {
                                count += 1;
                            }
                            tabledat.push({ ScenarioID: dat.id, scenarioName: dat.scenarioName, scenarioTime: dat.scenarioTime, Nov: count })
                        });
                    });
                    settabledata(tabledat);
                    console.log(tabledata);
                })
            }).catch((ex) => {
                console.log(ex);
            });
        } catch (error) {
            console.error(error);
        }
    });
    const handleAddVehicleClick = (dat) => {
        try {
            nav("/AddVehicles", { state: dat });
        } catch (error) {
            console.error(error);
        }
    }
    const DeleteAll = () => {
        try {

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='grid-container'>
            <div><SideBar active={"AllScenario"} /></div>
            <div>
                <div>
                    <h4 style={{ color: 'white' }}>Scenario / all</h4>
                    <h2 style={{ color: 'white' }}>All Scenario</h2>
                    <div style={{ marginTop: "-3rem", marginLeft: "35rem" }}>
                        <Stack spacing={2} direction='row'>
                            <Button variant="contained" style={{ background: "#d56b31" }} onClick={() => nav("/AddScenario")} >New Scenario</Button>
                            <Button variant="contained" style={{ background: "#278c31" }} onClick={() => nav("/AddVehicles")}>Add Vehicle</Button>
                            <Button variant="contained" style={{ background: "#d56b31" }} >Delete All</Button>
                        </Stack>
                    </div>
                    <div style={{ marginTop: "2rem", marginRight: "4rem" }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>Scenario ID</StyledTableCell>
                                        <StyledTableCell align='center'>Scenario Name</StyledTableCell>
                                        <StyledTableCell align='center'>Scenario Time</StyledTableCell>
                                        <StyledTableCell align='center'>Number of Vehicles</StyledTableCell>
                                        <StyledTableCell align='center'>Add Vehicle</StyledTableCell>
                                        <StyledTableCell align='center'>Edit</StyledTableCell>
                                        <StyledTableCell align='center'>Delete</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tabledata.map((row) => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell align='center' component="th" scope="row">
                                                {row.ScenarioID}
                                            </StyledTableCell>
                                            <StyledTableCell align='center' component="th" scope="row">
                                                {row.scenarioName}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.scenarioTime}</StyledTableCell>
                                            <StyledTableCell align="center">{row.Nov}</StyledTableCell>
                                            <StyledTableCell align="center"><MdAddCircle onClick={() => handleAddVehicleClick(row)} /></StyledTableCell>
                                            <StyledTableCell align="center"><MdEdit /></StyledTableCell>
                                            <StyledTableCell align="center"><MdDelete /></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                </div>
            </div>
        </div>
        // <React.Fragment>
        //     <div>
        //         <div className="button-container">

        //             <div className="sidebar">
        //                 <ul>
        //                     <li>
        //                         <Link to='/'>Home</Link>
        //                     </li>
        //                     <li>
        //                         <Link to='/AddScenario'>Add Scenario</Link>
        //                     </li>
        //                     <li>
        //                         <Link to='/AllScenario'>All Scenario</Link>
        //                     </li>
        //                     <li>
        //                         <Link to='/AddVehicles'>Add Vehicles</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="sidebar-label">
        //                 <label htmlFor="all-scenario">All Scenario:</label>
        //             </div>
        //             <div className='button-space'></div>
        //             <div className="buttons-wrapper">
        //                 <button className="green-button">New Scenario</button>
        //                 <button className="blue-button">Add Vehicle</button>
        //                 <button className="orange-button">Delete All</button>
        //             </div>
        //         </div>

        //         <div className="table-container">
        //             <Table singleline>
        //                 <Table.Header>
        //                     <Table.Row>
        //                         <Table.HeaderCell>Scenario ID</Table.HeaderCell>
        //                         <Table.HeaderCell>Scenario Name</Table.HeaderCell>
        //                         <Table.HeaderCell>Scenario Time</Table.HeaderCell>
        //                         <Table.HeaderCell>Number of Vehicles</Table.HeaderCell>
        //                         <Table.HeaderCell>Add Vehicle</Table.HeaderCell>
        //                         <Table.HeaderCell>Edit</Table.HeaderCell>
        //                         <Table.HeaderCell>Delete</Table.HeaderCell>
        //                     </Table.Row>
        //                 </Table.Header>
        //                 <Table.Body>
        //                     {scenarioData.map((dat) => {
        //                         return (
        //                             <Table.Row>
        //                                 <Table.Cell>{dat.id}</Table.Cell>
        //                                 <Table.Cell>{dat.scenarioName}</Table.Cell>
        //                                 <Table.Cell>{dat.scenarioTime}</Table.Cell>
        //                                 <Table.Cell></Table.Cell>
        //                                 <Table.Cell></Table.Cell>
        //                                 <Table.Cell></Table.Cell>
        //                                 <Table.Cell><i className="fas fa-trash-alt"></i></Table.Cell>
        //                             </Table.Row>
        //                         )
        //                     })}
        //                 </Table.Body>
        //             </Table>
        //         </div>
        //     </div>
        // </React.Fragment >
    )
}