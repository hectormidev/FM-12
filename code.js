const CSS = document.querySelector(`link[rel='stylesheet']`)
const BTN = document.getElementById('switch')

const change = () =>{
    /* let mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)") */
    if(BTN.checked){
            CSS.href = CSS.href.replace('style.css', 'dark.css')
    } else{
        CSS.href = CSS.href.replace('dark.css', 'style.css')
    }
}