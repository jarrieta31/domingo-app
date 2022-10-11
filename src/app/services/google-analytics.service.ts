import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(private ga: AngularFireAnalytics) {}

  /**métodos compartidos */
  googleAnalyticsPantallas(pantalla: string, nombre?: string) {
    this.ga.logEvent('vistas_de_pantalla', { pantalla });

    if (
      pantalla === 'detalle_de_lugar' ||
      pantalla === 'detalle_de_evento' ||
      pantalla === 'descripcion_lugar'
    ) {
      this.ga.logEvent(pantalla + '_visitas', { nombre });
    }
  }

  googleAnalyticsCompartir(tipo: string, nombre: string, id: string) {
    this.ga.logEvent('compartir', { tipo, nombre, id });
  }

  googleAnalyticsRedesSociales(pantalla: string, tipo: string) {
    this.ga.logEvent('vistas_redes_sociales', { pantalla, tipo });
  }

  googleAnalyticsVisitaEventosLugares(
    tipo: string,
    nombre: string,
    id: string
  ) {
    this.ga.logEvent('visitas_eventos_lugares', { tipo, nombre, id });
  }

  googleAnalyticsReproducirVideo(tipo: string) {
    this.ga.logEvent('reproducir_video', { tipo });
  }

  /**métodos lugares */
  googleAnalyticsAccesibilidad() {
    this.ga.logEvent('accesibilidad');
  }

  googleAnalyticsPuntosDeInteres() {
    this.ga.logEvent('puntos_de_interes');
  }

  googleAnalyticsAudioStart(nombre: string) {
    this.ga.logEvent('audio_lugares_start', { nombre });
  }

  googleAnalyticsAudioStop(nombre: string) {
    this.ga.logEvent('audio_lugares_stop', { nombre });
  }

  /**métodos eventos */
  googleAnalyticsMapa(nombre: string) {
    this.ga.logEvent('ubicacion_evento', { nombre });
  }

  /**métodos interfaz */
  googleAnalyticsModos(tipo: string, toggle: string) {
    this.ga.logEvent('modos', { tipo, toggle });
  }

  /**métodos filtros */
  googleAnalyticsFiltroHome(tipo: string, seleccion: string) {
    this.ga.logEvent('filtro_home', { tipo, seleccion });
  }
}
