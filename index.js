const btnSwitch = document.querySelector('.switch button')
const image = document.querySelector('.profile img')
const mode = document.querySelector('html')

btnSwitch.addEventListener('click', () => {
    mode.classList.toggle('light')

    if (mode.classList.contains('light')) {
        image.setAttribute('src', './assets/avatar-light.png')
    } else {
        image.setAttribute('src', './assets/avatar.png')
    }
})