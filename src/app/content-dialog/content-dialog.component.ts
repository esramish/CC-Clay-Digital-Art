import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.css']
})
export class ContentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContentDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {contentHtml: string}) { }

  ngOnInit(): void {
  }

}
