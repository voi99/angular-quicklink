import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  template: ` <p>home-page works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {}
