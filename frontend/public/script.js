
  const signInBtnLink = document.querySelector('.signInBtn-link'),
    signUpBtnLink = document.querySelector('.signUpBtn-link'),
    wrapper = document.querySelector('.wrapper');

  signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });

  signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });

  // API calls
  document
  .querySelector(".sign-in form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("login_username").value;
    const password = document.getElementById("login_password").value;

    try {
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Login successful");
        window.location.href = './public/user.html'
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

document
  .querySelector(".sign-up form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("signup_name").value;
    const username = document.getElementById("signup_username").value;
    const email = document.getElementById("signup_email").value;
    const password = document.getElementById("signup_password").value;
    const bio = document.getElementById("bio").value;

    try {
      const response = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password, bio}),
      });

      if (response.ok) {
        alert("User registered successfully");
        wrapper.classList.toggle('active');
      } else {
        alert("Error registering user");
      }
    } catch (error) {
      console.log("Error: ", error.message)
      console.error("Error:", error);
    }
  });
