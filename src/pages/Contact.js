import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div class="flex column center">
                <h1>Contact page</h1>
                <a className="back-padding" href="/"> back </a>
                <p> Say hi to us. If it's boring, you'll go directly to git.ignore . send a mail to hola@hooli.store</p>
            </div>
        )
    }
}

export default Contact
