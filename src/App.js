import React from 'react';
import SiteMap from './site-layout.svg'; // Replace with your SVG filename if different

const materials = [
  { id: "L001", name: "Beam Storage 1", x: 37.71, y: 356.53, status: "on site" },
  { id: "L002", name: "Column Storage", x: 123.56, y: 264.43, status: "installed" },
  { id: "L003", name: "Beam Storage 2", x: 123.56, y: 519.55, status: "installed" },
  { id: "L004", name: "T-Beam Storage 1", x: 337.04, y: 599.57, status: "installed" },
  { id: "L005", name: "Façade & Staircase", x: 212.93, y: 689.33, status: "installed" },
  { id: "L006", name: "T-Beam Storage 2", x: 430.68, y: 366.99, status: "installed" },
  { id: "L007", name: "Lifting Zone 1", x: 149.37, y: 366.99, status: "installed" },
  { id: "L008", name: "Lifting Zone 2", x: 364.12, y: 544.99, status: "installed" },
  { id: "L009", name: "Zone 1", x: 123.56, y: 264.43, status: "installed" },
  { id: "L010", name: "Zone 2", x: 123.56, y: 264.43, status: "installed" },
  { id: "L011", name: "Zone 3", x: 123.56, y: 264.43, status: "installed" },
  { id: "L012", name: "Zone 4", x: 123.56, y: 264.43, status: "installed" },
  { id: "L013", name: "Zone 5", x: 123.56, y: 264.43, status: "installed" },
  { id: "L014", name: "Zone 6", x: 123.56, y: 264.43, status: "installed" },
  { id: "L015", name: "Zone 7", x: 123.56, y: 264.43, status: "installed" },
  { id: "L016", name: "Zone 8", x: 123.56, y: 264.43, status: "installed" },
  { id: "L017", name: "Zone 9", x: 123.56, y: 264.43, status: "installed" }
  // add more materials as needed
];

function App() {
  return (
    <div>
      <h1>Site Logistics Platform Demo</h1>
      <svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        style={{ border: "1px solid #333" }}
      >
        {/* Inline SVG content: If you use SiteMap as an <img />, place markers separately */}
        {/* If you have your SVG markup, paste it here instead */}
        <image
          href={SiteMap}
          x="0"
          y="0"
          width="800"
          height="800"
        />

        {/* Material markers */}
        {materials.map(mat => (
          <circle
            key={mat.id}
            cx={mat.x}
            cy={mat.y}
            r={12}
            fill={mat.status === "installed" ? "green" : "orange"}
            stroke="black"
            onClick={() => alert(`Material: ${mat.name}\nStatus: ${mat.status}`)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </svg>

      {/* Data table */}
      <table style={{ marginTop: 24, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {materials.map(mat => (
            <tr key={mat.id}>
              <td>{mat.id}</td>
              <td>{mat.name}</td>
              <td>{mat.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

