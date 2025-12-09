const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return;
  }
 
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
 
  window.location.href = "quiz.html";
});
