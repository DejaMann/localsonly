import LoginForm from '../components/LoginForm'
import {InnerNav} from '../components/InnerNav'

const React = require('react')

class SignInPage extends React.Component {
    render () {
        return (
            <div>
                <InnerNav />
              <h1>Sign In</h1> 

              <form action='/user/signin' method='post'>
                <fieldset>
                    <legend>Sign In</legend>
                    <LoginForm />

                    <label htmlFor="username">Username</label> <br />
                    <input type='text' name='username' required/> <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type='password' name='password' required/>
                    <br />
                    <input type='submit' value='Log In'/>
                </fieldset>
              </form>
            </div>
        )
    }
}


export default SignInPage