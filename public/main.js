// SIGN IN
const btn = document.getElementById("login");

btn.addEventListener("click", (e) => {
  console.log('Jalo')
  e.preventDefault();

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
});