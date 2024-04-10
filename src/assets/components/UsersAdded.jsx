export default function UsersAdded({ users }) {
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-collapse table-border-style-1">
          <thead className="bg-secondary text-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
