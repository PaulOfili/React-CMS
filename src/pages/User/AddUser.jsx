import React, {useState, useEffect} from 'react';
import UserForm from "../../components/UserForm";

function AddUser({history}) {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });

    const handleInputChange = (e) => {
        const updatedUserDetails = { ...userDetails, [e.target.name]: e.target.value};
        setUserDetails(updatedUserDetails);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const userDetailsStringified = JSON.stringify(userDetails);
      console.log(userDetailsStringified);
      fetch('http://localhost:3011/users', {
          method: 'POST',
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
                submitText='Create new User'
                userDetails={userDetails}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}/>
        </div>
    );
}

export default AddUser;
