
if (document.querySelector('.text')) {
    const text = document.querySelector('.text')

    text.addEventListener('click', () => {
        if (text.style.color == 'transparent') {
            text.style.color = 'black'
        } else {
            text.style.color = 'transparent'
        }
    })
    document.addEventListener('keydown', function (event) {
        if (event.code == 'Space') {
            text.remove()
        }
    });
}