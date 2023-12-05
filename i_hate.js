function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location ="index.html";
}

