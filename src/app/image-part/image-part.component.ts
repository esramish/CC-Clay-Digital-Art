import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';

@Component({
  selector: 'app-image-part',
  templateUrl: './image-part.component.html',
  styleUrls: ['./image-part.component.css']
})
export class ImagePartComponent implements OnInit {

  @Input() img_index: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ContentDialogComponent, {
      data: {index: this.img_index}
    });
  }

}
