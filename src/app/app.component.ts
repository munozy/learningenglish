import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningenglish';

  public isGameOver = false

  @Input() public gameOverMsg: string

  @Input() public status: string

  public finishGame(isWinner: boolean) {
    this.isGameOver = true
    
    if (isWinner) {
      this.gameOverMsg = 'You win!!!'
      this.status ='winner'
    } else {
      this.gameOverMsg = 'You lose!!!'
      this.status ='loser'
    }
  }

  public restart() {
    this.isGameOver = false
  }
}
