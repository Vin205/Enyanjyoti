import React, { useState } from 'react';

function Register() {
    const [details, setDetails] = useState({
        fName: '',
        email: '',
        password: ''
    });

    const PostData = async (e) => {
        e.preventDefault();

        const { fName, email, password } = details;

        // Check if any of the fields are empty
        if (!fName || !email || !password) {
            alert("Please fill in all fields");
            return;
        }

        const res = await fetch("https://vini-d981a-default-rtdb.firebaseio.com/vinform.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fName,
                email,
                password,
            })
        });

        // You can add further handling of the response here if needed
    }

    return (
        <div className='form'>
            <input
                type='text'
                placeholder='Enter your first name'
                onChange={(e) => setDetails({ ...details, fName: e.target.value })}
            />
            <input
                type='email'
                placeholder='Enter your Email address'
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
            <input
                type='password'
                placeholder='Enter your password'
                onChange={(e) => setDetails({ ...details, password: e.target.value })}
            />
            <button onClick={PostData}>Submit</button>
        </div>
    );
}

export default Register;
