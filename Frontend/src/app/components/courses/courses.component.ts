import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { Course } from '@app/core/models/course.model';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  animations: [
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('{{ delay }}ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ], { params: { delay: 0 } })
    ])
  ],
})
export class CoursesComponent {
  @ViewChild('slickModal') slickModal?: SlickCarouselComponent;

  ngAfterViewInit(){
    setTimeout(() => {
      this.slickModal?.slickGoTo(0);
    }, 500);
  }

  @Input() certificates: Course[] = [
    {
      title: 'Advanced React Development',
      issuer: 'Frontend Masters',
      date: '2022',
      imageUrl: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
    },
    {
      title: 'TypeScript Professional',
      issuer: 'Udemy',
      date: '2021',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    },
    {
      title: 'Node.js Microservices',
      issuer: 'Coursera',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

}
