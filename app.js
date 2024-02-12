
function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = ""; 

    
    this.calculateSalary = function() {
        const levelTable = {
            Senior: { min: 1500, max: 2000 },
            "Mid-Senior": { min: 1000, max: 1500 },
            Junior: { min: 500, max: 1000 },
        };

        const minSalary = levelTable[this.level].min;
        const maxSalary = levelTable[this.level].max;

        const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        const netSalary = randomSalary - (randomSalary * 0.075); // 7.5% tax

        return netSalary;
    };

   
    this.render = function() {
        const employeeInfoContainer = document.getElementById("employeeInfo");

        const employeeDiv = document.createElement("div");
        employeeDiv.innerHTML = `
            <h2>${this.fullName}</h2>
            <p>Salary: $${this.calculateSalary().toFixed(2)}</p>
        `;

        employeeInfoContainer.appendChild(employeeDiv);
    };
}


Employee.prototype.renderCard = function () {
    const employeeCardsContainer = document.getElementById("employeeCards");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `
        <h2>${this.fullName}</h2>
        <p>ID: ${this.id}</p>
        <p>Department: ${this.department}</p>
        <p>Level: ${this.level}</p>
        <img src="${this.imageURL}" alt="${this.fullName}">
    `;

    employeeCardsContainer.appendChild(cardDiv);
};


document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const imageURL = document.getElementById("imageURL").value;

    
    function generateEmployeeId() {
        
        return Math.floor(1000 + Math.random() * 9000);
    }
    const id = generateEmployeeId();


    const newEmployee = new Employee(id, fullName, department, level);
    newEmployee.imageURL = imageURL; 

   
    newEmployee.renderCard();
    this.reset();
});
