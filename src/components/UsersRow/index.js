import React from 'react';
import "./style.css";

function UsersRow (props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">
                        <img src={props.img} alt={props.name}/>
                    </th>
                    <th scope="col">Name{props.name}</th>
                    <th scope="col">Phone{props.phone}</th>
                    <th scope="col">email{props.email}</th>
                    <th scope="col">dob{props.dob}</th>
                </tr>
            </thead>
        </table>
    )
}

export default UsersRow;