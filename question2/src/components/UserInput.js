import React, { Component } from 'react'

export class UserInput extends Component {
    changeName = (e) => {
        this.props.changeName(e.target.value);
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginBottom: '5px', border: '1px green solid', padding: '5px' }}>
                <input type="text" onKeyUp={this.changeName} placeholder="Enter your new username" />
            </div>
        )
    }
}

export default UserInput
