var canvas = new fabric.Canvas ('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";
function player_update() {
    fabric.Image.fromURL ("player.png" , function (Img) { 
     player_object = Img;
     player_object.scaleToWidth (150);
     player_object.scaleToHeight (140);
     player_object.set(
         {
             top : player_y ,
             left : player_x 
         }
     );
     canvas.add (player_object);
    } );
}
function block_image(get_image) {
    fabric.Image.fromURL (get_image , function (Img) { 
     block_image_object = Img;
     block_image_object.scaleToWidth (150);
     block_image_object.scaleToHeight (140);
     block_image_object.set(
         {
             top : player_y ,
             left : player_x 
         }
     );
     canvas.add (block_image_object);
    } );
}
window.addEventListener("keydown" , my_key_down);
function my_key_down(e) {
    keyPressed = e.keyCode ;
    console.log (keyPressed);
if (e.shiftKey == true && keyPressed == '80') {
    console.log ("P and shift pressed together");
    block_image_width = block_image_width + 10 ;
    block_image_height = block_image_height + 10;
    document.getElementById ("current_width").innerHTML = block_image_width ;
    document.getElementById ("current_height").innerHTML = block_image_height ;
}


if (e.shiftKey == true && keyPressed == '77') {
   console.log ("M and shift pressed together");
   block_image_width = block_image_width - 10 ;
   block_image_height = block_image_height - 10;
   document.getElementById ("current_width").innerHTML = block_image_width ;
   document.getElementById ("current_height").innerHTML = block_image_height ;
}


if (keyPressed == '38') {
    up();
    console.log ("up");
}

if (keyPressed == '39') {
    right();
    console.log ("right");
}

if (keyPressed == '37') {
    left();
    console.log ("left");
}

if (keyPressed == '40') {
    down();
    console.log ("down");
}

if (keyPressed == '81') {
    block_image("hulk_face (1).png");
    console.log ("Hulk Face");
}

if (keyPressed == '87') {
    block_image("hulk_left_hand (1).png");
    console.log ("Hulk Left Hand");
}

if (keyPressed == '69') {
    block_image("hulk_legs (1).png");
    console.log ("Hulk Legs");
}

if (keyPressed == '82') {
    block_image("hulk_right_hand (1).png");
    console.log ("Hulk Right Hand");
}

if (keyPressed == '84') {
    block_image("hulkd_body (1).png");
    console.log ("Hulk Body");
}

if (keyPressed == '89') {
    block_image("ironman_body (1).png");
    console.log ("IronMan Body");
}

if (keyPressed == '85') {
    block_image("ironman_face (1).png");
    console.log ("IronMan Face");
}

if (keyPressed == '73') {
    block_image("ironman_left_hand (1).png");
    console.log ("IronMan Left Hand");
}

if (keyPressed == '79') {
    block_image("ironman_legs (1).png");
    console.log ("IronMan Legs");
}

if (keyPressed == '90') {
    block_image("ironman_right_hand (1).png");
    console.log ("IronMan Right Hand");
}

if (keyPressed == '65') {
    block_image("player (1).png");
    console.log ("Player");
}

if (keyPressed == '83') {
    block_image("spiderman_body (1).png");
    console.log ("Spider Man Body");
}

if (keyPressed == '68') {
    block_image("spiderman_face (1).png");
    console.log ("Spider Man Face");
}

if (keyPressed == '70') {
    block_image("spiderman_left_hand (1).png");
    console.log ("Spider Man Left Hand");
}

if (keyPressed == '71') {
    block_image("spiderman_legs (1).png");
    console.log ("Spider Man Legs");
}

if (keyPressed == '72') {
    block_image("spiderman_right_hand (1).png");
    console.log ("Spider Man Right Hand");
}

if (keyPressed == '74') {
    block_image("thor_face (1).png");
    console.log ("Thor Face");
}

if (keyPressed == '75') {
    block_image("thor_body (1).png");
    console.log ("Thor Left Hand");
}
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height ;
        console.log ("Block Image Height = " + block_image_height );
        console.log ("When up arrow key is pressed, X = " + player_x  + "Y = " + player_y);
        canvas.remove (player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height ;
        console.log ("Block Image Height = " + block_image_height );
        console.log ("When down arrow key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove (player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width ;
        console.log ("Block Image Width = " + block_image_width );
        console.log ("When left arrow key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove (player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width ;
        console.log ("Block Image Width = " + block_image_width );
        console.log ("When right arrow key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove (player_object);
        player_update();
    }
}