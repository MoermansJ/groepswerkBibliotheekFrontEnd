import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  //properties
  private dataServiceSubscription: Subscription = new Subscription();
  public showFooter: boolean = true;
  private hideFooterPages: string[] = [
    'admin-page',
    'add-book-page',
    'delete-book-page',
    'all-borrowed-books-page',
  ];

  //constructor
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  //custom methods
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        const currentRoute =
          this.activatedRoute.root.firstChild?.snapshot.url.join('/');

        if (currentRoute) {
          if (this.hideFooterPages.includes(currentRoute as string)) {
            this.showFooter = false;
          } else {
            this.showFooter = true;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.dataServiceSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }
}
