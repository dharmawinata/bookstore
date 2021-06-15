import React, { useState } from 'react'

const AddAuthor = () => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState(0)

    fetch('http://localhost:3000/authors', {
        method: 'POST',
    })
        



    return (
        <div className="container">
            <div className="add-author">
            <div className="row">
                <div className="col-6 mx-auto">
                <h2>Add Author</h2>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Gender</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Age</label>
                            <input 
                            type="number" 
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            >
                            </input>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <p>{name}</p>
                        <p>{gender}</p>
                        <p>{age}</p>
                    </form>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default AddAuthor
