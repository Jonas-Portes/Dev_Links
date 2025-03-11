function toggleTheme(){
    const html = document.documentElement;
    const img = document.querySelector("#pfp img")

    html.classList.toggle("light")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/pfp - Noite.png")
        img.setAttribute("alt", "imagem pfp para fundo escuro")
    }else {
        img.setAttribute("src", "./assets/pfp.png")
        img.setAttribute("alt", "imagem pfp para fundo claro")
    }
}