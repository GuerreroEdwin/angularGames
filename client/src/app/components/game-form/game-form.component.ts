import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from 'src/app/services/games.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };

  edit: boolean = false;

  constructor(private gameService: GamesService,
              private router: Router,
              private activedRaute: ActivatedRoute) { }


  ngOnInit(): void {
   const params = this.activedRaute.snapshot.params;
   if(params.id) {
    this.gameService.getGame(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.game = res;
          this.edit = true;
        },
        err => console.log(err)
      )
   }
  }
 saveNewGame() {
    delete this.game.create_at;
    delete this.game.id; 
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);

         }, 
         err => console.log(err)
    )
  } 

  updateGame(){
    delete this.game.create_at;
    this.gameService.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }
}
