import { Block } from "./Block";

export class Level {
  gap: number;
  levelWidth: number;
  levelHeight: number;
  private blocks: Block[] = [];

  constructor(gap: number, levelWidth: number, levelHeight: number) {
    this.gap = gap;
    this.levelWidth = levelWidth;
    this.levelHeight = levelHeight;
    this.buildLevel();
  }

  private buildLevel() {
    const blockWidth = 18;
    const blockHeight = 5;
    for (let y = 0; y < this.levelHeight; y++) {
      for (let x = 0; x < this.levelWidth; x++) {
        const block = new Block((x * (blockWidth + this.gap)) + 50, (y * (blockHeight + this.gap)), blockWidth, blockHeight, '#4DB6AC');
        this.blocks.push(block);
      }
    }
  }

  draw() {
    this.blocks.forEach((block) => block.draw());
  }
}