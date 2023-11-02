import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEmployeeStore } from '../zustand/createStore';

const ViewEmployeeComponent = () => {

    const { id } = useParams();
    const getEmployeeAction = useEmployeeStore((state) => state.getEmployeeAction);
    const employeeData = useEmployeeStore((state) => state);

    useEffect(() => {
        getEmployeeAction(id);
    }, [id]);

    console.log("@@@employeeData",employeeData);


    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {employeeData?.items?.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {employeeData?.items?.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {employeeData?.items?.emailId}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployeeComponent;