const signup = document.querySelector("#signup")
signup.addEventListener("submit",(event)=>{
    event.preventDefault()

    const fullname = document.querySelector("#fullname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirm = document.querySelector("#confirm").value

    if(!fullname || !email || !password || !confirm){
        alert("All field must be filled")
        return
    }
    if (password.length <=5 || password !== confirm) {
        alert("Check your confirm password")
        return
    }

    if (password !== confirm) {
        alert("Password must match")
        return
    }


    const user = {
        fullname:fullname,
        email:email,
        password:password,
        confirm:confirm
    }

    localStorage.setItem("User",JSON.stringify(user))
    
    

    alert("Account created successfully")

    signup.reset()

    window.location.href = "index2.html"

})