import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err) 
    )
  }

}
