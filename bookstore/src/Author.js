import React, { useState,useEffect } from 'react'
import ListAuthor from './ListAuthor'

const Author = () => {
   
    const [authors, setAuthors] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/authors')
        .then(res => {
            return res.json()
        })
        .then(data => {
           setAuthors(data)
        })
    },[])

    return (
        <div className="list-authors">
            {authors && <ListAuthor authors={authors}/>}
        </div>
    )
}

export default Author


