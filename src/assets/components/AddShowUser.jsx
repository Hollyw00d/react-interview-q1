import { useState, useEffect, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
import { isNameValid, getLocations } from "../api/apis";
import UsersAdded from "./UsersAdded";

export default function AddShowUser() {
  const [name, setName] = useState("");
  const [nameNotInUse, setnameNotInUse] = useState(true);
  const debouncedname = useDebounce(name, 300);
  const [locations, setLocations] = useState(null);
  const [users, setUser] = useState([]);
  let nextId = 0;

  const handleNameChange = (e) => {
    const { value } = e.target;
    if (!value) setnameNotInUse(true);
    setName(value);
  };

  const handleClearBtn = (e) => {
    e.preventDefault();
    setName("");
    setnameNotInUse(true);
  };

  const handleAddNameSubmit = (e) => {
    e.preventDefault();

    const isNameFound = users.find((getName) => getName.name === name);

    if (nameNotInUse && !isNameFound) {
      const location = e.target.elements.location.value;
      setUser([...users, { id: nextId++, name, location }]);
    } else {
      setnameNotInUse(false);
    }
  };

  const nameNotInUseFunc = useMemo(
    () => async () => {
      if (!name) return;
      try {
        const isNameValidVar = await isNameValid(name);
        setnameNotInUse(isNameValidVar);
      } catch (error) {
        setnameNotInUse(true);
      }
    },
    [name]
  );

  useEffect(() => {
    if (name) nameNotInUseFunc();

    getLocations()
      .then((result) => {
        setLocations(result);
      })
      .catch(
        (
          error // eslint-disable-line no-unused-vars
        ) => {
          setLocations(
            "Something went wrong and locations are not loading correctly."
          );
        }
      );
  }, [debouncedname]);

  return (
    <>
      <form onSubmit={handleAddNameSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-3 d-md-flex justify-content-end align-items-center">
            <h3 className="my-0 text-right">Name</h3>
          </div>

          <div className="col-12 col-md-9">
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              className="p-2 w-100"
              name="name"
              id="name"
              min="1"
              max="50"
            />
          </div>
          {!nameNotInUse && (
            <div className="col-md-9 offset-md-3 col-12">
              <p className="text-danger" role="alert" aria-live="polite">
                <strong>This name has already been taken.</strong>
              </p>
            </div>
          )}
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-3 d-md-flex justify-content-end align-items-center">
            <h3 className="my-0 text-right">Location</h3>
          </div>
          {locations && (
            <div className="col-12 col-md-9">
              {locations?.length > 0 ? (
                <select name="location" id="location" className="p-2 w-100">
                  {locations?.length > 0 &&
                    locations.map((location) => (
                      <option value={location} key={location}>
                        {location}
                      </option>
                    ))}
                </select>
              ) : (
                { locations }
              )}
            </div>
          )}
        </div>

        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-md-end">
            <button type="button" className="me-4" onClick={handleClearBtn}>
              Clear
            </button>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>

      <UsersAdded users={users} />
    </>
  );
}
