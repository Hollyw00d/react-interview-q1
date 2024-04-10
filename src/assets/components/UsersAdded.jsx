export default function UsersAdded() {
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
            <tr className="bg-light">
              <td>Perry</td>
              <td>Paris</td>
            </tr>
            <tr className="bg-white">
              <td>Lucy</td>
              <td>London</td>
            </tr>
            <tr className="bg-light">
              <td>Sarah</td>
              <td>Seattle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
