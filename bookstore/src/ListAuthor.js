
import { Table } from 'react-bootstrap'

const ListAuthor = ({authors}) => {

    return (
        <div className="author mt-3">
            <div className="author-preview">
                
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

