
const nameInput = document.querySelector('[name = "name"]')
//const nameInput = document.form1.name
const emailInput = document.querySelector('[name = "email')

const formSubmit = event =>
{
    event.preventDefault()
    alert("Form has been submitted")
    for(let i = 0; i < 3; i++)
    {
        console.log(event.target[i].value)
    }
}
document.querySelector("form").addEventListener("submit", formSubmit)

const validateNameLength = event => 
{
    if (event.target.value.length <2)
    {
        alert("Name must have at least 2 characters")
        nameInput.select()
    }
}

nameInput.addEventListener('change', validateNameLength)

const validateEmailFormat = event => 
{
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)))
    {
        alert("Check email address, format is not correct")
        emailInput.select()
    }
}

emailInput.addEventListener('change', validateEmailFormat)