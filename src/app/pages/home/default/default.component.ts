import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public dummy = [1,1,1,1,1,1];

  @ViewChild('vid', { static: true }) video: ElementRef;

  public playing = false;

  public info = [
    {
      icon: '1.png',
      name: 'Online Assessment',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
      url: '/'
    },
    {
      icon: '2.png',
      name: 'Result and Analysis',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
      url: '/'
    },
    {
      icon: '3.png',
      name: 'Learn by Practice',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
      url: '/'
    },
  ];

  public more = [
    {
      name: 'Easy to Learn and Use',
      img: 'laptop.png',
      text: ''
    },
    {
      name: 'Highly Interactive Interface',
      img: 'exam.png',
      text: ''
    },
    {
      name: 'Advanced Reporting System',
      img: 'ebook.png',
      text: ''
    },
    {
      name: 'Smart Subscriptions',
      img: 'student2.png',
      text: ''
    },
    {
      name: 'Smart Assistant',
      img: 'school.png',
      text: ''
    },
    {
      name: 'Active Assessment',
      img: 'idea.png',
      text: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public play() {

    if (this.playing) {
      this.playing = false;
      this.video.nativeElement.pause();
    } else {
      this.playing = true;
      this.video.nativeElement.play();
    }
  }

}
