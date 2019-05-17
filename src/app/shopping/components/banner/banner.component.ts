import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images: any[];
  bannerContent: { title: string, subtitle: string, imageUrl: string, }[];
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
    // this.images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

    this.bannerContent = [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo dui ',
        subtitle: 'Nam leo dui, convallis gravida posuere ac, tempus sed neque',
// tslint:disable-next-line: max-line-length
        imageUrl: `https://images.unsplash.com/photo-1550767552-374fd1babc81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
      },
      {
        title: '100% Quality Assurance',
        subtitle: 'We provide you with the best groceries',
// tslint:disable-next-line: max-line-length
        imageUrl: `https://images.unsplash.com/photo-1529411081224-84ac0d0bf6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
      }
    ]
  }

}
