
function addSlider($) {
	
	
	var page = window.location.pathname;
	page = page.replace(/\/(page\d+)\.html/,'$1');	
	var itemMap = $.getJSON("images/"+page+"/image_map.json", function(data){
		var slideConteiner = document.createElement("div");
		
		console.log(data);
		var dotText = document.createElement('div');
		dotText.setAttribute("style","text-align:center");
		var i = 1;
		if(data !== undefined){
			for(var k in data) {
				var newDiv = document.createElement("div"); 
				newDiv.setAttribute("class", "mySlides fade");
				var numberText = document.createElement('div');
				numberText.setAttribute("class","numbertext");
				var img = document.createElement('img');
				img.setAttribute("src","images/",page,"/",k);
				img.setAttribute("style","width:100%");
				var imgText = document.createElement('div');
				imgText.setAttribute("class","text");
				imgText.innerHTML = data[k];
				newDiv.appendChild(numberText);
				newDiv.appendChild(img);
				newDiv.appendChild(imgText);
				//newDiv.appendChild("<div class='numbertext'></div><img src='images/"+page9+"/+"k+"' style="width:100%"><div class='text'>"+itemMap[k]+"</div>");
				//console.log(newDiv);
				//console.log(k," ", itemMap[k]);
				slideConteiner.append(newDiv);
				
				var span = document.createElement('span');
				span.setAttribute("onclick","currentSlide(",i,")");
				dotText.append(span);
			}
			slideConteiner.append("<br>");
			slideConteiner.append(dotText);
			console.log(slideConteiner);
		}
		var mainSide = document.getElementById("main_slide");
		mainSide.append(slideConteiner);
		
	});
			
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

