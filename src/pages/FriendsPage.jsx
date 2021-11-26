import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const FriendsPage = () => {
    const [friends, setFriends] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/friends')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <div>
            <h1>Friends page</h1>
            {
                friends.map(friend => (
                    <Link key={friend.id} to={`/friends/${friend.id}`}>
                        <li>{friend.name}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {FriendsPage}