// UC 1 – Remove an Employee from the Payroll details
const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData._id == node.id)
    if(!empPayrollData) return;

    const index = empPayrollList.map(empData => empData._id)
                    .indexOf(empPayrollData._id)
    empPayrollList.splice(index, 1)
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList))
    document.querySelector(".emp-count").textContent=empPayrollList.length
    createInnerHtml();
}



// UC 2 – Included JS Files

const stringfyDate = (date) => {
    const options = { day : 'numeric',month: 'short' , year: 'numeric' }
    const newDate = !day ? "undefined" :
            new Date(Date.parse(date)).toDateString('en-GB',options)
    return newDate;
}

let site_properties ={
    home_page: "../pages/test-home.hyml",
    add_emp_payroll_page: "../pages/new_payroll_form_js.html"
}

// UC 2 – Update an Employee Payroll details

        //home.js
let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList = getEmployeePayrollDataFormStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});


        //payroll form.js
let isUpdatee = false;
let employeePayrollObj ={};

window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name')
    name.addEventListener('input',function(){

        const salary = document.querySelector('#salary');
        setTextValue('.salary-output',salary.value)
        salary.addEventListener('input',function(){
            checkforUpdat();
        })
    })

})


const checkForUpdate = ( ) => {
    const employeePayrolljson = localStorage.getItem('editEmp')
    isUpdatee = employeePayrolljson ? true : false;
    if(!isUpdatee) return;
    employeePayrollObj = JSON.parse(employeePayrolljson);
    setForm();
}

const setForm=()=>{
    setValue('#name',employeePayrollObj.name)
    setSelectedValues('[name=profile]', employeePayrollObj._profilePic)
    setSelectedValues('[name=gender]', employeePayrollObj._gender)
    setSelectedValues('[name=department]', employeePayrollObj._department)
    setValue('#salary',employeePayrollObj._salary)
    setTextValue('.salary-output',employeePayrollObj._salary)
    setValue('#notes',employeePayrollObj._note)
    let date = stringfyDate(employeePayrollObj._startDate).split(" ")
    setValue('#day',date[0])
    setValue('#month',date[1])
    setValue('year',date[2])
}

const setSelectedValues =(propertValue , value)=>{
    let allIteams = document.querySelectorAll(propertValue)
    allIteams.forEach(iteam=>{
        if(Array.isArray(value)){
            if(value.includes(iteam.value)){
                iteam.checked = true
            }
        }
        else if (iteam.value === value)
            iteam.checked=true;
    })
}

































