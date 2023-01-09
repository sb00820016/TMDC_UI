import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { SignalRHubService } from '../signal-r-hub.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
  private _hubConnection!: HubConnection;
  data:any;
  constructor(public signalrservice : SignalRHubService,private http: HttpClient) { }
 

  ngOnInit(): void {
    debugger;
    this.signalrservice.startConnection();
   // this.signalrservice.addCoinPriceListener();
    //this.startHttpRequest();
  }


}