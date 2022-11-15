import {useState} from 'react'
import * as userService from "../utilities/user-service"

export default function LoginForm ({setUser}) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')

    function handleChange(event) {
        setCredentials ({ ...credentials, [event.target.name]: event.target.value })
        setError('');
    }
    async function handleSubmit(event) {
        // Prevents from from being submitted to the server
        event.preventDefault();
        try {
            // The promise returned by the signUp service method
            // will resolve to the user object included in
            // the payload of the JSON Web Token (JWT)
            const user = await userService.login(credentials);
            setUser(user)
        } catch {
            setError('Login Failed - Try Again')
        }
    }

    return (
        <div>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autoComplete='off'>
                    <label>Username</label>
                    <input type="text" name="username" value={credentials.email} onChange={handleChange} required />

                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className='error-message'>{" "}{error}</p>
        </div>
    );
}
