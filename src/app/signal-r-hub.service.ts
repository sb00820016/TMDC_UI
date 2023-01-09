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
      this._hubConnection.serverTimeoutInMilliseconds = 60000;
      this._hubConnection.start().then(()=>{
         debugger;
         console.log("connection started");
        // debugger;
        // setInterval(()=>{
        //   this.addCoinPriceListener();
        // },1000)
        this._hubConnection.on("ReceiveMessage",function(message) {
          debugger;
          console.log(message);
          });
      })
      .catch(error => console.log('Error while creating connection:' + error));
  }

  public addCoinPriceListener = () => {
    debugger;
    this._hubConnection.invoke("get").then(data=>{
      console.log(data);
    }).catch(err=>console.error(err));
  }

}
