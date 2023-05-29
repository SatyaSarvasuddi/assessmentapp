import React, { PureComponent, useEffect, useState } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Link } from 'react-router-dom';
import { Button, Label, Table } from 'semantic-ui-react';
import { Constants } from './Constants';
import { data } from 'jquery';
import axios from 'axios';
const obj = new Constants();

export function AllScenario() {
    const [scenarioData, setscenariodata] = useState([]);
    useEffect(() => {
        try {
            axios.get(obj.APIurl).then((response) => {
                setscenariodata(response.data);
            }).catch((ex) => {
                console.log(ex);
            });
        } catch (error) {
            console.error(error);
        }
    });
    return (
        <React.Fragment>
            <div>
                <div className="button-container">

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
                    <div className="sidebar-label">
                        <label htmlFor="all-scenario">All Scenario:</label>
                    </div>
                    <div className='button-space'></div>
                    <div className="buttons-wrapper">
                        <button className="green-button">New Scenario</button>
                        <button className="blue-button">Add Vehicle</button>
                        <button className="orange-button">Delete All</button>
                    </div>
                </div>

                <div className="table-container">
                    <Table singleline>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Scenario ID</Table.HeaderCell>
                                <Table.HeaderCell>Scenario Name</Table.HeaderCell>
                                <Table.HeaderCell>Scenario Time</Table.HeaderCell>
                                <Table.HeaderCell>Number of Vehicles</Table.HeaderCell>
                                <Table.HeaderCell>Add Vehicle</Table.HeaderCell>
                                <Table.HeaderCell>Edit</Table.HeaderCell>
                                <Table.HeaderCell>Delete</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {scenarioData.map((dat) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{dat.id}</Table.Cell>
                                        <Table.Cell>{dat.scenarioName}</Table.Cell>
                                        <Table.Cell>{dat.scenarioTime}</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><i className="fas fa-trash-alt"></i></Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </React.Fragment >
    )
}