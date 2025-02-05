import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  @Input() sidebarActive = false;
  @Output() toggleSidebar = new EventEmitter();
}
