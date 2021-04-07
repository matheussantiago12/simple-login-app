import React, { useState } from 'react'
import { auth } from '../../services/session'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async e => {
        e.preventDefault()

        try {
            const { data } = await auth(email, password)
            localStorage.setItem('token', data.token)
            window.location.href = '/main' 
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
