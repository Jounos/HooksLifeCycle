import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from './title/title';

@Component({
  selector: 'app-root',
  imports: [Title],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HooksLifeCycle');
}
