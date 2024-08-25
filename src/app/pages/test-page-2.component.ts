import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-page-2',
  standalone: true,
  template: ` <p>test-page-2 works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestPage2Component {}
