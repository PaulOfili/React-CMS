import React from 'react';
import {Link} from "react-router-dom";

function UserForm({submitText, userDetails, handleInputChange, handleFormSubmit}) {
    // const onHandleInputChange = (e) => {
    //   console.log('Userform', e);
    //   handleInputChange('yeah');
    // };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                Name: <br/>
                <input
                    type='text'
                    name='name'
                    value={userDetails.name}
                    onChange={handleInputChange}/> <br/>

                Email: <br/>
                <input
                    type='email'
                    name='email'
                    value={userDetails.email}
                    onChange={handleInputChange}/> <br/>

                Phone: <br/>
                <input
                    type='text'
                    name='phone'
                    value={userDetails.phone}
                    onChange={handleInputChange}/> <br/>

                Address: <br/>
                <input
                    type='text'
                    name='address'
                    value={userDetails.address}
                    onChange={handleInputChange}/> <br/>

                City: <br/>
                <input
                    type='text'
                    name='city'
                    value={userDetails.city}
                    onChange={handleInputChange}/> <br/>

                Zip Code: <br/>
                <input
                    type='text'
                    name='zip'
                    value={userDetails.zip}
                    onChange={handleInputChange}/> <br/>
                <br />
                <br />
                <br />
                <button type='submit'>{submitText}</button>
                <button><Link to='/users'>Cancel</Link></button>
            </form>


        </div>
    );
}

export default UserForm;
