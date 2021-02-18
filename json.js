// fetch("./data.json")
//     .then(function (responsive){
//         return responsive.json();
//     })
//     .then(function (data){
//        document.querySelector('#name').innerText = dats.name.ful;
//     })

//     .then(function (responsive){
//         return responsive.json();
//     })
//     .then(function (data){
//        document.querySelector('#age').innerText = dats.age.years;
//     })

//     .then(function (responsive){
//         return responsive.json();
//     })
//     .then(function (data){
//        document.querySelector('#hobbies').innerText = dats.hobbies.ful;
//     })


fetch("./data.json")
.then(function (response){
    return response.json();

})

.then(function (data) {
    document.querySelector('#name').innerText = data.name.full;
    document.querySelector('#age').innerText = data.age;
})
    