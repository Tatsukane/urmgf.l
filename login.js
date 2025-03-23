const signInButton = document.getElementById("signInBtn");
const alert = document.querySelector("p");

signInButton.addEventListener("click", () => {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (username === "tphuong._.24" && password === "02042006") {
		window.location.href = ".\\About Us\\aboutUs.html";
	}
	else {
		alert.classList.add("alert");
		setTimeout(cl, 1500);
		return;
	}
})

function cl(){
	alert.classList.remove("alert");
}
