import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const hadleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            console.log(response);

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                navigate('/login');
            } else {
                console.log("Registration failed: " + responseData.message);
            }
        } catch (error) {
            console.log("Registration failed: " + error.message);
        }
    }
    return (

        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/register.png" alt="user trying to do registration" width={400} height={400} />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br />

                            <form onSubmit={hadleSubmit}>
                                <div>
                                    <label htmlFor="username">UserName</label>
                                    <input type="text" name='username' placeholder='Enter Username' id='username' required autoComplete='off' value={user.username} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name='email' placeholder='Enter email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="text" name='password' placeholder='Enter password' id='password' required autoComplete='off' value={user.password} onChange={handleInput} />
                                </div>
                                <br />
                                <button type="submit" className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}
