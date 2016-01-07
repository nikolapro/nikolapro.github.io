<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>DENAX</title>
	<style>
	body {
		font-family: helvetica;
	}
	.header {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 500px;
		color: white;
		background-image: url(http://7-themes.com/data_images/out/17/6826574-gaming-wallpaper.jpg);
		z-index: 1;
		opacity: 0.8;
	}
	.hcolor {
		position: absolute;
		top: 0px;
		left: 0px;
		background: #000;
		opacity: 0.6;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	.noise {
		position: absolute;
		top: 0px;
		left: 0px;
		background: url(https://kickback.com/assets/images/noise-5fb8372c9a5906777990c4aebe61f2d8.png);
		z-index: 3;
		width: 100%;
		height: 100%;
	}
	.header .title {
		position: absolute;
		top: 10px;
		left: 10px;
		font-size: 45px;
		font-weight: bold;
		z-index: 5;
		cursor: pointer;
	}
	.menu {
		position: absolute;
		top: 10px;
		right: 10px;
		color: darkgray;
		z-index: 4;
	}
	.menu li {
		display: inline;
		padding: 0px 10px 0px 10px;
		font-size: 20px;
		height: auto;
	}
	.menu li a:hover {
		color: white;
		cursor: pointer;
	}
	.container {
		position: absolute;
		top: 550px;
		left: 50px;
		text-align: left;
		color: #1D1E1F;
	}
	.box {
		width: 500px;
	}
	.container h1 {
		font-size: 40px;
		margin-bottom: 0px;
	}
	hr {
		width: 100%;
		background: black;
		color: black;
		height: 2px;
	}
	.container .description {
		font-size: 18px;
	}
	button {
		height: 35px;
		border-radius: 0px;
		border: 1px solid black;
		color: white;
		background: black;
		cursor: pointer;
		margin-right: 5px;
		margin-left: 5px;
		transition: 0.1s;
		letter-spacing: 2px
	}
	button:hover {
		background: white;
		color: black;
	}
	.news {
		position: absolute;
		top: 550px;
		right: 50px;
		color: #1D1E1F;
	}
	.news h1 {
		font-size: 40px;
		margin-bottom: 0px;
		text-align: left;
	}
	.news .description {
		font-size: 18px;
	}
	</style>
</head>
<body>
	<div class="header">
		<div class="hcolor"></div>
		<div class="noise"></div>
		<div class="menu">
			<ul>
				<li><a>NEWS</a></li>
				<li><a>ABOUT</a></li>
			</ul>
		</div>
	<a class="title">DENAX</a>
	</div>
	<div class="container">
		<div class="box">
		<h1>WELCOME</h1>
		<hr align="left">
		<div class="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	    </div>
	    <br>
	    <button>ABOUT</button>
	</div>
</div>
	<div class="news">
		<div class="box">
		<h1>LAST NEWS</h1>
		<hr align="left">
		<div class="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	    </div>
	    <br>
	    <button>LOOK ALL NEWS</button>
	</div>
</div>
</body>
</html>