let title = document.querySelectorAll(".list");

for (let i = 0; i < title.length; i++) {

    title[i].onclick = function () {
        let j = 0;
        while (j < title.length) {
        title[j++].className = 'list'   // chnage the class name active to list list to active
        }
        title[i].className = 'active'
    }
}
