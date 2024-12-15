const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    document.getElementById('email').textContent = `Ваш логин: ${user.login}`;
    document.getElementById('registrationDate').textContent = `Дата регистрации: ${user.registrationDate}`;
} else {
    alert('Вы не авторизованы.');
    window.location.href = 'login.html'; 
}

document.getElementById('logout').addEventListener('click', () => {
    alert('Вы вышли из аккаунта.');
    window.location.href = 'login.html';
});
