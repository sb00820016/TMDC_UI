import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRHubService implements OnInit{
data:any;
  private _hubConnection!: HubConnection;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.connect();
  }

  public startConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44316/coinPrice').build();

    this._hubConnection.start()
      .then(() => console.log('connection started'))
      .catch(error => console.log('Error while creating connection:' + error));
  }

  public addCoinPriceListener = () => {
    this._hubConnection.on('getCoinPrice', (response) => {
      debugger
      this.data = response;
      console.log(response);
      //this.convertDateToTimeStamp();
     
      
    })
  }

}
