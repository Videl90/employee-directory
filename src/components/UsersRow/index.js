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
                    <th scope="col">{props.name}</th>
                    <th scope="col">{props.phone}</th>
                    <th scope="col">{props.email}</th>
                    <th scope="col">{props.dob}</th>
                </tr>
            </thead>
        </table>
    )
}

export default UsersRow