let employedetails = [{
    EmpId:1,
    EmpName: "Sharon",
    EmpCompany: "Amazon",
    EmpSalary: 100000,
    EmpAddress:{
        EmpCity: "Nandyal",
        EmpArea:"N.G.O's Colony"
    }
},
{
    EmpId:2,
    EmpName: "Chaithu",
    EmpCompany: "Capgemini",
    EmpSalary: 45000,
    EmpAddress:{
        EmpCity: "Allagadda",
        EmpArea:"Nakkaldinne"
    }
}];
console.log(employedetails);
// let container = document.getElementById("employeeDetails");
//         employedetails.map(emp => {
//             let empDiv = document.createElement("div");
//             empDiv.classList.add("employee-container");
            
//             empDiv.innerHTML = `
//                 <h3>Employee Details</h3>
//                 <p><strong>ID:</strong> ${emp.EmpId}</p>
//                 <p><strong>Name:</strong> ${emp.EmpName}</p>
//                 <p><strong>Company:</strong> ${emp.EmpCompany}</p>
//                 <p><strong>Salary:</strong> ${emp.EmpSalary}</p>
//                 <p><strong>City:</strong> ${emp.EmpAddress.EmpCity}</p>
//                 <p><strong>Area:</strong> ${emp.EmpAddress.EmpArea}</p>
//             `;

//             container.appendChild(empDiv);
//         });

employedetails.map(user =>{
    let store = document.getElementById("store");
    store.innerText += `
    <tr>
        <td>${user.EmpId}</td>
        <td>${user.EmpName}</td>
        <td>${user.EmpCompany}</td>
        <td>${user.EmpSalary}</td>
        <td>${user.EmpAddress.EmpCity}</td>
        <td>${user.EmpAddress.EmpArea}</td>
    </tr>`
})
