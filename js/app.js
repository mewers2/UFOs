// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");


// Create the function to build the table
function buildTable(data) {

    // Clear existing data first
    tbody.html("");
    
    
    // Next loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        // Append a row to the HTML table body
        let row = tbody.append("tr");
        
        
        // Loop through each field in the dataRow and add
        // each value from the object into a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });   
}