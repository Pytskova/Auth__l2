document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }

    const registrationDate = new Date().toLocaleDateString();

    const user = { 
        login, 
        password, 
    registrationDate 
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Регистрация прошла успешно!');
    window.location.href = 'login.html'; 
});
