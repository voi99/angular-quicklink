import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-page-3',
  standalone: true,
  imports: [],
  template: ` <p>test-page-3 works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPage3Component {}
