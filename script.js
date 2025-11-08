const tableData = document.getElementById("user-data");

let trHeaders = document.getElementById("table-headers");

//TODO: get api data from https://jsonplaceholder.typicode.com/users
let users = fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    if(!res.ok){
                        throw new Error(`Http error! status: ${res.status}`)
                    }
                    return res.json(); //Parse the response
                })
                .then(data=>{ 
                    console.log('Fetch data: ', data)
                    console.log("header row length: ", Object.keys(data[0]).length);
                    console.log(data.length);
                    createTableHeaders(data);
                    createTableRows(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

//create table headers
function createTableHeaders(data){
    Object.keys(data[0]).forEach(key =>{
        let th = document.createElement("th");
        th.innerText = key;    
        trHeaders.appendChild(th);
    });
}

//create <tr> elements with <td> for each object
// *also handles nested objects and puts them in a nested <UL>
function createTableRows(data){
    //user refers to each row/obj in data array
    for(const row of data){
        let tr = document.createElement("tr");
        tableData.appendChild(tr);

        for(const key of Object.keys(row)){
            let td = document.createElement("td");

            if(typeof(row[key]) === 'object'){
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
                td.innerText = row[key];
                tr.appendChild(td);
            }
        }
    }
}


