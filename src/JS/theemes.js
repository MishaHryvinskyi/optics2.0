const themeSwitch = document.getElementById('switch');

export function onThemeChanges(e) {
    if (e.target.nodeName === 'INPUT') {
        const isChecked = e.target.checked;
        toggleTheme(isChecked);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeSwitch.checked = (savedTheme === 'dark');
    } else {
        document.body.classList.add('light');
    }
});

export function toggleTheme(isChecked) {
    if (isChecked) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}