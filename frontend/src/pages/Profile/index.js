import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'

const Profile = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div>
            <p>Profile</p>
            <p>{user.id}</p>
            <h1>{user.email}</h1>
            <Link to="/main">-&gt; Main</Link>
            <LogoutButton />
        </div>
    )
}

export default Profile
