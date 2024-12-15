document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.login === login && storedUser.password === password) {
        alert('Успешный вход!');
        window.location.href = 'profile.html';
    } else {
        alert('Неверный логин или пароль.');
    }
});