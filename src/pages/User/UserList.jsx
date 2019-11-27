import React, {useEffect, useState} from 'react';
import userData from '../../fakeBackend/userData';
import {Link, Route, Switch} from "react-router-dom";
import UserDetails from "./UserDetails";

function UserList() {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        fetchItems();
    }, [usersData]);

    const fetchItems = async () => {
      const data = await fetch('http://localhost:3011/users');
      const items = await data.json();
      setUsersData(items);
    };
    return (
        <div>
            <h3>UserList</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map(user => (
                           <tr key={user.id}>
                               <td>
                                   <Link to={`/users/${user.id}`} >
                                       {user.name}
                                    </Link>
                               </td>
                               <td>{user.email}</td>
                               <td>{user.phone}</td>
                               <td>{user.address}</td>
                               <td>{user.city}</td>
                               <td>{user.zip}</td>
                           </tr>
                        ))
                    }
                </tbody>
            </table>
            <br />
            <br />
            <button>
                <Link to={`/users/add`}>
                    Add new user
                </Link>
            </button>

            <Route path='/users/:id' component={UserDetails}/>

        </div>
    );
}

export default UserList;
