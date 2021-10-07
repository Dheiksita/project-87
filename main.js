var canvas= new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
		    left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') 
	{
		block_x =5;
		new_image('e.png');
		console.log("e(elsa)");
	}
	if(keyPressed == '65')
	{
		block_x = 170;
		new_image('a.png');
		console.log("a(anna)");
	}
	
	if(keyPressed == '83')
	{
		block_x =400;
		new_image('s.png');
		console.log("s(swen)");
	}
	if(keyPressed == '79')
	{
		block_x = 650;
		new_image('o.png');
		console.log("o(olaf)");
	}
	if(keyPressed == '75')
	{
		block_x = 730;
	    new_image('k.png');
		console.log("k(kristoff)");
	}
	
}

