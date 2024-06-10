import { initCanvas } from '../main';
import './style.css';


document.querySelector<HTMLDivElement>('#app').innerHTML = `
  <canvas id="bg-canvas"></canvas>
  <canvas id="px-canvas"></canvas>
  <button class="start-game-button">Play Game</button>
`;

const startBtn = document.querySelector<HTMLButtonElement>('.start-game-button');
startBtn.addEventListener('click', () => {
  startBtn.remove();
  initCanvas();
});
