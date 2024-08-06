document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const newPostForm = document.getElementById('new-post-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      
      if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in.');
        }
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('signup-username').value.trim();
      const password = document.getElementById('signup-password').value.trim();
      
      if (username && password) {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up.');
        }
      }
    });
  }

  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
      
      if (title && content) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create post.');
        }
      }
    });
  }
});
