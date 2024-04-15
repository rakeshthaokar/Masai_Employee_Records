// fill in javascript code here
let name = document.querySelector("#name")
let employeeid = document.querySelector("#employeeID")
let department = document.querySelector("#department")
let experience = document.querySelector("#exp")
let email = document.querySelector("#email")
let mobileno = document.querySelector("#mbl")
let submit = document.querySelector("#submit")
let tableBody = document.querySelector("tbody")
let data = []

function saveData() {
    localStorage.setItem("data", JSON.stringify(data))
}

function loadData() {
    let storedValue = JSON.parse(localStorage.getItem("data"))
    if (storedValue) {
        data = storedValue
        showData(data)
    }
}

function handleClick(event) {
    event.preventDefault()
    let obj = {
        name: name.value,
        employeeid: employeeid.value,
        department: department.value,
        experience: experience.value,
        email: email.value,
        mobileno: mobileno.value
    }
    data.push(obj)
    saveData()
    showData(data)
}

function showData(arr) {
    tableBody.innerHTML = ""
    arr.forEach(function(ele, i) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = ele.name
        let td2 = document.createElement("td")
        td2.innerHTML = ele.employeeid
        let td3 = document.createElement("td")
        td3.innerHTML = ele.department
        let td4 = document.createElement("td")
        td4.innerHTML = ele.experience
        let td5 = document.createElement("td")
        td5.innerHTML = ele.email
        let td6 = document.createElement("td")
        td6.innerHTML = ele.mobileno
        let td7 = document.createElement("td")
        if(ele.experience>5){
            td7.innerHTML = "Senior"
        }
        else if(ele.experience>=2 && ele.experience<=5){
            td7.innerHTML = "Junior"
        }
        else if(ele.experience<=1){
            td7.innerHTML = "Fresher"
        }
        let td8 = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click", function() {
            handleDelete(i)
        })
        td8.append(btn)
        tr.append(td1, td2, td3, td4, td5, td6, td7,td8)
        tableBody.append(tr)
    })
}

function handleDelete(index) {
    data = data.filter(function(ele, i) {
        return index !== i
    })
    saveData()
    showData(data)
}

submit.addEventListener("click", handleClick)
loadData()
