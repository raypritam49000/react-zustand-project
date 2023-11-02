import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useEmployeeStore } from '../zustand/createStore';

const ListEmployeeComponent = () => {

    const navigate = useNavigate();
    const employeeData = useEmployeeStore((state) => state);
    const getAllEmployee = useEmployeeStore((state) => state.getAllEmployee);
    const deleteEmployeeById = useEmployeeStore((state) => state.deleteEmployee);

    console.log(employeeData);

    useEffect(() => {
        getAllEmployee();
    }, []);


    const deleteEmployee = (id) => {
        deleteEmployeeById(id);
    };


    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`)
    }

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    }

    const addEmployee = () => {
        navigate(`/add-employee`);
    }


    if (employeeData?.loading === true) {
        return <h3>Loading ...</h3>
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Employee ID</th>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           employeeData && Array.isArray(employeeData?.items) && employeeData?.items?.length>0 && employeeData?.items?.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName}</td>
                                        <td> {employee.emailId}</td>
                                        <td>
                                            <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

        </div>    
    )
}

export default ListEmployeeComponent