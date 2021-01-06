let employees = [];
const urlAPI = "https://randomuser.me/api/?results=12&inc-name, picture, email, location, phone, dob &noinfo &nat=US";
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results())
    .then(displayEmployees)
    .catch(err => console.log(err))
    function displayEmployees(employeeData){
    employees = employeeData;
    let employeeHTML = "";
    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = emplayee.picture;
        employeeHTML += `
        <div class="card" data-index="${index}">
        <img class="avatar" src="${picture.large}" />
        <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</P>  
        </div>
        </div> 
        `
    });
    gridContainer.innerHTML = employeeHTML;
    };
function displayModel(index) {
    let {name, dob, phone, email, location: {city, street, state, postcode}, picture } = employees[index];
    let date = new Date(dob.date);
    const modelHTML =  `
    img class="avatar" src="${picture.large}" />
    <div class="text-container">
        <h2 class="name">${name.first} ${name.last}<h2>
        <p class="email">${email}</p>
        <p class="address">${city}</p>
        <hr />
        <p>${phone}</p>
        <p class="address">${street}, ${state} ${postcode}</p>
        <p>Birthday: ${day.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
        </div>
        `;
        overlay.classList.remove("hidden");
        modelContainer.innerHTML = modelHTML;
}
gridContainer.addEventListener('click', e =>{
    if (e.target !== gridContainer){
        const card = e.target.closest(".card");
        const index = card.getAttribute('data-index');
        displayModal(index);
    }
});
modalClose.addEventListener('click', () => {
    overlay.classlist.add("hidden");
})

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });  