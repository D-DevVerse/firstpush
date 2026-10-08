const login = document.querySelector("#login")
login.addEventListener("submit",(event)=>{
    event.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    if(!email || !password){
        alert("All field must be filled")
        return
    }

    const saveUser = JSON.parse(localStorage.getItem("User"))

    if (!saveUser) {
        alert("No account found, Pls signup first")
        return
    }

    if (email === saveUser.email && password === saveUser.password) {
        alert(`Welcome ${saveUser.fullname}`)
        login.reset()
        window.location.href = "home.html"
        alert("Login successfully")
    } else {
        alert("Invalid email and password")
    }
})