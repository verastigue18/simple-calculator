let toggleBtn = document.querySelector(".toggle")
let body = document.querySelector("body")
let buttons = document.querySelector(".buttons")
let btn = document.querySelectorAll("span")
let valueEl = document.getElementById("value-el")

for(let i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function()
    {
        if(this.innerHTML == "=")
        {
            valueEl.innerHTML = eval(valueEl.innerHTML);
        }
            
        else
        {
            if(this.innerHTML == "clear")
            {
                valueEl.innerHTML = null;
            }
            else
            {
                valueEl.innerHTML += this.innerHTML;
            }
        }
    })
}

toggleBtn.onclick = function()
{
    body.classList.toggle('dark');
}
