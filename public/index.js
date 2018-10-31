const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateForm.addEventListener("submit", action)

let userObject = {}

function action(event) {

    event.preventDefault();
    const email = document.getElementById("email").value
    const userName = document.getElementById("username").value
    const fullName = document.getElementById("fullname").value
    const birthday = document.getElementById("dob").value
    const mobileNumber = document.getElementById("mobile").value
    const socialMedia = document.getElementById("url").value
    const telephone = document.getElementById("telephone").checked
    const email2 = document.getElementById("email2").checked
    const mail = document.getElementById("mail").checked
    const ios = document.getElementById("ios").checked
    const android = document.getElementById("android").checked
    const mac = document.getElementById("mac").checked
    const windows = document.getElementById("windows").checked
    const linux = document.getElementById("linux").checked
    const admin = document.getElementById("admin").value
    const mod = document.getElementById("mod").value
    const user = document.getElementById("user").value
    const datetime = document.getElementById("datetime").value

    userObject.email = email
    userObject.userName = userName
    userObject.fullName = fullName
    userObject.birthday = birthday
    userObject.mobileNumber = mobileNumber
    userObject.socialMedia = socialMedia
    userObject.telephonePrefered = telephone
    userObject.emailPrefered = email2
    userObject.mailPrefered = mail
    userObject.iosDevice = ios
    userObject.androidDevice = android
    userObject.macDevice = mac
    userObject.windowsDevice = windows
    userObject.linuxDevice = linux
    userObject.administrator = admin
    userObject.moderator = mod
    userObject.user = user
    userObject.datetime = datetime



    const jsonUserObject = JSON.stringify(userObject)

    postUser(jsonUserObject)

}

function postUser(userInfo) {
    // console.log('again user', userInfo)
    fetch(`./api/user`, {
            method: 'POST',
            body: userInfo,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log('Reached Server, Server Message:', data)
            if (data.message === "Error, username Exists") {
                alert("Denied: Username Exists")

            } else {

                alert("Success")


            }
        })

    .catch(error => console.log('Error:', error))

}