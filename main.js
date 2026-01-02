document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);

      alert('Registrasi berhasil!');
      window.location.href = 'login.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // cegah submit default

      const inputEmail = document.getElementById('email').value;
      const inputPassword = document.getElementById('password').value;

      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (inputEmail === storedEmail && inputPassword === storedPassword) {
        alert('Login berhasil!');
        window.location.href = 'index.html'; // redirect ke halaman tujuan
      } else {
        alert('Email atau password salah!');
      }
    });
  }
});
