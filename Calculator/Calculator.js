let Answer_Data = document.getElementById("Answer_data");
let History_Data = document.getElementById("History_data");
let Btns = document.getElementsByClassName("Btn");

for (let i of Btns) {


   

    i.onclick = function (e) {
        let BtnText = e.target.innerText;
        // console.log(BtnText)
        // let LastBtnsText = Btns.findLast((Btns) => Btns > BtnText.length -1 );
        // console.log(LastBtnsText)
        // if(LastIndexText == "+"){
        //     BtnText =""
        // }
        console.log( Answer_Data.innerHTML.charAt( Answer_Data.innerHTML.length - 1 ))

        if( (Number.isInteger(Answer_Data.innerHTML.charAt( Answer_Data.innerHTML.length - 1 ))) && Answer_Data.innerHTML.charAt( Answer_Data.innerHTML.length - 1 ) == BtnText ) {
            // Answer_Data.innerHTML = ""
        }


        else if (BtnText == "C") {
            Answer_Data.innerHTML = ""
            History_Data.innerHTML = ""
        }
        else if (BtnText == "÷") {
            Answer_Data.innerHTML += "/"
        }
        else if (BtnText == "x") {
            Answer_Data.innerHTML += "*"
            if (Answer_Data.innerHTML == "*") {
                    console.log("error") 
            }
        }
        else if (BtnText == "=") {
            History_Data.innerHTML = Answer_Data.innerHTML;
            Answer_Data.innerHTML = eval(Answer_Data.innerHTML);     //  eval (evaluate) calculation karta hai (string m bhi calculate kr deta hai)
        }
        else if (BtnText == "CE") {
            Answer_Data.innerHTML = Answer_Data.innerHTML.slice(0, -1)
        }
        else if (BtnText == "x2") {
            // Answer_Data.innerHTML = Math.pow(Answer_Data.innerHTML, 2);
            Answer_Data.innerHTML = eval(Answer_Data.innerText * Answer_Data.innerText)
        }
     
        else {
            Answer_Data.innerHTML += BtnText;
        }

    }
}   

