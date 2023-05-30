import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'semantic-ui-react';
import AddScenario from './AddScenario';
import { Navigation } from './Navigation/Navigation';
import Select from "react-select";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import * as $ from "jquery";
import { Constants } from './Constants';
import Swal from "sweetalert2";
import SideBar from './SideBar';

const obj = new Constants();
export default function Home() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        try {
            axios.get(obj.vehicleAPIurl).then((response) => {
                setAPIData(response.data);
            }).catch((ex) => {
                console.log(ex);
            });
            // const call = $.ajax({
            //     url: "https://646efdd309ff19b120866359.mockapi.io/vehiclescenarios/vehiclesdata",
            //     type: "POST",
            //     dataType: "json",
            //     async: false
            // });
            // call.done((result, textStatus, jqXHR) => {
            //     setAPIData(result.data);
            // });
        } catch (error) {
            console.error(error);
        }
    }, []);
    const deletescenario = async (cell, row) => {
        try {
            return (

                <Button onClick={() => deletedata(row.id)}>Delete</Button>
            )
        } catch (error) {
            console.error(error);
        }
    }
    const deletedata = (id) => {
        try {
            axios.delete(obj.APIurl + `/${id}`).then(() => {
                Swal.fire({
                    icon: 'success',
                    text: 'Deleted Successfully'
                });
            }).then(() => {
                getData();
            })
        } catch (error) {
            console.error(error);
        }
    }
    const editData = (dat) => {
        try {

        } catch (error) {
            console.error(error);
        }
    }
    const getData = () => {
        try {
            axios.get(obj.vehicleAPIurl).then((response) => {
                setAPIData(response.data);
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <SideBar active={"Home"} />
            <Select>

            </Select>
            {/* <BootstrapTable
                data={APIData}
                bordered
                pagination>
                <TableHeaderColumn dataField='id' isKey={true} >Scenario ID</TableHeaderColumn>
                <TableHeaderColumn dataField='scenarioName'>Scenario Name</TableHeaderColumn>
                <TableHeaderColumn dataField='scenarioTime'>ScenarioTime</TableHeaderColumn>
                <TableHeaderColumn dataField='NumberofVehicles'>Number of Vehicles</TableHeaderColumn>
                <TableHeaderColumn dataField='AddVehicle'>Add Vehicle</TableHeaderColumn>
                <TableHeaderColumn dataField='Edit'>Edit</TableHeaderColumn>
                <TableHeaderColumn dataFormat={(cell, row) => deletescenario(cell, row)}>Delete</TableHeaderColumn>
            </BootstrapTable> */}
            <div>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Vehicle ID</Table.HeaderCell>
                            <Table.HeaderCell>Vehicle Name</Table.HeaderCell>
                            <Table.HeaderCell>Position X</Table.HeaderCell>
                            <Table.HeaderCell>Position Y</Table.HeaderCell>
                            <Table.HeaderCell>Speed</Table.HeaderCell>
                            <Table.HeaderCell>Direction</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {APIData.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.vehicleName}</Table.Cell>
                                    <Table.Cell>{data.Xvalue}</Table.Cell>
                                    <Table.Cell>{data.Yvalue}</Table.Cell>
                                    <Table.Cell>{data.SpeedNo}</Table.Cell>
                                    <Table.Cell>{data.selectedDirectionopt.label}</Table.Cell>
                                    <Table.Cell><Button onClick={() => editData(data)}>Edit</Button></Table.Cell>
                                    <Table.Cell><Button onClick={() => deletedata(data)}>Delete</Button></Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}