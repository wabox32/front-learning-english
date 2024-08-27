import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-class',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})


export class ClassComponent {

  classData: any;
  classId: string | null = null;

  constructor(
    private classService: ClassService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classId = params.get('id');
      this.classService.getClassData(this.classId).subscribe(data => {
        this.classData = data;
        console.log(this.classData);
      }, error => {
        console.error('Error fetching data', error);
      });
    });
  }
}
