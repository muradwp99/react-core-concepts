import { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
    const[users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },[])


    return (
        <div>
            <h1>Users: {users.length}</h1>
            {
                users.map(user => <Friend key={users.id} user={user}></Friend>)
            }
        </div>
    );
};

export default Friends;