import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BehaviorSubject } from "rxjs";
import { Artistas } from "src/app/shared/artistas";
import { DatabaseService } from "../database.service";

@Injectable({
  providedIn: "root",
})
export class ArtistService {
  artist: BehaviorSubject<Artistas[]>;
  init_artist: Artistas[] = [];
  save_depto: String[] = [];
  depto: String;
  allArtist: Artistas[] = [];

  constructor(private afs: AngularFirestore, private db: DatabaseService) {
    this.artist = new BehaviorSubject<Artistas[]>(this.init_artist);
  }

  getArtist() {
    this.depto = this.db.selectionDepto;
    this.artist = new BehaviorSubject<Artistas[]>(this.init_artist);
    this.allArtist = [];

    let searchDepto: boolean = false;
    this.save_depto.forEach((search) => {
      if (search == this.depto) {
        searchDepto = true;
      }
    });

    if (this.depto != null && !searchDepto) {
      this.afs
        .collection("artistas")
        .ref.where("departamento", "==", this.depto)
        .where("publicado", "==", true)
        .get()
        .then((querySnapshot) => {
          const arrArtist: Artistas[] = [];
          querySnapshot.forEach((item) => {
            const data: any = item.data();
            arrArtist.push({ id: item.id, ...data });
            this.init_artist.push({ id: item.id, ...data });
          });

          this.allArtist = arrArtist;
          this.artist.next(this.allArtist);
          this.save_depto.push(this.depto);
          searchDepto = false;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => "Fin");
    } else if (searchDepto) {
      this.init_artist.forEach((res) => {
        if (res.departamento == this.depto) {
          this.allArtist.push(res);
        }
      });
      this.artist.next(this.allArtist);
    }
  }
}
