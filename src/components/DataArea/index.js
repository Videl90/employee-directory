import React, { Component } from 'react';
import "./styles.css";
import API from "../utils/API.js"
import DataBody from './components/DataBody';
import Search from "./components/SearchBox";

export default class DataArea extends Component {
    state = {
        users:[{}],
        order: "descend",
        filteredUsers:[{}]
    }

    headings = []

    handleSort = heading => {
    }

    handleSearchChange = event => {}
    
    componentDiMount () {
        ExtensionScriptApis.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <>
                <Nav handleSearchChange ={this.handleSearchChange} />
                <div className="data-area">
                    <DataTable 
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        )
    }
}

export default DataArea;