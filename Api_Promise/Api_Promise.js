let Main = document.getElementById("main");


function Display(Data) {

  Data.map((N) => {
    console.log(N)
    Main.innerHTML +=

      `
    <div class="card">
    <div class="Thumbnail">
      <img
        src= ${N.avatar}
        alt=""/>
    </div>
    <div class="content">
      <h3 class="title">${N.first_name}  | ${N.last_name}</h3>
      <p class="Disc">${N.id}</p>
      <p class="extra">${N.email}</p>
    </div>
  </div>
    
    `
  });

}



async function GetData() {
  let Data = await fetch("https://reqres.in/api/users?page=2")
  Data = await Data.json();
  Display(Data.data)
}

GetData()