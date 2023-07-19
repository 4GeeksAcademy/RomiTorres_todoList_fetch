import React, { useState, useEffect } from "react";

export const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const host = 'https://jsonplaceholder.typicode.com/';

    const fetchUser = async () => {
        console.log(host)

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const data = await response.json();
            setUsers(data);
        } else {
            console.log('error:', response.status, response.statusText)
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);



    return (
        <>
            <h3>Get Users</h3>
            <div className="card">
                <div className="card-header">
                    List Users
                </div>
                <ul className="list-group list-group-flush">
                    {!users ? <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                        users.map((user, index) => {
                            return <li className="list-group-item list-group list-group-action" key={index}> {user.id} - <strong> Name:</strong> {user.name} -<strong> Username:</strong> {user.username} - <strong> Email: </strong>{user.email} - <strong>Ciudad:</strong> {user.address.city} </li>
                        })
                    }
                </ul>

            </div>

        </>
    )
}