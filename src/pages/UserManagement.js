import { Link } from "react-router-dom"
const UserManagement = () => {
    const users = [
        {
            username: 'Abiral',
            email: 'abiral@gmail.com',
            age: 20,
            city: 'Lalitpur',
        },
        {
            username: 'bijen',
            email: 'bijen@gmail.com',
            age: 25,
            city: 'Bhaisepati',
        },
        {
            username: 'reema',
            email: 'reema@gmail.com',
            age: 16,
            city: 'Bhaktapur',
        },

    ];
    // const pageTitle = 'Home page';
    return (<div>
        <h1>User Management</h1>
        <Link to="/pages/AddUsers">Add User</Link>
        <table>
            <tr>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
            </tr>

        </table>
    </div>

        // <div>
        //     <h1>This is UserManagement</h1>
        //     <table>
        //         <tr>
        //             <th>Username </th>
        //             <th> Email</th>
        //             <th> Age</th>
        //             <th>City </th>
        //         </tr>
        //         {
        //             users.map((row) => {
        //                 return (
        //                     <tr>
        //                         <td> {row.username}</td>
        //                         <td> {row.email}</td>
        //                         <td> {row.age}</td>
        //                         <td> {row.city}</td>
        //                     </tr>
        //                 )
        //             }
        //             )
        //         }
        //     </table>
        // </div>
    )
}
export default UserManagement;