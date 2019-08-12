import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Phrase } from '../shared/phrase.model'
import { PHRASES } from './phrases-mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public instruction: string = 'Translate this phrase:'

  public phrases: Phrase[] = PHRASES

  public anwser: string

  public turn: number = 0

  public turnPhrase: Phrase

  public progress: number = 0

  public try: number = 3

  @Output() public finishGame: EventEmitter<boolean> = new EventEmitter()

  constructor() { 
    this.updateAnwser()
  }

  ngOnInit() {
  }

  public getAnwser(event: Event): void {
    this.anwser = (<HTMLInputElement>event.target).value
  }

  checkAnswser() {

    if (this.anwser == this.turnPhrase.phraseFr) {
      alert("The translation is correct!")
      if (this.turn < (this.phrases.length - 1)) {
        this.turn++  
      } else {
        this.finishGame.emit(true)
      }
      this.progress = this.progress + (100/this.phrases.length)
      this.updateAnwser()
    } else {
      this.try--
      if (this.try <= 0) {
        this.finishGame.emit(false)
      } else {
        alert("The translation is not correct. Please, try again!")
      }
    
      if (this.progress == 100) {
        this.progress = 0
      }
     
    }
  }

  public updateAnwser(): void {
    this.turnPhrase = this.phrases[this.turn]
    this.anwser = ""
  }
}