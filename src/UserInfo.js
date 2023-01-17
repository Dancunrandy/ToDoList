import React, { Component } from 'react';

class UserInfo extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        hobbies: []
    }

    render() {
        return (
            <div>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>
                <p>Hobbies: {this.state.hobbies.join(', ')}</p>
            </div>
        )
    }
}

export default UserInfo;
