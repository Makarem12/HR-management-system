
function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = "/home/makarem/HR-management-system/human-resource-management-hr-team-building-and-recruitment-concept-on-blurred-background-TDG9FJ.jpg";

    this.salary = this.calculateSalary();
}

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
    const netSalary = randomSalary - (randomSalary * 0.075); // 7.5% tax

    return netSalary;
};


Employee.prototype.render = function () {
    const employeeInfoContainer = document.getElementById("employeeInfo");

    const employeeDiv = document.createElement("div");
    employeeDiv.innerHTML = `
        <h2>${this.fullName}</h2>
        <p>Salary: $${this.salary.toFixed(2)}</p>
    `;

    employeeInfoContainer.appendChild(employeeDiv);
};


const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior"),
];


employees.forEach(employee => {
    employee.render();
});