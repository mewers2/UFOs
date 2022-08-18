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

// Create function to handle button clicks
// (using the D3.js library - data-driven documents)
function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");

    let filteredData = tableData;

    // Check to see if a date was entered and filter
    // the data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    // Call the buildTable function using the filteredData
    buildTable(filteredData);
};

// "listen" for the button click, command the handleClick function
// to run when the filter button is pressed
d3.selectAll("#filter-btn").on("Click", handleClick);

// Build the table with all original data when the page loads
buildTable(tableData);