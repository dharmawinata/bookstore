import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const ListAuthor = ({authors}) => {

    return (
        <div className="author mt-3">
            <div className="author-preview">
                <Link to='/'>kembali ke Homepage</Link>
                <h2 className='text-center'>List Author</h2>
                <Link to='/addAuthor'>
                    <div className="btn btn-sm btn-outline-success mb-3">
                        Add Author
                    </div>
                </Link>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(author => (
                            <tr key={author.id}>
                                <td>{author.id}</td>
                                <td>{author.name}</td>
                                <td>{author.gender}</td>
                                <td>{author.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ListAuthor

