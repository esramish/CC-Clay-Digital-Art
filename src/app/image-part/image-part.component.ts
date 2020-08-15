import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-part',
  templateUrl: './image-part.component.html',
  styleUrls: ['./image-part.component.css']
})
export class ImagePartComponent implements OnInit {

  @Input() img_index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
