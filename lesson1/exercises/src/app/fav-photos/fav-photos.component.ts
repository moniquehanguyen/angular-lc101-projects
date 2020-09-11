import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://chuckanddons.com/media/wysiwyg/kitten_blog.jpg';
  image3 = 'https://i2.wp.com/news.minneapolismn.gov/wp-content/uploads/2018/08/KittenFluffs4.jpg';

  constructor() { }

  ngOnInit() {
  }

}