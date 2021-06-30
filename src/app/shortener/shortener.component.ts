import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {
  url = new FormControl('')
  shortened_url = ''
  constructor(private http: HttpClient) { }

  shorten(): void {
    console.log(this.url.value);
    let v = ''
    this.http.post('http://localhost:8080/shorten', {url:this.url.value}, {headers: {Authorization: "basic dXNlcjpiZDg5YjZhOS03OTc0LTRhMDctOTBmYy1mMzE0ZDQ0NzczNWY="}}).subscribe(
      (x) => {
        const map = new Map(Object.entries(x));
        this.shortened_url = map.get("url");
      }
    )
  }

  ngOnInit(): void {
  }

}
