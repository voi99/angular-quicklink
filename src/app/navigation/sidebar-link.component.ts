import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuicklinkDirective } from 'ngx-quicklink';

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [MatListItem, RouterLink, RouterLinkActive, QuicklinkDirective],
  template: `
    <a
      mat-list-item
      routerLinkActive
      #link="routerLinkActive"
      [activated]="link.isActive"
      [routerLink]="[route()]"
      (click)="onClick()"
    >
      {{ title() }}
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLinkComponent {
  private readonly sidenav = inject(MatSidenav);

  title = input.required<string>();
  route = input.required<string>();

  onClick() {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }
}
