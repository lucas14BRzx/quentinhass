function navigateTo(page) {
    window.location.href = page;
  }
  
  function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
  }
  
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  function toggleForm() {
    const registerFields = document.getElementById("registerFields");
    const loginFields = document.getElementById("loginFields");
    const modalTitle = document.getElementById("modalTitle");
    const toggleText = document.getElementById("toggleFormText");
  
    if (registerFields.style.display === "none") {
      registerFields.style.display = "block";
      loginFields.style.display = "none";
      modalTitle.textContent = "Registrar-se";
      toggleText.innerHTML = 'Já tem uma conta? <a href="#" onclick="toggleForm()">Login</a>';
    } else {
      registerFields.style.display = "none";
      loginFields.style.display = "block";
      modalTitle.textContent = "Login";
      toggleText.innerHTML = 'Não tem uma conta? <a href="#" onclick="toggleForm()">Registrar-se</a>';
    }
  }
  
  function loginWithGoogle() {
    alert("Login com Google em construção.");
  }
  
    window.onload = function() {
        const mealItems = document.querySelectorAll('.meal-item');
        mealItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
                item.querySelector('img').classList.add('show'); // Adiciona a classe ao <img>
            }, index * 300); // Atraso entre as animações
        });
    };

