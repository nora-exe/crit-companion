import {useState} from "react";

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //💡 Get from session storage by keyGet from session storage by key
    const item = window.sessionStorage.getItem(key);
    //💡 Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useSessionStorage;