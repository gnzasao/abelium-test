import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) {}

  
  goBack(): void {
    this.location.back();
  }

  


}
