window.onload = function() {

	document.getElementById('myNav').innerHTML = `
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="myNav">
				<a href="index.html" class="navbar-brand" id="myHeader"><h1>Civil Service Exam Reviewer Philippines</h1></a>	
				<ul class="nav ml-auto">
					<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
					<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
					<li class="nav-item"><a class="nav-link" href="review.html">Review</a></li>
				</ul>
		</nav>
	`;
}



function scrollUp() {

	var elmnt = document.getElementById("quiz_title");
	elmnt.scrollIntoView();
}