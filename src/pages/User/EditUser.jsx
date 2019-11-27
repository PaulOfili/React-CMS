import React, {useState, useEffect} from 'react';
import UserForm from "../../components/UserForm";

function EditUser({match, history}) {
    const [userDetails, setUserDetails] = useState({
        id: 0,
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });
    const currentId = match.params.id;

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`http://localhost:3011/users/${currentId}`);
        const item = await data.json();
        setUserDetails(item);
    };

    const handleInputChange = (e) => {
        const updatedUserDetails = { ...userDetails, [e.target.name]: e.target.value};
        setUserDetails(updatedUserDetails);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userDetailsStringified = JSON.stringify(userDetails);
        fetch(`http://localhost:3011/users/${userDetails.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userDetailsStringified,
        })
            .then(() => {
                history.push('/users');
            })

    };
    return (
        <div className="App">
            <h3>Add new user</h3>
            <UserForm
                submitText='Save Changes'
                userDetails={userDetails}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}/>
        </div>
    );
}

export default EditUser;
