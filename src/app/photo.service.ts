import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface CallResponse{
 urls:{
  regular:string;
 }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { }



  getPhotos() {
    return this.httpClient.get<CallResponse>("https://api.unsplash.com/photos/random",
      {
        headers: {
          Authorization: "Client-ID RZKfEUNezQeFXIU3n-TTQ6zeWo_Qaj_OcUI1i8e3JnU"
        }
      }
    )
  }

}


