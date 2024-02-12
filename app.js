// array contains all employee data
const Alldata = []
// bult blueprint constructor
function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = ""; 


    };

   
    this.render = function() {
        const employeeInfoContainer = document.getElementById("employeeInfo");



        employeeInfoContainer.appendChild(employeeDiv);
    };
}



    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `
        <h2>${this.fullName}</h2>
        <p>ID: ${this.id}</p>
        <p>Department: ${this.department}</p>
        <p>Level: ${this.level}</p>
        <img src="${this.imageURL}" alt="${this.fullName}">
    `;

