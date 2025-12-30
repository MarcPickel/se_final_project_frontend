import { useState } from "react";

function useSearch(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (evt) => {
    const { value, search } = evt.target;
    setValue({ [search]: value });
  };

  return { value, handleChange, setValue };
}

export default useSearch;
