// array contains all employee data
const Alldata = []
// bult blueprint constructor
function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = "/home/makarem/HR-management-system/human-resource-management-hr-team-building-and-recruitment-concept-on-blurred-background-TDG9FJ.jpg";

    this.salary = this.calculateSalary();
    Alldata.push(this)
}
//calculate the MIN && MaX of the salary adapting to the level
Employee.prototype.calculateSalary = function () {
    const levelTable = {
        Senior: { min: 1500, max: 2000 },
        "Mid-Senior": { min: 1000, max: 1500 },
        Junior: { min: 500, max: 1000 },
    };

    const level = this.level;
    const minSalary = levelTable[level].min;
    const maxSalary = levelTable[level].max;

    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const netSalary = randomSalary - (randomSalary * 0.075);

    return netSalary;
};

//appending fullname & the salary inside div
Employee.prototype.render = function () {
    const employeeInfoContainer = document.getElementById("employeeInfo");

    const employeeDiv = document.createElement("div");
    employeeDiv.innerHTML = `
        <h2>${this.fullName}</h2>
        <p>Salary: $${this.salary.toFixed(2)}</p>
    `;

    employeeInfoContainer.appendChild(employeeDiv);
    // localStorage.this.fullName
    // localStorage.this.salary.toFixed(2)
};

//Nested objects contain static employee Info
const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior"),
];

//function to iterate each employee (it is like a loop)
employees.forEach(employee => {
    employee.render();
});
//function generate IDs
const container = document.getElementById('employeeCardsContainer');
function generateEmployeeID() {
    return Math.floor(1000 + Math.random() * 9000);
}


function addEmployee() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('department').value;
    const image = document.getElementById('image').value;

    const employeeID = generateEmployeeID();



    const employee = {
        id: employeeID,
        name: name,
        position: position,
        image: image
    };


    renderEmployeeCard(employee);
    saveData(Alldata)

    document.getElementById('employeeForm').reset();
}


function renderEmployeeCard(employee) {
    const container = document.getElementById('employeeCardsContainer');


    const card = document.createElement('div');
    card.classList.add('employee-card');


    card.innerHTML = `
        <img src="${employee.image}" alt="${employee.name}">
        <h3>${employee.name}</h3>
        <p>${employee.position}</p>
        <p>ID: ${employee.id}</p>
    `;


    container.appendChild(card);
}
function saveData(data) {
    let stringArr = JSON.stringify(data);
    localStorage.setItem("Employee", stringArr)

}
//data can not save at the localstorage
