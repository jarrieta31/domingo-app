import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ArtistService } from "src/app/services/database/artist.service";
import { Artistas } from "src/app/shared/artistas";
import { LoadingController, ModalController } from "@ionic/angular";
import { SlidesService } from "src/app/services/database/slides.service";
import { Slider } from "src/app/shared/slider";
import { VideoPage } from "../video/video.page";
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

import { DatabaseService } from "src/app/services/database.service";

@Component({
    selector: 'app-artist',
    templateUrl: './artist.page.html',
    styleUrls: ['./artist.page.scss'],
})
export class ArtistPage {

    constructor(
        private fb: FormBuilder,
        private artistSvc: ArtistService,
        private loadingCtrl: LoadingController,
        private sliderSvc: SlidesService,
        private modalCtrl: ModalController,
        private browser: InAppBrowser,
        private databaseSvc: DatabaseService
    ) { }

    /**se utiliza para eliminar todas las subscripciones al salir de la pantalla */
    private unsubscribe$: Subject<void>;

    /**guarda los lugares activos en la subscription del servicio */
    artists: Artistas[] = [];

    /**
     * Slide
     */
    slideOpts = {
        initialSlide: 0,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
    };

    locationActive: any[] = [];

    loading: any;

    /**captura los datos del formulario de filtros */
    dataForm: any = "";
    /**se guardan los sliders de la pantalla artistas */
    sliderArtist: Slider[] = [];
    /**control la apertura de filtros */
    isFilterLocation: boolean = false;
    isFilterType: boolean = false;
    /**guardan filtos seleccionados */
    optionLocation: String = null;
    optionType: String = null;
    /**departamente seleccionado actualmente */
    currentDepto: String = this.databaseSvc.selectionDepto;
    /**filtro seleccionado, distancia o departamento */
    dist: number = null;
    dep: String = null;
    /**mensaje para mostrar en pantalla si no hay lugares para mostrar */
    msgEmptyPlace: String = null;

    filterForm: FormGroup = this.fb.group({
        localidad: ["", Validators.required],
        categoria: ["", Validators.required],
    });

    filterArtist() {
        this.dataForm = this.filterForm.value;

        if (this.isFilterLocation) this.isFilterLocation = false;
        if (this.isFilterType) this.isFilterType = false;

        this.optionLocation = this.dataForm.localidad;
        this.optionType = this.dataForm.categoria;

        if (this.dataForm.localidad === "") this.optionLocation = "localidad";
        if (this.dataForm.categoria === "") this.optionType = "tipo";
    }

    async show(message: string) {
        this.loading = await this.loadingCtrl.create({
            message,
            spinner: "bubbles",
        });

        this.loading.present().then(() => {
            this.loading.dismiss();
        });
    }

    changeFilterLocation() {
        this.isFilterLocation = !this.isFilterLocation;
        if (this.isFilterType) this.isFilterType = false;
    }

    changeFilterType() {
        this.isFilterType = !this.isFilterType;
        if (this.isFilterLocation) this.isFilterLocation = false;
    }

    get lista_localidad_artis() {
        const artisList = this.artists;
        let artistlocalidadlist: String[] = [];
        artisList.forEach((ar) => {
            if (artistlocalidadlist.indexOf(ar.localidad) == -1) {
                artistlocalidadlist.push(ar.localidad);
            }
        });
        return artistlocalidadlist;
    }

    get lista_tipo_artis() {
        const artisList = this.artists;
        let artisttipolist: String[] = [];
        artisList.forEach((ar) => {
            if (artisttipolist.indexOf(ar.categoria) == -1) {
                artisttipolist.push(ar.categoria);
            }
        });
        return artisttipolist;
    }

    /**retorna true si se selecciono Distancia como filtro principal */
    get selectdistancia() {
        return localStorage.getItem("distanceActivo") ? true : false;
    }

    /**
     * Abre modal para reproducir video
     * @param url - URL del video que se va a ejecutar
     */
    async verVideo(url: string) {
        console.log(url);
        const video = await this.modalCtrl.create({
            component: VideoPage,
            cssClass: "modal-video",
            backdropDismiss: false,
            showBackdrop: true,
            componentProps: {
                url: url,
            },
        });

        await video.present();
    }

    openInstagram(url: string) {
        this.browser.create(url, "_system");
    }

    openSpotify(url: string) {
        this.browser.create(url, "_system");
    }

    ionViewWillEnter() {
        if (
            localStorage.getItem("deptoActivo") != undefined &&
            localStorage.getItem("deptoActivo") != null
        ) {
            this.dist = null;
            this.dep = localStorage.getItem("deptoActivo");
            this.msgEmptyPlace =
                "No hay lugares para mostrar en el departamento de " + this.dep;
        } else if (
            localStorage.getItem("distanceActivo") != undefined &&
            localStorage.getItem("distanceActivo") != null
        ) {
            this.dep = null;
            this.dist = parseInt(localStorage.getItem("distanceActivo"));
            this.msgEmptyPlace =
                "No hay lugares para mostrar en el rango de " + this.dist + " km";
        }

        if (localStorage.getItem("deptoActivo") != this.currentDepto) {
            this.currentDepto = localStorage.getItem("deptoActivo");
            this.filterForm.reset();
            this.dataForm = "";
            this.optionLocation = "localidad";
            this.optionType = "tipo";
        }

        this.unsubscribe$ = new Subject<void>();

        this.sliderSvc.getSliders();
        this.sliderSvc.slider
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res) => {
                res.forEach((item) => {
                    if (item.pantalla == "artistas") this.sliderArtist.push(item);
                });
            });

        this.artistSvc.getArtist();
        this.artistSvc.artist
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res) => {
                this.artists = res;
            });
        this.show("Cargando lugares...");
    }

    /**se ejecuta cada vez que se sale de la tab */
    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
