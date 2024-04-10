import { useState, useEffect, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
import { isNameValid } from "../api/apis";

export default function NameField() {
  const [nameSearch, setNameSearch] = useState("");
  const [nameNotInUse, setnameNotInUse] = useState(true);
  const debouncedNameSearch = useDebounce(nameSearch, 300);

  const nameHandler = (e) => {
    const { value } = e.target;
    if (!value) setnameNotInUse(true);
    setNameSearch(value);
  };

  const nameNotInUseFunc = useMemo(
    () => async () => {
      if (!nameSearch) return;
      try {
        const isNameValidVar = await isNameValid(nameSearch);
        setnameNotInUse(isNameValidVar);
      } catch (error) {
        setnameNotInUse(true);
      }
    },
    [nameSearch]
  );

  useEffect(() => {
    if (nameSearch) nameNotInUseFunc();
  }, [debouncedNameSearch]);

  return (
    <>
      <div className="col-12 col-md-9">
        <input
          className="p-2 w-100"
          type="text"
          name="name"
          id="name"
          min="1"
          max="50"
          onChange={nameHandler}
        />
      </div>
      {!nameNotInUse && (
        <div className="col-md-9 offset-md-3 col-12">
          <p>This name has already been taken.</p>
        </div>
      )}
    </>
  );
}
