import React from "react";

function EasyDataDisplay(data) {
  function renderValue(value) {
    if (typeof value === "object" && value !== null) {
      return (
        <table>
          <tbody>
            {Object.entries(value).map(([key, val], index) => (
              <tr key={index}>
                <th>{key}</th>
                <td>{renderValue(val)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return value;
  }
  

  return (
    <>
    <h2>
        {data?.name
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}
      </h2>
      <div style={{maxWidth:"80%", overflow:'auto'}}>
      {Array.isArray(data.data) && (
        <table>
          <thead>
            <tr>
              {Object.keys(data.data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{renderValue(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
      </>
  );
}

export default EasyDataDisplay;
