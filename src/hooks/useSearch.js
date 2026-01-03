import { useState } from "react";

function useSearch(defaultValue) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return { inputValue, setInputValue, handleChange };
}

export default useSearch;
