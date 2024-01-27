// I used static Info cause the dynamic from the form did not work
const departments = [
    { name: 'Administration', employees: 10, totalSalary: 120000, averageSalary: 12000 },
    { name: 'Marketing', employees: 15, totalSalary: 180000, averageSalary: 12000 },
    { name: 'Development', employees: 20, totalSalary: 240000, averageSalary: 12000 },
    { name: 'Finance', employees: 8, totalSalary: 96000, averageSalary: 12000 }
  ];
  
 
  function renderTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');
    const headerRow = document.createElement('tr');
    ['Department', '# of employees', 'Total Salary', 'Average'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
  
    departments.forEach(department => {
      const row = document.createElement('tr');
      ['name', 'employees', 'totalSalary', 'averageSalary'].forEach(key => {
        const cell = document.createElement('td');
        cell.textContent = department[key];
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
  
    
    const footerRow = document.createElement('tr');
    ['Total', '', '', ''].forEach(footerValue => {
      const td = document.createElement('td');
      td.textContent = footerValue;
      footerRow.appendChild(td);
    });
    tfoot.appendChild(footerRow);
    table.appendChild(tfoot);
  
    
    document.body.appendChild(table);
  }
  

  window.onload = renderTable;
  