document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('address').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (!fullname || !email || !address || !phone || !password || !confirmPassword) {
        alert('Semua kolom wajib diisi.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak sama.');
        return;
      }

      const userProfile = { fullname, email, address, phone };
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      localStorage.setItem('userPassword', password);
      localStorage.setItem('userEmail', email);

      alert('Registrasi berhasil! Silakan masuk.');
      window.location.href = 'masuk.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputEmail = document.getElementById('email').value.trim();
      const inputPassword = document.getElementById('password').value;
      const storedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const storedPassword = localStorage.getItem('userPassword');

      if (!storedProfile.email || !storedPassword) {
        alert('Belum ada akun. Silakan daftar dulu.');
        return;
      }

      if (inputEmail === storedProfile.email && inputPassword === storedPassword) {
        alert('Login berhasil!');
        localStorage.setItem('currentUserProfile', JSON.stringify(storedProfile));
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'beranda.html';
      } else {
        alert('Email atau password salah!');
      }
    });
  }
});
