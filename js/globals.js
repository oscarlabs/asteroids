const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let frames = 0;
let requestId;
let gameMode = 0;

const asteroids = [];

let moveUp = 0;
let moveRight = 0;
let moveLeft = 0;
let moveDown = 0;
let power = 0;
let frameTime;
let target;
let mana = 100;
let totalPoints = 0;
let asteroidsDestroyed = 0;
let asteroidsDodged = 0;

//const myLaserAudio = document.createElement('audio');
//myLaserAudio.src = '../images/laser.mp3';

//const myBackgroundAudio = document.createElement('audio');
//myBackgroundAudio.src = '../images/heroic.mp3';

const myBackgroundAudio = document.getElementById('backgroundAudio');
myBackgroundAudio.style.display = 'none';

const myLaserAudio = document.getElementById('laserAudio');
myLaserAudio.style.display = 'none';
