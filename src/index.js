btn = document.getElementById('btn')
links = document.getElementsByTagName('a')
ftr = document.getElementById('ftr-txt')

btn.addEventListener('click', function () {
    bd = document.getElementsByTagName('body')
    if(bd[0].style.backgroundColor != 'black') {
        bd[0].style.backgroundColor = 'black'
        btn.style.backgroundColor = 'white'
        btn.innerText = 'Dark'
        btn.style.color = 'black'
        links[0].style.color = 'white'
        links[0].innerText = 'Dark Mode'
        links[1].style.color = 'white'
        ftr.style.color = 'white'
    }
    else {
        bd[0].style.backgroundColor = 'white'
        btn.style.backgroundColor = 'black'
        btn.innerText = 'Light'
        btn.style.color = 'white'
        links[0].style.color = 'black'
        links[0].innerText = 'Light Mode'
        links[1].style.color = 'black'
        ftr.style.color = 'black'
    }
})

year = document.getElementById('year')
year.innerText = new Date().getFullYear()