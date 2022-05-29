const container = document.getElementById("container")

window.onload = function () {
    for (i=1; i<10; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = `k${i}`;
        newDiv.className = "tile";
        console.log(newDiv.id);
        newDiv.innerHTML = newDiv.id;
        container.appendChild(newDiv);
    }    
}

const tablica = ['','','','','','','','','']



