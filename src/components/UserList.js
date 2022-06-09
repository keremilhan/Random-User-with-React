import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from './SingleUser/SingleUser';

const UserList = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async() => {
       const response =  await axios.get("https://randomuser.me/api/?results=5");
       setUsers(response.data.results)
       console.log(users);
    }

    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <div>
            <div className='user-list'>
                <ul>
                    {
                        users.map((user)=>(
                            <li>
                                <SingleUser user={user} key={user.id} />
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default UserList