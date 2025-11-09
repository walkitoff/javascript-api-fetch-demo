const table = document.getElementById("user-data");
const trHeaders = document.getElementById("table-headers");
const tbody = document.getElementById("table-body");

const searchInput = document.getElementById("search");
const searchBtn   = document.getElementById("search-btn");

const trMap = []; // { trElem: <tr>, text: 'row text for search' }


// call fetch() to get api data 
fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if(!res.ok){
                throw new Error(`Http error! status: ${res.status}`)
            }
            return res.json(); //Parse the response
        })
        .then(data=>{ 
            if (!Array.isArray(data) || data.length === 0) return; // nothing to render
            console.log('Fetch data: ', data)
            
            createTableHeaders(data);
            createTableRows(data);
            buildTrMap(); // store row data for search feature
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


//create table header elements
function createTableHeaders(data){
    Object.keys(data[0]).forEach(key =>{
        let th = document.createElement("th");
        th.textContent = key;    
        trHeaders.appendChild(th);
    });
}

/** create <tr> element for ea Object in data
*   also*handles nested objects and puts them in a nested <UL>
*/
function createTableRows(data){
    //user refers to each row/obj in data array
    for(const row of data){
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for(const key of Object.keys(row)){
            let td = document.createElement("td");

            if(typeof(row[key]) === 'object' && !Array.isArray(row[key])){ //again making sure object isnt empty
                const innerRow = row[key];
                let ul = document.createElement('ul');
                
                for(const item of Object.keys(innerRow)){
                    if(typeof(innerRow[item])=== 'object'){continue;}; //skip any objects at this level

                    let li = document.createElement("li");
                    li.innerHTML = `<span class="left-span">${item}:</span> <span class="right-span">${innerRow[item]}</span>`;
                   
                    ul.appendChild(li);
                }
                td.appendChild(ul);
                tr.appendChild(td);
            }else{
                td.textContent = row[key];
                tr.appendChild(td);
            }
        }
    }
}

/**
 * Populates trMap[] with json obj  {trElem: <tr></tr>, searchable text}
 */
function buildTrMap(){
    const trList = document.querySelectorAll('#user-data tr:not(#table-headers)');
    for (const row of trList) {
        const text = row.textContent.toLowerCase().trim();
        trMap.push({ trElem: row, text });
    }
} 

/**
 * search filter function
 */ 
function filterTable(query) {
  query = query.toLowerCase().trim();

  for (const { trElem, text } of trMap) {
    const match = text.includes(query);
    trElem.hidden = !match;   //toggle row's visibility
  }
}

/**
 * Event Listeners
 */

// run filter when user types
searchInput.addEventListener("input", () => {
  filterTable(searchInput.value);
});

