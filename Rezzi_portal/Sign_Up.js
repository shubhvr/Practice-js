let signUpForm = document.getElementById("sign_up_form");
let checkboxBtn = document.getElementById("checkboxBtn");


let AllUser = []
console.log(AllUser)

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userDetails = {
        firstName: e.target[0].value,
        lastName: e.target[3].value,
        email: e.target[1].value,
        phone: e.target[4].value,
        password: e.target[2].value,
        confirmPassword: e.target[5].value,

    }

    if (userDetails.firstName.length === 0) {
        alert("First Name is required")
    } else if (userDetails.lastName.length === 0) {
        alert("Last Name is required")
    } else if (userDetails.email.length === 0) {
        alert("Email is required")

    }
    // else if (userDetails.password.length === 0) {
    //     alert("password is required")
    // }
    else if (userDetails.confirmPassword.length === 0) {
        alert("Confirm password is required")
    }
    else {
        console.log(userDetails)
    }



    if (userDetails.phone.length === 0) {
        alert("Phone is required")
    } else if (userDetails.phone.length != 12) {
        alert("Invalid phone number")
    } else {
        // console.log(userDetails)
    }

    if (!userDetails.password.length == 0) {
        if (userDetails.password.length >= 8) {

            let passwordArr = userDetails.password.split('');
            console.log((passwordArr))
            for (let i = 0; i <= userDetails.password.length; i++) {
                let char = passwordArr[i];

                if (char >= "a" && char <= "z") {
                    alert("sssssss")
                }
                else {
                    alert("Please enter atleast one small character")
                }
            }
            // if ((userDetails.password >= "a" && userDetails.password <= "z") &&
            //     (userDetails.password >= "A" && userDetails.password <= "Z") 
            //     // (userDetails.password >= "0" && userDetails.password <= "9") &&
            //     // (userDetails.password >= "!" && userDetails.password <= "/") ||
            //     // (userDetails.password >= ":" && userDetails.password <= "@") ||
            //     // (userDetails.password >= "[" && userDetails.password <= "`") ||
            //     // (userDetails.password >= "{" && userDetails.password <= "~")
            // ) {
            //    alert("Successful")
            // } else {
            //     alert("Please Enter Atleast one Special character, number, lowercase,uppercase ")
            // }

        } else {
            alert("Password length must be atleast 8 characters")
        }

    } else {

        alert("password is required")
    }

    if (userDetails.password != userDetails.confirmPassword) {
        alert("Passwords must match")
    } else {

    }


    checkedBtn();
});


function checkedBtn() {
    if (!checkboxBtn.checked) {
        alert("Please accept Terms of Service")

    } else {

    }
}









// let i = 0;
// let passwordStr = userDetails.password;
// let characters = "";
// while (i <= userDetails.password.length) {
//     characters = passwordStr.charAt(i);

//     if (!isNaN(characters * 1)) {
//         alert("character is numeric")
//     } else {
//         if (characters == characters.toUpperCase()) {
//             alert("upper case is true")
//         }
//         if (characters == characters.toLowerCase()) {
//             alert("Lowercase is true")
//         }
//     }
//     i++;
// }