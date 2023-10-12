import { useState } from "react";

function useLocalRetrive(key) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : "";
    });

    const updateValue = (newValue) => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [storedValue, updateValue];
}

export default useLocalRetrive;
