import React from 'react'
import { logout } from '../../services/session'

const LogoutButton = () => {
    const handleLogout = async () => {
        const token = localStorage.getItem('token')
        await logout(token)
        localStorage.removeItem('token')
        window.location.href = '/'        
    }

    return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton
