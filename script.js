const toggleSwitch = document.getElementById('toggle-switch');
let isNightMode = false;

toggleSwitch.addEventListener('click', () => {
    const body = document.body;
    const toggleButton = document.querySelector('#toggle-switch #toggle-button');
    const h1Element = document.getElementById('h1');

    isNightMode = !isNightMode;

    toggleSwitch.classList.toggle('active', isNightMode);

    if (isNightMode) {
        body.style.backgroundColor = '#444';
        toggleButton.style.left = '160px';
        toggleSwitch.style.background = '#4444 url("./sun2.png") center left no-repeat';
        toggleSwitch.style.backgroundSize = 'auto 100%';
        h1Element.textContent = ' NIGHTMODE';
        toggleButton.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'white';
        toggleButton.style.left = '';
        toggleSwitch.style.boxShadow = 'inset 0 0 6px rgba(0, 0, 0, 1)';
        toggleSwitch.style.background = '';
        h1Element.textContent = ' DAYMODE';
        toggleButton.style.backgroundColor = '#444';
    }
});
