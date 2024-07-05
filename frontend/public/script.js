
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
    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    try {
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login successful");
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
    const name = document.getElementById("signup_username").value;
    const email = document.getElementById("signup_email").value;
    const password = document.getElementById("signup_password").value;

    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert("User registered successfully");
      // } else {
      //   alert("Error registering user");
      }
    } catch (error) {
      alert("ERROR: ", error)
      console.error("Error:", error);
      console.log("Error:", error);
    }
  });
