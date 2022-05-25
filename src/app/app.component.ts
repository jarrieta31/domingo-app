import { Component, OnInit, OnDestroy } from "@angular/core";
import { AlertController, Platform } from "@ionic/angular";
import { StatusBar, Style } from '@capacitor/status-bar';
import { timer } from "rxjs";
import { SplashScreen } from '@capacitor/splash-screen';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';


@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  showSplash = true;
  modo: boolean;
  dyslexic: boolean;

  gps: any = null;

  constructor(
    private platform: Platform,
    public alertController: AlertController,
    private screenOrientation: ScreenOrientation,
  ) {
    this.initializeApp();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  async initializeApp() {
    this.checkReady();
  }

  checkReady = async () => {
    try {
      console.log("checkReady");
      await this.platform.ready();
      //StatusBar.styleDefault();
      SplashScreen.hide();
      timer(3000).subscribe(() => (this.showSplash = false));
      this.checkDarkMode();
      this.modeDyslexic();
    } catch (error) {
      console.log("Error de Platform Ready: ", error);
    }
  };

  checkDarkMode() {
    if (localStorage.getItem("modoOscuro") == "true") {
      try {
        document.body.classList.toggle("dark");
      } catch (error) {
        console.log(error);
      }
    }
  }

  modeDyslexic() {
    if (localStorage.getItem("dyslexic") == "true") {
      try {
        document.body.classList.toggle("dyslexic");
      } catch (error) {
        console.log(error);
      }
    }
  }
}
