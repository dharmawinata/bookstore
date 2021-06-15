import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home text-center">
            <div className="title">
                <h1>HOME PAGE</h1>
            </div>
            <div className="links">
                <Link to="/authors">Author</Link>
                <Link to="/books">Books</Link>
            </div>
        </div>
    )
}

export default Home
