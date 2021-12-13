if (window.sessionStorage.getItem("animated") === null) {
  document.getElementById("animationLogo").classList.remove("d-none");
  document.getElementById("animationLogo").classList.add("animationLogo");
  document.getElementById("logo").classList.add("logoAnim");
  window.sessionStorage.setItem("animated", 1);
}
