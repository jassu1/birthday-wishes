var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 
 function fabricjs(){
    fabric.Image.fromURL(get_image, function(Img)
        block_image_object= Img;)
    }
 



function new_image()
{
	
	fabric.Image.fromURL('BirthdayImage.jpg' , function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeigt(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });

        
    }


function playSound(){
	x.play();
}
