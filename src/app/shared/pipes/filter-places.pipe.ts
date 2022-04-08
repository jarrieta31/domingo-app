import { Pipe, PipeTransform } from "@angular/core";
import { Place } from "../place";

@Pipe({
  name: "filterPlaces",
})
export class FilterPlacesPipe implements PipeTransform {
  transform(places: Place[], data: any): Place[] | any[] {
    let dist: string = localStorage.getItem("distanceActivo");
    let distFound: boolean = false;

    if (data.length === 0) {
      return places;
    }

    if (data.localidad !== null) data.localidad = data.localidad.toLowerCase();
    else data.localidad = "";

    if (data.tipo !== null) data.tipo = data.tipo.toLowerCase();
    else data.tipo = "";

    const pl = places.filter((item) => {
      return (
        item.localidad.toLowerCase().includes(data.localidad) &&
        item.tipo.toLowerCase().includes(data.tipo)
      );
    });

    const vacio: any[] = [
      {
        vacio: 1,
      },
    ];

    if (dist !== null) {
      if (pl.length > 0) {
        pl.forEach((places) => {
          if (places.distancia < parseInt(dist)) {
            distFound = true;
          }
        });
      }

      if (distFound === false) {
        return vacio;
      }
    }

    if (pl.length === 0) {
      return vacio;
    } else return pl;
  }
}
