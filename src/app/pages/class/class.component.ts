import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-class',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})


export class ClassComponent {

  classData: any;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.getClassData().subscribe(data => {
      this.classData = data;
      console.log(this.classData);
    }, error => {
      console.error('Error fetching data', error);
    });
  }
}
