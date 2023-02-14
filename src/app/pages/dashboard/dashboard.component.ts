import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isLoading : boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>
    {
      this.isLoading = false;
    }, 2000);
  }

}
