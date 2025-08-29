let paras = document.querySelectorAll("p")

for (let i = 0; i < paras.length; i ++) {
    let para = paras[i]
    para.addEventListener("click", function () {
        alert("you clicked" + (i+1))

    })
}
