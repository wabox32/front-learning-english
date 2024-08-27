import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {
  
  levelsData: any;

  constructor(
    private levelService: LevelService,
   
  ) { }


  ngOnInit(): void {
    this.levelService.getLevelData().subscribe(data => {
      this.levelsData = data;
      console.log(this.levelsData);
    }, error => {
      console.error('Error fetching data', error);
    });
  }

}
