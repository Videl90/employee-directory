import React, { Component } from 'react';
import "./styles.css";
import API from "../utils/API.js"
import DataBody from './components/DataBody';
import SearchBox from '../SearchBox';

class DataArea extends Component {
    state = {
        users:[{}],
        order: "descend",
        filteredUsers:[{}]
    }

    headings = []

    /*handleSort = heading => {
        if(this.state.order === "descend"){
            const randomUsers = this.state.filteredUsers.sort()
        }
    }*/

    handleSearchChange = event => {
        const userSearch = event.target.value.toLowerCase();
        const allUsers= this.state.users;
        const filteredUsers = allUsers.filter(user =>
            user.name.first.toLowerCase().indexOf(userSearch) > -1);
        this.setState({
            filteredUsers: filteredUsers
        })
    }
    
    componentDiMount () {
        API.getUsers(`https://randomuser.me/api/?results=100&nat=us`).then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <SearchBox
                handleSearchState = {this.handleSearchChange}
            />,
            <DataBody 
                users = {this.state.filteredUsers}
            />    
        )
    }
}

export default DataArea;