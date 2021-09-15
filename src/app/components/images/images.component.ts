import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  file: File[] = null as any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onChangeSingle(e: any) {
    this.file = e.target.files[0];
    
    console.log(this.file);

    const fileForm = new FormData();

    fileForm.append('file', this.file as any);

    this.http.post('http://localhost:3000/images/single', fileForm).subscribe(res => {
      console.log('test1', res);
    }, err => {
      console.log('test2', err);
    })
  }

  onChangeMultiple(e: any) {
    console.log(e.target);
  }
}
