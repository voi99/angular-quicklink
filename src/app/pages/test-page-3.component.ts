import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-page-3',
  standalone: true,
  template: ` <p>test-page-3 works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPage3Component {}
