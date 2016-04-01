"use strict";

// setuo your IIFE (Immediately Invoked Function Expression)

(function () {
		
	//declared a named function way
	function ProjectDescription() {
		console.log("inside ProjectDescription function");
		
		var firstProject, 
			secondProject, 
			thirdProject, 
			aboutme, 
			portfolio_title, 
			aboutme_title, 
			contactme_title;
		
		firstProject = document.getElementById("firstProject");
		firstProject.innerHTML = "This was my final project in the first semester for web and internet fundamentels. Perticularly in this project I learned how to use jQuery slider and integrate google maps on website. ";
		
		secondProject = document.getElementById("secondProject");
		secondProject.innerHTML = "It is an ecommerce application that allows users to shop bags through the mobile app.The application interface is simple and fluid, giving the users a smooth and satisfactory feel while using the application. ";
		
		thirdProject = document.getElementById("thirdProject");
		thirdProject.innerHTML = "The team collaboration and communication app displays a user interface that I have perticularly designed to keep the workflow clear, straightfo/rward, and as elegant as possible.";
		
		aboutme = document.getElementById("aboutme");
		aboutme.innerHTML = "Hi, I'm priyank vyas. A web/User Interface designer from India. I have completed my Bachelor of Engineering in India where I worked as a web/UI designer in one of the best mobile and web application development company of Gujarat for more than 2 years. where I designed various application for android ,iOS and web. But because of my strong desire to learn Web development I enrolled for the course of interactive web design and development in Georgian college, Barrie, Ontario";
		
		portfolio_title = document.getElementById("portfolio_title");
		portfolio_title.innerHTML = "Portfolio";
		
		aboutme_title = document.getElementById("aboutme_title");
		aboutme_title.innerHTML = "About Me";
		
		contactme_title = document.getElementById("contactme_title");
		contactme_title.innerHTML = "Contact Me";
		
	}
		ProjectDescription();
		
		var userName = document.getElementById("userName");
		var email = document.getElementById("email");
		var phone = document.getElementById("phone");
		var message = document.getElementById("message");
		var submitButton = document.getElementById("submitButton");
		
		submitButton.addEventListener("click", function(){
			console.log("User Name: " + userName.value);
			console.log("Email Address: " + email.value);
			console.log("Phone Number: " + phone.value);
			console.log("Message: " + message.value);
		});

})();