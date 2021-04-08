import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'

const Main = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div>
            <p>Main</p>
            <p>{user.id}</p>
            <h1>{user.email}</h1>
            <Link to="/profile">-&gt; Profile</Link>
            <LogoutButton />
        </div>
    )
}

export default Main
