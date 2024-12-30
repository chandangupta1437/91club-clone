document.getElementById("first_i").addEventListener("click", function () {
    window.location.href = "../main.html";

});
// Function to populate the table
function populateTable(data) {
    const tableBody = document.querySelector("#dataTable tbody");

    // Iterate through the list in the JSON data
    data.data.list.forEach(item => {
      const row = document.createElement("tr");

      // Create and append cells for each property
      const issueNumberCell = document.createElement("td");
      issueNumberCell.textContent = item.issueNumber;
      row.appendChild(issueNumberCell);

      const numberCell = document.createElement("td");
      numberCell.textContent = item.number;
      row.appendChild(numberCell);

      const colourCell = document.createElement("td");
      colourCell.textContent = item.colour;

      // Apply CSS class based on the colour value
      if (item.colour === "red") {
        colourCell.className = "red";
      } else if (item.colour === "green") {
        colourCell.className = "green";
      } else if (item.colour === "red,violet") {
        colourCell.className = "red-violet";
      } else if (item.colour === "green,violet") {
        colourCell.className = "green-violet";
      }
      row.appendChild(colourCell);

      // const premiumCell = document.createElement("td");
      // premiumCell.textContent = item.premium;
      // row.appendChild(premiumCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }

  // Fetch JSON data from an external file
  fetch('../data/min3.json')
    .then(response => response.json())
    .then(data => {
      populateTable(data);
    })
    .catch(error => {
      console.error("Error fetching the JSON data:", error);
    });