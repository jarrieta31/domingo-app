import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BehaviorSubject } from "rxjs";
import { Slider } from "src/app/shared/slider";

@Injectable({
  providedIn: "root",
})
export class SlidesService {
  slider: BehaviorSubject<Slider[]>;
  init_slider: Slider[] = [];
  allSlider: Slider[] = [];
  depto: string = null;
  save_depto: string[] = [];
  ckeckDist: boolean = false;


  constructor(
    private afs: AngularFirestore
  ) {
    this.slider = new BehaviorSubject<Slider[]>(this.init_slider);
  }

  getSliders() {
    this.depto = localStorage.getItem("deptoActivo");
    this.allSlider = [];

    if(this.save_depto.length > 0) {
    var isDepto: boolean = false;

      this.save_depto.forEach( dep => {
        if(dep == this.depto) isDepto = true;
      })
    }

    if (!isDepto && this.depto != null && !this.ckeckDist) {
      this.afs
        .collection("sliders")
        .ref.where("publicado", "==", true)
        .where("departamento", "==", this.depto)
        .get()
        .then((querySnapshot) => {
          const arrSlider: Slider[] = [];
          querySnapshot.forEach((item) => {
            const data: any = item.data();
            arrSlider.push({ id: item.id, ...data });
            this.init_slider.push({ id: item.id, ...data });
          });
          this.save_depto.push(this.depto);
          this.allSlider = JSON.parse(JSON.stringify(arrSlider));
          this.slider.next(this.allSlider);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => "Fin");
    } else if (isDepto && this.depto != null) {
      this.init_slider.forEach( dep => {
        if(dep.departamento == this.depto) this.allSlider.push(dep)
      })
      this.slider.next(this.allSlider);
    } else if(!this.ckeckDist) {

      this.init_slider = [];
      this.ckeckDist = true;

      this.afs
        .collection("sliders")
        .ref.where("publicado", "==", true)
        .get()
        .then((querySnapshot) => {
          const arrSlider: Slider[] = [];
          querySnapshot.forEach((item) => {
            const data: any = item.data();
            arrSlider.push({ id: item.id, ...data });
            this.init_slider.push({ id: item.id, ...data });
          });
          this.allSlider = JSON.parse(JSON.stringify(arrSlider));
          this.slider.next(this.allSlider);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => "Fin");
    } else this.slider.next(this.init_slider);
  }
}
