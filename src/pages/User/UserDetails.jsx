import React, {useState, useEffect} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import axios from 'axios';

// import userData from '../../fakeBackend/userData';

function UserDetails({match, history}) {
    const [userData, setUserData] = useState({});
    const currentId = match.params.id;

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`http://localhost:3011/users/${currentId}`);
        console.log(data);
        const item = await data.json();
        setUserData(item);
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:3011/users/${currentId}`)
            .then(() => {
                history.push('/users');
            });
        // fetch(`http://localhost:3011/users/${currentId}`, {
        //     method: 'DELETE',
        //     headers: {'content-type': 'application/json'},
        // })
        //     .then(() => {
        //         history.push('/users');
        //     })
    };

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="close">
                    <span>
                        <Link to={`/users/${userData.id}/edit`}>Edit</Link>
                    </span>
                    &nbsp;
                    <span>
                        <button onClick={handleDelete}>Delete</button>
                    </span>
                    &nbsp;
                    <span>
                        <Link to='/users/'>Close</Link>
                    </span>
                </div>
                <br />
                <p><strong>Name: {userData.name}</strong></p>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
                <p>Address: {userData.address}</p>
                <p>City: {userData.city}</p>
                <p>Zip: {userData.zip}</p>
            </div>

        </div>
    );
}

export default UserDetails;
