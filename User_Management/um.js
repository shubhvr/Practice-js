let UserForm = document.getElementById("User_form");
let DisplayData = document.getElementById("DisplayData");
let UserData = document.getElementById("UserData");
let UserList = document.getElementById("UserList");
let showCase = document.getElementById("showCase");
let showCaseData = document.getElementById("showCaseData");
let UpdateBtn = document.getElementById("UpdateBtn");
let DeleteBtn = document.getElementById("DeleteBtn");





let Users = [];
console.log(Users)

function closeShowCase() {
  showCase.style.visibility = "hidden";
}

function showShowCase() {
  showCase.style.visibility = "visible";
}

let currentUser;
function HandleClick(e) {
  showShowCase()
  showCaseData.innerText = `Id: ${e.Id}\n Name: ${e.Name}\n Age: ${e.Age}`;
  currentUser = e;

}

function UserDisplay() {
  UserList.innerHTML = "";
  Users.map((e) => {
    let MyPara = document.createElement("p");
    MyPara.className = "UserName";
    MyPara.innerHTML = e.Name;
    MyPara.addEventListener("click", () => {
      HandleClick(e);
    });
    UserList.appendChild(MyPara);   //  tag mai koi new tag add kar sakte hai 
  });
}




UserForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let UserDetails =
  {
    Id: e.target[0].value,
    Name: e.target[1].value,
    Age: e.target[2].value,
  };
  // console.log(UserDetails)

  let Index = -1;
  Users.forEach((e, i) => {
    if (e.Id == UserDetails.Id) {
      Index = i;
    }
  });

  if (Index == -1){

    Users.push(UserDetails);
  
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  
    UserDisplay();
  }

  else {
    Users[Index].Id = UserDetails.Id;
    Users[Index].Name = UserDetails.Name;
    Users[Index].Age = UserDetails.Age;
    UserDisplay();
    closeShowCase();
  }
});


DeleteBtn.addEventListener("click", () => {
  Users.splice(Users.indexOf(currentUser), 1);
  UserDisplay();
  closeShowCase();
});


UpdateBtn.addEventListener("click", () => {
  let Input = UserForm.getElementsByTagName("input");
  Input[0].value = currentUser.Id;
  Input[1].value = currentUser.Name;
  Input[3].value = currentUser.Age;
});


