import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
  from,
} from 'rxjs';
import { delayWhen, filter, map, take, timeout } from 'rxjs/operators';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [SlickCarouselModule],
})
export class AboutComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({
      name: 'title',
      content: 'Angular SSR (not really SSR yet), about',
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Is not really SSR yet but hopefully Lorem ipsum sdgsdgdsalkjh sfgjgdgfghfhsd',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: 'https://i.ytimg.com/vi/2tHozZWMm18/hqdefault.jpg',
    });

    this.meta.updateTag({
      name: 'og:image:alt',
      content: 'https://i.ytimg.com/vi/2tHozZWMm18/hqdefault.jpg',
    });

    this.meta.updateTag({
      name: 'og:url',
      content: 'https://ogurl123.com',
    });
  }

  products = [
    {
      title: 'Postpaid',
      description: 'The most rewarding plans in town for you and your family.',
      imgSrc:
        'https://www.celcom.com.my/sites/default/files/inline-images/story_telling_auto_reload.png',
    },
    {
      title: 'Prepaid',
      description: 'The most rewarding plans in town for you and your family.',
      imgSrc:
        'https://http2.mlstatic.com/D_NQ_NP_780144-MLA72668121499_112023-O.webp',
    },
    {
      title: 'Roaming',
      description: 'The most rewarding plans in town for you and your family.',
      imgSrc:
        'https://shop.celcom.com.my/media/catalog/product/h/t/httpsshopapi.celcom.com.mymediawysiwyg02.position_2_sgmy_pdp-images_11_a_iphone_11_p_2_transparent.png',
    },
    {
      title: 'Devices',
      description: 'The most rewarding plans in town for you and your family.',
      imgSrc:
        'https://shop.celcom.com.my/media/catalog/product/h/t/httpsshopapi.celcom.com.mymediawysiwyg02.position_2_sgmy_pdp-images_11_a_iphone_11_p_2_transparent.png',
    },
    {
      title: 'Mega',
      description: 'The most rewarding plans in town for you and your family.',
      imgSrc:
        'https://www.celcom.com.my/sites/default/files/inline-images/Storytelling-Banner-2_MAX%20Savings_1.png',
    },
    {
      title: 'Network',
      description: 'The most rewarding plans in town for you and your family.',
      imgSrc:
        'https://shop.celcom.com.my/media/catalog/product/h/t/httpsshopapi.celcom.com.mymediawysiwyg02.position_2_sgmy_pdp-images_11_a_iphone_11_p_2_transparent.png',
    },
  ];

  slideConfig = {
    variableWidth: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    arrows: false,
    draggable: true,
  };
}
