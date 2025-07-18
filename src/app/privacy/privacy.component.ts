import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  standalone: true,
})
export default class PrivacyComponent {
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }
}
