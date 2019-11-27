import React from 'react';
import NavBar from "../../components/NavBar";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import UserList from "./UserList";
import AddUser from "./AddUser";
import UserDashboard from "./UserDashboard";
import EditUser from "./EditUser";

function User() {
    const navLinks = [
        {
            text: 'Users',
            value: 'users'
        },
        {
            text: 'Add a User',
            value: 'users/add'
        }
    ];

    return (
        <div>
            <NavBar navLinks={navLinks} />
            <Switch>
                <Route path='/' exact component={UserDashboard}/>
                <Route path='/users/add' exact component={AddUser}/>
                <Route path='/users/:id/edit' exact component={EditUser}/>
                <Route path='/users' component={UserList}/>

            </Switch>
        </div>
    );
}

export default User;
