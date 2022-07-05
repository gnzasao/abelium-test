import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }

  ngOnInit(): void {
    this.getPlayers()
  }


}
