window.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('http://localhost:8000/api/users/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
  
    const data = await res.json();
    if (res.status === 200) {
      document.getElementById('name').innerText = data.name;
      document.getElementById('bio').innerText = data.bio;
    } else {
      window.location.href = './login.html';
    }
  });
  