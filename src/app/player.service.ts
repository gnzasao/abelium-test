import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './players';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    return players;
  }

  getPlayer(id: number): Observable<Player> {
    // For now, assume that a player with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const player = PLAYERS.find(h => h.id === id)!;
    return of(player);
  }

  constructor() { }
}
