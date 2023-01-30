let toggleBtn = document.querySelector('.toggle')
let body = document.querySelector('body')

let buttons = document.querySelector('.buttons')
let btn = document.querySelectorAll('span')
let valueEl = document.getElementById('value-el')

for(let i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function()
    {
        if(this.textContent == "=")
        {
            valueEl.textContent = eval(valueEl.textContent);
        }
        else
        {
            if(this.textContent == "clear")
            {
                valueEl.textContent = "";
            }
            else
            {
                valueEl.textContent += this.textContent;
            }
        }
    })
}

toggleBtn.onclick = function()
{
    body.classList.toggle('dark');
}
