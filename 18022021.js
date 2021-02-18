
// // fetch("./data.json")
// //     .then(function (response) {
// //         return response.json();

// //     })

// //     .then(function (data) {
// //         document.querySelector('#name').innerText = data.name.full;
// //     })




// // let list = ["Elon", "JEff", "Bill"];
// // let ul = document.createElement('ul');

// // for (const key in list) {
// //     let li = returnListItem(list[key]);
// //     ul.append(li);
// // }

// // function returnListItem(text) {
// //     let li = document.createElement('list');

// //     li.append(list);

// //     return li;
// // }

// // document.body.append(ul);




// let ul = document.createElement('ul');
// document.body.append(ul);

// fetch("./data.json")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         for (const key in data) {
//             let li = document.createElement('li');
//             li.innerText = data[key].name;
//             ul.append(li);
//         }
//     });


// let ul = document.createElement('ul');
// document.body.append(ul);
// fetch("./data.json")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         for (const key in data) {
//             let li = document.createElement('li');
//             li.innerText = data[key].name + "-" + "$" + data[key].wealth;
//             ul.append(li);
//         }
//     })

// let th = ["Name", "Age", "Wealth"];
// document.body.append(th);
// fetch("./data.json")
//     .then(function (reponsive) {
//          return response.json();
//     })
//     .then(function (data) {
//         for (const key in data) {
//             let th = document.createElement('th');
//             th.style.fontWeight = "bold";
//             th.innerText = data[key].name
//             ul.append(th)
//         }
//     })




let table = document.createElement('table');
document.body.append(table);

let tr = document.createElement('tr');
let tdID = document.createElement('th');
let tdName = document.createElement('th');
let tdAge = document.createElement('th');
let tdWealth = document.createElement('th');

tdID.innerText = "ID";
tdName.innerText = "Name";
tdWealth.innerText = "Wealth";
tdAge.innerText = "Age";
tr.append(tdID);
tr.append(tdName);
tr.append(tdAge);
tr.append(tdWealth);

table.append(tr);

fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (const key in data) {
            let tdID = document.createElement('td');
            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdAge = document.createElement('td');
            let tdWealth = document.createElement('td');
            
            tdID.innerText = [key];
            tdName.innerText = data[key].name;
            tdWealth.innerText = "$" + data[key].wealth;
            tdAge.innerText = data[key].age; 

            tr.append(tdID);
            tr.append(tdName);
            tr.append(tdAge);
            tr.append(tdWealth);
           
            table.append(tr);
        }
    });