import { useParams, Link ,useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

const FriendsItemPage = () => {
    const {id} = useParams();
    const [friends, setFriends] = useState(null);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`http://localhost:5000/friends/${id}`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [id]);

    return (
        <div>
            {friends && (
                <>
                    <button className = 'btn' onClick={goBack}>Go back</button>
                    <img src={friends.img} alt={friends.name}/>
                    <div className = 'friendss'>
                        <h1>{friends.name}</h1>
                        <h3>{friends.age}</h3>
                        <h3>{friends.country}</h3>
                    </div>

                </>
            )}
        </div>
    )
}

export {FriendsItemPage}