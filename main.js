var canvas= new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;

window.addEventListener("keydown",my_keydown);
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({            

        });
        canvas.add(block_image_object);
    });
}
function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=='80'){
        console.log("p & shift pressed togther");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("m & shift pressed togther");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    ranval = Math.floor(Math.random() * 4)+1;
    if(keyPressed=='70'){
        faceimage  = ranval.toString()+"_face.png";
        new_image(faceimage)
        console.log("f");  
    }
    if(keyPressed=='82'){
        right_hand_image  = ranval.toString()+"_right_hand.png";
        new_image(right_hand_image)
        console.log("r");  
    }
    if(keyPressed=='76'){
        left_hand_image  = ranval.toString()+"_left_hand.png";
        new_image(left_hand_image)
        console.log("l");  
    }
    if(keyPressed=='66'){
        body_image  = ranval.toString()+"_body.png";
        new_image(body_image)
        console.log("b");  
    }
    if(keyPressed=='84'){
        legs_image  = ranval.toString()+"_legs.png";
        new_image(legs_image)
        console.log("t");  
    }

}

function up(){
    if(player_y)
    {
        player_y = player_y - block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("when Up arrow key pressed, x = " + player_x + " , y +player_y")
        canvas.remove(player_object);
        player_update();
    }
}