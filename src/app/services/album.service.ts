import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/album';
  constructor(private http:HttpClient) { }
  
  getAlbum(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
  addAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  deleteAlbum(albumId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${albumId}`);
  }
}
