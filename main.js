canvas = document.getElementById('my_canvas')
ctx = canvas.getContext("2d")

greecar_width ="75";
greencar_height = "100";

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = "5";
greencar_y = "225";

function add() {
	background_ImgTag = new Image(
	background_ImgTag.onload = uploadBackground();
	background_ImgTag.src = background_image;	

	        greecar_ImgTag = new Image(
			greecar_ImgTag.onload = uploadGreecar();
			greecar_ImgTag.src = greecar_image;
	)
}

function uploadBackground() {
ctx.drawImage(green_ImgTag, greencar_x, greencar_x, greencar_width, greencar_height)

}

function uploadgreencar() {
	ctx.drawImage(green_ImgTag, greencar_x, greencar_x, greencar_width, greencar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >=0)
{
    greencar_y = greencar_y - 10;
    console.log("when up arrow is pressed="+ greencar_x + " | y =" + greencar_y);
    uploadBackground();
    uploadRover(); 
}

function down()
{
	if (greencar_y <=500)
	}
    greencar_y = greencar_y + 10;
    console.log("when up arrow is pressed="+ greencar_x + " | y =" + greencar_y);
    uploadBackground();
    uploadRover(); 
}
}

function left()
{
	if (greencar_x >=0)
{
    greencar_x = greencar_x - 10;
    console.log("when up arrow is pressed="+ greencar_x + " | y =" + greencar_y);
    uploadBackground();
    uploadRover(); 
}
}

function right()
{
	if ( greencar_x <=700)
{
    greencar_x = greencar_x + 10;
    console.log("when up arrow is pressed="+ greencar_x + " | y =" + greencar_y);
    uploadBackground();
    uploadgreencar();
}
}