import React, { useState, useEffect } from "react";

const LocalStorageViewer = () => {
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    // Get all keys from localStorage
    const keys = Object.keys(localStorage);

    // Map over keys and get their corresponding values
    const data = keys.map((key) => ({
      key,
      value: localStorage.getItem(key),
    }));

    // Update state with the data
    setLocalStorageData(data);
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <h2>Local Storage Data:</h2>
      <ul>
        {localStorageData &&
          localStorageData.map((item) => (
            <li key={item.key}>
              <strong>{item.key}:</strong> {item.value}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocalStorageViewer;
