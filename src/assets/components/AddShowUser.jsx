import UsersAdded from "./UsersAdded";
import NameField from "./NameField";
import LocationsField from "./LocationsField";

export default function AddShowUser() {
  return (
    <>
      <form>
        <div className="row mb-3">
          <div className="col-12 col-md-3 d-md-flex justify-content-end align-items-center">
            <h3 className="my-0 text-right">Name</h3>
          </div>
          <NameField />
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-3 d-md-flex justify-content-end align-items-center">
            <h3 className="my-0 text-right">Location</h3>
          </div>

          <LocationsField />
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
