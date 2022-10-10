import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  darkMode: string;
  dyslexicMode: string;
  modoOscuro: string = localStorage.getItem('modoOscuro');
  dyslexic: string = localStorage.getItem('dyslexic');
  labelCheck: boolean = false;
  dyslexicCheck: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private gaService: GoogleAnalyticsService
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  changeTheme() {
    this.darkMode = localStorage.getItem('modoOscuro');

    if (this.darkMode == 'true') {
      this.gaService.googleAnalyticsModos('modo_oscuro', 'desactivar_oscuro');
      localStorage.removeItem('modoOscuro');
      document.body.classList.toggle('dark');
      this.modoOscuro = localStorage.getItem('modoOscuro');
      this.labelCheck = false;
    } else {
      this.gaService.googleAnalyticsModos('modo_oscuro', 'activar_oscuro');
      localStorage.setItem('modoOscuro', JSON.stringify(true));
      document.body.classList.toggle('dark');
      this.labelCheck = true;
    }
  }

  dyslexicFont() {
    this.dyslexicMode = localStorage.getItem('dyslexic');

    if (this.dyslexicMode == 'true') {
      this.gaService.googleAnalyticsModos('modo_dislexia', 'desactivar_dislexia');
      localStorage.removeItem('dyslexic');
      document.body.classList.toggle('dyslexic');
      this.dyslexic = localStorage.getItem('dyslexic');
      this.dyslexicCheck = false;
    } else {
      this.gaService.googleAnalyticsModos('modo_dislexia', 'activar_dislexia');
      localStorage.setItem('dyslexic', JSON.stringify(true));
      document.body.classList.toggle('dyslexic');
      this.dyslexicCheck = true;
      this;
    }
  }

  sleep() {
    this.router.navigate(['tabs/sleep']);
    this.menuCtrl.toggle();
  }

  artist() {
    this.router.navigate(['tabs/artist']);
    this.menuCtrl.toggle();
  }

  info() {
    this.router.navigate(['tabs/info']);
    this.menuCtrl.toggle();
  }
}
