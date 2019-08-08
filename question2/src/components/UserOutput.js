import React, { Component } from 'react'

const divStyling = {
    textAlign: 'center',
    marginBottom: '5px',
    border: '1px blue dashed',
    padding: '5px'
};

export class UserOutput extends Component {

    render() {
        return (
            <div style={divStyling}>
                <p>Username: {this.props.username}</p>
                <p>user output paragraph 1</p>
                <p>user output paragraph 2</p>
            </div>
        )
    }
}


export default UserOutput
