import React, { Component } from 'react'

const initialState = {
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    usernameError: '',
    emailError: '',
    mobileNumberError: '',
    passwordError: '',
    confirmPasswordError: ''
}


class Registration extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            mobileNumber: '',
            password: '',
            confirmPassword: '',
            usernameError: '',
            emailError: '',
            mobileNumberError: '',
            passwordError: '',
            confirmPasswordError: ''
        }
    }

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked: event.target.value
        })
    }

    validate = () => {
        let usernameError = "";
        let emailError = "";
        let mobileNumberError = "";
        let passwordError = "";
        let confirmPasswordError = "";
        let isError = false;
        if(!this.state.username) {
            usernameError = "Enter username";
            isError = true;
        }

        if(!this.state.mobileNumber) {
            mobileNumberError = "Enter mobile number";
            isError = true;
        }

        if(!this.state.email) {
            emailError = "Enter email";
            isError = true;
        } else if(this.state.email && !this.state.email.includes('@')) {
            emailError = "Enter valid email";
            isError = true;
        } 
        

        if(!this.state.password) {
            passwordError = "Enter Password";
            isError = true;
        }

        if(!this.state.confirmPassword) {
            confirmPasswordError = "Enter confirm Password";
            isError = true;
        }

        if(this.state.password && this.state.confirmPassword && this.state.password !== this.state.confirmPassword) {
            confirmPasswordError = "Password not matching";
            isError = true;
        }

        this.setState({
            emailError,
            usernameError,
            mobileNumberError,
            passwordError,
            confirmPasswordError
        });
        console.log(this.state);
        if(isError) {
            return false;
        }
        return true;
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            // Clear form
            this.setState(initialState)
        }
    }

    render() {
        const { username, lastName, email, mobileNumber } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Registration</h1>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text"
                        name="username"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.username} />
                    {this.state.usernameError ?  
                        <div style={{color: "red"}}>
                            {this.state.usernameError}
                        </div> : null}
                   
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.email} />  
                    {this.state.emailError ?  
                        <div style={{color: "red"}}>
                            {this.state.emailError}
                        </div> : null}
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text"
                        name="mobileNumber"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.mobileNumber} />
                    {this.state.mobileNumberError ?  
                        <div style={{color: "red"}}>
                            {this.state.mobileNumberError}
                        </div> : null}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.password}/>
                    {this.state.passwordError ?  
                        <div style={{color: "red"}}>
                            {this.state.passwordError}
                        </div> : null}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password"
                        name="confirmPassword"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}/>
                    {this.state.confirmPasswordError ?  
                        <div style={{color: "red"}}>
                            {this.state.confirmPasswordError}
                        </div> : null}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Registration
