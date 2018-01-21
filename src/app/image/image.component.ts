import { Component, OnInit } from '@angular/core';
import { Image } from '../Model/image';
import { ImageDataService } from '../Providers/image-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
image:Image[]=[];
image1:Image[]=[];
path:string='';
  constructor(public _data:ImageDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllImage().subscribe((data: Image[]) => {
      this.image = data;
      this.image1 = data;
      console.log(data);
    },
      function (err) {
        alert(err);
      },
      function () {
        console.log('done');
      }
    );
  }

  onKeyup(item) {
    if (item != '') {
      this.image = this.image.filter((x) => x.Path.startsWith(item));
    }
    else {
      this.image = this.image1;
    }
  }
  onDelete(item) {
    this._data.deleteImage(item.Image_id).subscribe(() => {

      this.image.splice(this.image.indexOf(item), 1);
    });
  }
  onView(id){
    this._router.navigate(['view_image',id]);

  }


}
