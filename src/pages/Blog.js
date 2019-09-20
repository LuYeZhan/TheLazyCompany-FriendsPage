import React, { Component } from 'react'

export class Blog extends Component {
    render() {
        return (
            <div className="flex column center">
                <h1>Blog page</h1>
                <a className= "back-padding" href="/"> back </a>
                <p>Once upon a time, there was a coder who used wordpress, for blogging, and then.. he died</p>
            </div>
        )
    }
}

export default Blog

