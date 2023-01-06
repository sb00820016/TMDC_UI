import { Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {  HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRHubService implements OnInit{
data:any;
  private _hubConnection!: HubConnection;
  constructor() { }

  ngOnInit(): void {
   // this.addCoinPriceListener();
  }

  public startConnection() {
    debugger;
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44395/TMDCConnect',{
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).build();

    this._hubConnection.start()
      .then(() => console.log('connection started'))
      .catch(error => console.log('Error while creating connection:' + error));
  }

  public addCoinPriceListener = () => {
    this._hubConnection.on('getCoinPrice', (response) => {
      try
      {
      debugger
      this.data = response;
      console.log("Response is" + response.responseObject);
      //this.convertDateToTimeStamp();
      }
      catch
      {
        console.log("Error is ");
         console.error();
        
      }
      
    })
  }

}
