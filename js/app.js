window.onload = function () {
  /* Play and Reset buttons */
  document.getElementById('start').onclick = () => {
    play();
  };

  const resetOptions = document.querySelectorAll('.reset');

  resetOptions.forEach((resetOption) => {
    resetOption.onclick = function () {
      resetGame();
    };
  });
  /* ********************************************** */

  /* Virtual Pad for Mobile */

  const buttonRight = document.getElementById('button-right');
  const buttonLeft = document.getElementById('button-left');
  const buttonUp = document.getElementById('button-up');
  const buttonDown = document.getElementById('button-down');
  const buttonFire = document.getElementById('button-fire');

  buttonUp.addEventListener('touchstart', () => {
    moveUp = 1;
    buttonUp.style.width = '60px';
    buttonUp.style.height = '60px';
  });

  buttonUp.addEventListener('touchend', () => {
    moveUp = 0;
    resetControlPadButtons();
  });

  buttonRight.addEventListener('touchstart', () => {
    moveRight = 1;
    buttonRight.style.width = '60px';
    buttonRight.style.height = '60px';
  });

  buttonRight.addEventListener('touchend', () => {
    moveRight = 0;
    resetControlPadButtons();
  });

  buttonLeft.addEventListener('touchstart', () => {
    moveLeft = 1;
    buttonLeft.style.width = '60px';
    buttonLeft.style.height = '60px';
  });

  buttonLeft.addEventListener('touchend', () => {
    moveLeft = 0;
    resetControlPadButtons();
  });

  buttonDown.addEventListener('touchstart', () => {
    moveDown = 1;
    buttonDown.style.width = '60px';
    buttonDown.style.height = '60px';
  });

  buttonDown.addEventListener('touchend', () => {
    moveDown = 0;
    resetControlPadButtons();
  });

  buttonFire.addEventListener('touchstart', () => {
    power = 1;
    buttonFire.style.width = '80px';
    buttonFire.style.height = '80px';
  });

  buttonFire.addEventListener('touchend', () => {
    power = 0;
    resetControlPadButtons();
  });

  function resetControlPadButtons() {
    buttonUp.style.width = '50px';
    buttonUp.style.height = '50px';
    buttonRight.style.width = '50px';
    buttonRight.style.height = '50px';
    buttonLeft.style.width = '50px';
    buttonLeft.style.height = '50px';
    buttonDown.style.width = '50px';
    buttonDown.style.height = '50px';
    buttonFire.style.width = '70px';
    buttonFire.style.height = '70px';
  }

  /* ********************************************** */

  /* Modals */

  const gameAlert = document.getElementById('game-alert');
  const gameOver = document.getElementById('game-over');
  const gameWelcome = document.getElementById('game-welcome');

  gameAlert.style.display = 'block';
  gameWelcome.style.display = 'block';

  /* ********************************************** */

  const background = new Background(0, 0, canvas.width, canvas.height);
  const manaBox = new Mana(10, 20);
  const points = new Point(10, 35, canvas.width);
  const hero = new Hero(0, canvas.height - 120, 100, 100, 2);
  const laser = new Laser();

  function play() {
    generateAsteroids();
    if (requestId === undefined) {
      gameAlert.style.display = 'none';
      gameWelcome.style.display = 'none';
      requestId = requestAnimationFrame(animate);
      gameMode = 1;
    }
  }

  function stop() {
    gameAlert.style.display = 'block';
    gameOver.style.display = 'block';
    gameMode = 3;
  }

  function animate() {
    if (gameMode === 1) {
      frames++;

      if (moveUp === 1) hero.useSpeed();
      if (moveLeft === 1) hero.moveLeft();
      if (moveRight === 1) hero.moveRight();
      if (moveDown === 1) hero.moveBack();

      hero.applyWindForce();

      if (hero.positionY + hero.height / 2 > canvas.height) {
        stop();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      background.draw();
      points.draw();
      points.asteroidsDestroyed();
      manaBox.title();
      manaBox.draw();
      manaBox.charge();

      if (frames % 100 === 0) generateAsteroids();
      drawAsteroids(asteroids);
      hero.draw();
      if (power === 0 && mana < 100) {
        mana += 0.1;
      }
      if (power === 1 && mana > 1.1) {
        mana--;
        laser.draw(
          1 + hero.positionX + hero.width / 2,
          hero.positionY + 35,
          asteroids
        );
      }

      requestAnimationFrame(animate);
    }
  }

  function generateAsteroids() {
    const positionX = Math.floor(Math.random() * 350);
    const size = Math.floor(Math.random() * 50 + 50);
    const speed = Math.floor(Math.random() * 3);
    const asteroid = new Asteroid(positionX, -50, size, size, speed);
    asteroids.push(asteroid);
    asteroids.forEach((asteroid, index) => {
      if (asteroid.positionY > canvas.height) {
        asteroids.splice(index, 1);
        asteroidsDodged++;
        totalPoints += 5;
      }
    });
  }

  function drawAsteroids(asteroids) {
    if (typeof asteroids === 'object') {
      asteroids.forEach((asteroid, index) => {
        asteroid.draw();
        if (
          hero.positionX + hero.width / 2 >= asteroid.positionX &&
          hero.positionX + hero.width / 2 <=
            asteroid.positionX + asteroid.width &&
          ((hero.positionY + hero.height / 2 <=
            asteroid.positionY + asteroid.height &&
            hero.positionY + hero.height / 2 >= asteroid.positionY) ||
            (hero.positionY + hero.height / 2 >= asteroid.positionY &&
              hero.positionY + hero.height / 2 <=
                asteroid.positionY + asteroid.height))
        ) {
          stop();
        }
      });
    }
  }

  function resetGame() {
    window.location.reload();
  }

  addEventListener('keydown', (event) => {
    const { code } = event;
    if (gameMode === 1) {
      switch (code) {
        case 'ArrowRight':
        case 'KeyD':
          moveRight = 1;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = 1;
          break;
        case 'ArrowUp':
        case 'KeyW':
          moveUp = 1;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveDown = 1;
          break;
        case 'Space':
          power = 1;
          if (mana > 0) mana -= 5;
        default:
          break;
      }
    }
  });

  addEventListener('keyup', (event) => {
    const { code } = event;
    if (gameMode === 1) {
      switch (code) {
        case 'ArrowRight':
        case 'KeyD':
          moveRight = 0;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = 0;
          break;
        case 'ArrowUp':
        case 'KeyW':
          moveUp = 0;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveDown = 0;
          break;
        case 'Space':
          power = 0;
        default:
          break;
      }
    }
  });

  addEventListener('keypress', ({ code }) => {
    if (code === 'Enter') {
      if (gameMode === 1) gameMode = 2;
      else if (gameMode === 2) {
        gameMode = 1;
        animate();
      }
    }
  });
};

const defaultImg = new Image();
defaultImg.src = '../images/infinite_sky_a.png';
defaultImg.onload = function () {
  canvas.width = defaultImg.width;
  canvas.height = defaultImg.height;
  ctx.drawImage(defaultImg, 0, 0);
};

document.addEventListener('contextmenu', (event) => event.preventDefault());
