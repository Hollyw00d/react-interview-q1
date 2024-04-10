import UsersAdded from "./UsersAdded";

export default function AddShowUser() {
  return (
    <>
      <form>
        <div className="row mb-3">
          <div className="col-12 col-md-3 d-md-flex justify-content-end align-items-center">
            <h3 className="my-0 text-right">Name</h3>
          </div>
          <div className="col-12 col-md-9">
            <input
              className="p-2 w-100"
              type="text"
              name="name"
              id="name"
              min="1"
              max="50"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-3 d-md-flex justify-content-end align-items-center">
            <h3 className="my-0 text-right">Location</h3>
          </div>
          <div className="col-12 col-md-9">
            <select name="location" id="location" className="p-2 w-100">
              <option value="">Choose a Location</option>
              <option value="Brazil">Brazil</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="United States of America (USA)">
                United States of America (USA)
              </option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-md-end">
            <button type="button" className="me-4">
              Clear
            </button>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>

      <UsersAdded />
    </>
  );
}
