function login() {
      const btn = document.getElementById('loginBt');
      const msg = document.getElementById('message');

      btn.disabled = true;
      msg.textContent = 'Logging in...';

      new Promise(resolve => setTimeout(resolve, 2000))
        .then(() => {
          msg.textContent = 'Welcome back!';
          btn.disabled = false;
        });
    }