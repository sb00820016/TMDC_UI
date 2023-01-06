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
  constructor(public signalrservice : SignalRHubService,private http: HttpClient) { }
  data:any;
  ngOnInit(): void {
    debugger;
    this.signalrservice.startConnection();
   // this.signalrservice.addCoinPriceListener();
   // this.startHttpRequest();
  }

  private _startHttpRequest = () => {
    this.http.get('https://localhost:44395/api/TMDC')
      .subscribe(res => {
        console.log(res);
      });
  };  public get startHttpRequest() {
    return this._startHttpRequest;
  }
  public set startHttpRequest(value) {
    this._startHttpRequest = value;
  }

}