import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template:`
    <h3>Department List</h3>
    <ul>
      <li (click)="onSelect(department)" [class.selected]="isSlected(department)" *ngFor="let department of departments" style="cursor: pointer;">
        <span>{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"Ruby"},
    {"id":4,"name":"BootStrap"}
  ];
  constructor(private router:Router,private route:ActivatedRoute) { }
  public selectedId:any;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id
    });
  }
  onSelect(department:any){
    // this.router.navigate(["/department",department.id]);
    this.router.navigate([department.id],{relativeTo:this.route});
  }
  isSlected(department:any){
    return department.id === this.selectedId;
  }

}
