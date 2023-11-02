import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEmployeeStore } from '../zustand/createStore';

const UpdateEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const formObject = {
        firstName: '',
        lastName: '',
        emailId: ''
    };

    const [formData, setFormData] = useState(formObject);
    const getEmployeeAction = useEmployeeStore((state) => state.getEmployeeAction);
    const updateEmployeeAction = useEmployeeStore((state) => state.updateEmployeeAction);
    const employeeData = useEmployeeStore((state) => state);


    useEffect(() => {
        if (id !== undefined) {
            getEmployeeAction(id);
        }
    }, [id]);

    useEffect(() => {
        if (employeeData && employeeData.items) {
            setFormData(employeeData.items);
        }
    }, [employeeData.items])

    const handleOnChangeEvent = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(formData);

    const updateEmployee = (e) => {
        e.preventDefault();
        updateEmployeeAction({ id, formData, navigate });
    }

    const resetForm = (e) => {
        e.preventDefault();
        setFormData(formObject);
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form onSubmit={updateEmployee}>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={formData?.firstName} onChange={handleOnChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={formData?.lastName} onChange={handleOnChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={formData?.emailId} onChange={handleOnChangeEvent} />
                                </div>

                                <div className="mt-2 text-center">
                                    <button className="btn btn-success" type='submit'>Update</button>
                                    <button className="btn btn-danger" onClick={resetForm} style={{ marginLeft: "10px" }}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdateEmployeeComponent;