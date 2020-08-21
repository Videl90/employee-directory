import React from "react";
import "./style.css";

function TableTitles(props){
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={props.nameClick}>Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Date of Birth</th>
                </tr>
            </thead>
        </table>
    )
}

export default TableTitles;