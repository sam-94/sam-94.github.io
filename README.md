# FullScreen-Responsive-Nav-Menu
With Our Menu, you'll no longer struggle with media queries to create responsive menus, or any other heavy plugins to create FullScreen menus.


[Demo](http://sam-94.github.io/)
## Browser Support:
(Tested on following browsers and confirmed that the Menu is working.)
* Latest Chrome
* Latest Firefox
* Opera
* Android 2.2+ or earlier
## Installation:

##### Add style.css to the head of your document:
```
<link rel="stylesheet" type="text/css" href="style.css"> 
```

##### Add Jquery before closing body tag (Use Jquery 3.3.1 or earlier):
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

##### Create the menu in your HTML:
```
	<header id="header" role="header">
		<div class="container">
			<div class="logo">
				<a href="#"><img src="logo.png" alt="logo"></a>
			</div>
			<button class="toggle">
				<span></span>
				<span></span>
				<span></span>
				Menu
			</button>
			<div class="menu">
			    	<div class="innermenu">
					  <ul>
					     <li><a href="#">Home</a></li>
					     <li><a href="#">About</a></li>
					     <li><a href="#">Blog</a></li>
					     <li><a href="#">News</a></li>
					     <li><a href="#">Contact</a></li>
					  </ul>
			    	</div>
			</div>
		</div>
	</header> 
```
##### Initilalize the menu:
```$(document).ready(function(){
    $('.toggle').click(function(){
    	 $(this).toggleClass('open');
       $('.menu, .innermenu').toggleClass('active');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
});
```
## Support:
If you need help using Our Menu, have a suggestion or idea, or have found a bug, please create an issue.
