import React from 'react';
import "./style.css";

function DataTable(){
    return(
        <table className="table">
            <thread>
                <tr>
                    <th>Image</th>
                    <th><button>Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thread>
        </table>
    )
}

export default DataTable;