import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  file: File = null as any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) {
    this.file = e.target.files[0];

    console.log(this.file);

    
  }
}
