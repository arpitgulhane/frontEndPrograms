window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name')
    const textError = document.querySelector('.text-error')
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent ="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    })

    const salary = document.querySelector('#salary')
    const output = document.querySelector('.salary-output')
    output.textContent = salary.value
    salary.addEventListener('input',function(){
        output.textContent = salary.value
    })

})

// UC 3 – On Save Create Employee Payroll Object

const save =()=>{
    try{
        let employeePayrollData = creatEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch (e){
        return ;
    }
}   

const creatEmployeePayroll = ()=>{
let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name')
    }catch(e){
        setTextValue('.text-error',e)
        throw e;
    }
    employeePayrollData.profilePic = getInputValues('[name=profile]').pop()
    employeePayrollData.gender = getInputValues('[name=gender]').pop()
    employeePayrollData.department = getInputValues('[name=department]').pop()
    employeePayrollData.salary = getInputValuesById('#salary')
    employeePayrollData.note = getInputValueById('#notes')
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+
        " "+getInputValueById('#year');
    employeePayrollData.date = Date.parse(date)
    alert(employeePayrollData.toString())
    return employeePayrollData

}

const getSelectedValues = (propertyValues) => {
    let allItems = document.querySelectorAll(propertyValues);
    let selItem =[]
    allItems.forEach(item=>{
        if(item.checked) selItem.push(item.value)
    })
    return selItem
}    

const getInputValueById = (id) =>{
    let value = document.querySelector(id).value
    return value
}

const getInputValue =(id) =>{
    let value = document.getElementById(id).value
    return value
}

// UC 4 – Saving Employee Payroll to Local Storage
function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"))
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData)
    }else{
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString())
    localStorage.selItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}

// UC 5 – Reset the Employee Payroll Form
const resetForm =()=>{
    setValue('#name','')
    unsetSelectedValues('[name=profile]')
    unsetSelectedValues('[name=gender]')
    unsetSelectedValues('[name=department]')
    setValue('#salary','')
    setValue('#notes','')
    setValue('#day','1')
    setValue('#month','january')
    setValue('#year','2020')
}
const unsetSelectedValues = (propertyValues)=>{
    let allItems = document.querySelectorAll(propertyValues)
    allItems.forEach(item => {
        item.checked = false
    })
}

const setTextValue =(id,value)=>{
    const element = document.querySelector(id)
    element.textContent=value
}
const setValue =(id,value)=>{
const element = document.querySelector(id)
element.value=value
}





class EmployeeData{

    get id(){return this._id}
    set id(id){
        this._id = id;
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
            else throw 'Name is InCorrect !';
    }

    get profiePic(){ return this._profilePic;}
    set profilePic(profiePic){
        this._profilePic = profiePic;
    }

    get gender(){return this._gender;}
    set gender(gender){
        this._gender=gender;
    }

    get department(){return this.department}
    set department(department){
        this._department=department;
    }

    get salary(){this.salary}
    set salary(salary){this._salary=salary}

    get note(){this.note}
    set note(note){this._note=note}

    get startDate(){
        this.startDate
    }
    set startDate(startDate){
        this._startDate=startDate
    }

    //method
    toString(){
        const options = { year : 'numeric', month:'long',day:'numeric'}
        const empDate = !this.startDate ? "undefined" :
                this.startDate.toLocaleDateString("en-US",options)
        
        return "id= "+this.id+" , name ="+this.name+" , gender= "
        +this.gender+" , profilePic= "+this.profiePic+" , department= "
        +this.department + " , salary= "+this.salary+" , startDate= "
        +empDate + " , notes= "+this.note;
    }
}