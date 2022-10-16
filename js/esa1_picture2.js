let WIDTH = 350;
      let HEIGHT = 350;
      let SPRITE_HEIGHT = 350;
      let SPRITE_WIDTH = 350;
      const img = new Image();
      let sprite;
      let currentLoopIndex = 0;
      const animationLoop = [1, 2, 3, 4]
      let counter = 1;
      let intervall;
      let isAnimating = true;
      let wChange = true;


      function drawSprite(frameX, frameY) {
        const x = frameX * SPRITE_WIDTH;
        const y = frameY * SPRITE_HEIGHT;
        sprite.style.backgroundPosition = `${x}px ${y}px`;
      }

      // function addWidth (w){
      //  sprite.style.width = `${w}px` += 250;}


      document.addEventListener('keydown', function (event) {
        if (event.code == 'KeyR') {
          counter++;
          drawSprite(counter, counter);
        }
        if (event.code == 'KeyL') {
          counter--;
          drawSprite(counter, counter);
        }
        if (event.code == 'KeyA') {
          automatischAbspielen();
        }
        if (event.code == 'KeyS') {
          stoppen();
        }
        if (event.code == 'KeyW') {
            window.location.href = "esa1.html";
          }
      });


      function automatischAbspielen() {

        if (isAnimating) {
          intervall = setInterval(function () {
            counter++;
            drawSprite(counter, counter);
          }, 100);
          isAnimating = false;
        }
        else {
          clearInterval(intervall);
          isAnimating = true;
        }

      }

      function stoppen() {
        clearInterval(intervall);
      }



      window.onload = () => {
        img.src = 'images/sun.png';
       }
      


    

      img.onload = () => {
        const world = document.getElementById('game');
        world.style.width = `${WIDTH}px`;
        world.style.height = `${HEIGHT}px`;
        world.style.background = '#ffffff';

        //  Create the sprite element
        sprite = document.createElement('div');
        sprite.style.height = `${SPRITE_HEIGHT}px`;
        sprite.style.width = `${SPRITE_WIDTH}px`;
        sprite.style.border = '1px solid #000';
        sprite.style.backgroundImage = `url(${img.src})`;

        drawSprite(1, 1)
        world.appendChild(sprite);
        window.requestAnimationFrame(loop)
      }