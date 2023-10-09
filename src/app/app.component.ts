import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'battle';
  public navLinks!: any[];
  public activeLinkIndex = 0;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'HUMAN',
        link: '/human',
        index: 0,
      },
      {
        label: 'STARSHIPS',
        link: '/starships',
        index: 1,
      },
    ];
  }
  public ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
