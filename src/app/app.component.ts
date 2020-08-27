import { Component } from '@angular/core';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-facebook';

  postTab: any[];

  constructor(private dataService: DataService){

  }

  ngOnInit(){
    this.postTab = this.dataService.postAj;
  }


}

