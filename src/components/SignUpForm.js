import { Component } from "react";
import {signUp} from '../utilities/user-service';


export default class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        confirm: '',
        error: '',
    };
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, error: '',
    })
  };

    // arrow functions create their own 'this' keyword
    handleSubmit = async (event) => {
        event.preventDefault()
        // ^ prevents from from refreshing and losing state
        // ^ takes in JS objects and converts it to a string

        try {
            // create formData to send to back end
            const {username, email, password} = this.state
            const formData = {username, email, password}
            // pass formData to SignUp function
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch (error) {
            // if we have an error
            this.setState({error: 'Sign up failed -- Try Again'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" username="username" value={this.state.username} onChange={this.handleChange} required 
                />

                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required 
                />

                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required 
                />

                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
    }

