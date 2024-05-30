const form=document.getElementById("form")
const uname=document.getElementById("uname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const cpassword=document.getElementById("cpassword")
const tandc=document.getElementById("tc")
form.addEventListener('submit',(e)=> {
    e.preventDefault()
    validate() 
})
function validate(){
    let nameValue=uname.value.trim()
    let emailValue=email.value.trim()
    let passwordValue=password.cpassword.value.trim()
    let cpasswordValue=password.cpassword.value.trim()
    //user namecheck

    if(nameValue===''){
        setError(uname,'username cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'username should not be less than 3 characters')
    }
    else{
        setSuccess(uname)
    }
    //emailcheck
    if(emailValue===''){
        setError(email,'email should not be empty')
    }
    else if (!emailCheck(emailValue)){
        setError(email,'please enter valid email id')
    }
    else{
        setSuccess(email)
    }
    //password check
    if(passwordValue===''){

        setError(password,'password cannot be empty')
    }
    else if(passwordValue.lenth<8){
        setError(password,'password should be min 8 characters')
    }
    else{
        setSuccess(password)
    }
    //confirm password
    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
     else if(cpasswordValue!==passwordValue){
        setError(cpassword,'passwords not matched')
     }
     else{
        setSuccess(cpassword)
     }
     //terms and conditions check
     if(!tandc.checked){
        setError(tc,'click on terms and conditions')
     }
     else{
        setSuccess(tc)
     }
     function setError(input,message){
        let parent=input.parentElement;
        let small=parent.querySelector('small')
        small.innerText=message
        parent.classList.add('error')
        parent.classList.remove('success')

     }
     function setSuccess(input){
        let parent=input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
}
function emailCheck(input){
    let emailReg=/^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid=emailReg.test(input)
    return valid
}
}
