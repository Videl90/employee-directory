import React, { Component } from 'react';
import API from "../utils/API";
import "./style.css";
import UsersRow from './UsersRow.js'
import SearchBox from './SearchBox';
import TableTitles from '.TableTitles';


class UsersTable extends Component {
    state = {
        user:[{}],
        order:"descend",
        filteredUsers:[{}],
        loading:true,
        search:"",
        sorted:false
    };

    handleInputChange = event => {
        let {user, search} = this.state;
        let searchUser = user.filter(sorted => {
            return (
                sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
                sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
                sorted.phone.toLowerCase().includes(search.toLowerCase()) ||
                sorted.email.toLowerCase().includes(search.toLowerCase()) ||
                sorted.dob.toLowerCase().includes(search.toLowerCase())
            )
        })

        this.setState({ sorted: true })
        this.setState({ search: event.target.value });
        this.setState({ filteredUsers: searchUser});
    };

    handleSort = () => {
        if (this.state.order === "descend") {
            this.setState({ order: "ascend"})
        } else {
            this.setState({ order: "descend"})
        }

        let { user, order} = this.state;

        function compare( a, b) {
            if( order = "ascend") {
                if ( a.name.first < b.name.first)
                    { return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        } else {
            if (a.name.first > b.name.first)
        { return -1;
    }
    if( a.name.last < b.name.last)
        {
            return 1
        }
            return 0;
        }
    }
    const filtered = user.sort (compare);
}

    searchUser= () => {
        if(this.state.sorted) {
            return(
                <>
                       {this.state.user.map(user => (
                        <UsersRow
                            image= {user.img}
                            name={user.name.first + " " + user.name.last}
                            phone={user.phone}
                            email={user.email}
                            dob={user.dob}
                        />
                    ))}
                </>
            )
        }

        else if (this.state.loading === false) {
            return(
                <>
                       {this.state.user.map(user => (
                        <UsersRow
                            image= {user.img}
                            name={user.name.first + " " + user.name.last}
                            phone={user.phone}
                            email={user.email}
                            dob={user.dob}
                        />
                    ))}
                </>
            )
        }
    
    }
   componentDidMount() {
        API.getRandomUser()
        .then (res => {
            this.setState({ user: res.info.results, loading: false })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <SearchBox handleInput = {this.handleInputChange} />
                <TableTitles click={this.handleSort}/>
                {this.searchUser()}
                <UsersRow></UsersRow>          
            </>
        )
    }
}

export default UsersTable;