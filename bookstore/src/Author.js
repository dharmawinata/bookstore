import React, { useState,useEffect } from 'react'
import ListAuthor from './ListAuthor'

const Author = () => {
   
    const [authors, setAuthors] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:3000/authorss')
        .then(res => {
            return res.json()
        })
        .then(data => {
           setAuthors(data)
        })
    },[])

    return (
        <div className="list-authors">
            <h2>List Author</h2>
            {authors && <ListAuthor authors={authors}/>}
        </div>
    )
}

export default Author


