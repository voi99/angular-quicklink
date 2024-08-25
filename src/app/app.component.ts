import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent],
  template: ` <app-navigation /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
