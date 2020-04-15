import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, AfterViewInit {

  @ViewChild('loading', { static: true }) ldng: ElementRef;
  @ViewChild('navbar', {static: true}) navBar: ElementRef;


  public loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.router.url !== '/') {
      this.navBar.nativeElement.classList.add('navBlue');
    } else {
      this.navBar.nativeElement.classList.remove('navBlue');
    }
  }

  ngAfterViewInit() {
    this.router.events.forEach((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.ldng.nativeElement.classList.remove('hide');
        return;
      }
      if (event instanceof NavigationEnd) {
        this.loading = false;
        this.ldng.nativeElement.classList.add('hide');
        if (event.url !== '/') {
          this.navBar.nativeElement.classList.add('navBlue');
        } else {
          this.navBar.nativeElement.classList.remove('navBlue');
        }
        return;
      }
      if (event instanceof NavigationCancel) {
        this.loading = false;
        this.ldng.nativeElement.classList.add('hide');
        return;
      }
      if (event instanceof NavigationError) {
        this.loading = false;
        this.ldng.nativeElement.classList.add('hide');
        return;
      }
    });
  }
}
