import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(private ga: AngularFireAnalytics) {}

  /**métodos compartidos */
  googleAnalyticsPantallas(pantalla_visitada: string, nombre?: string) {
    this.ga.logEvent('vistas_de_pantalla', { pantalla_visitada });

    if (pantalla_visitada === 'detalle_de_lugar') {
      let nombre_lugar_visitado = nombre;
      this.ga.logEvent(pantalla_visitada + '_visitas', {
        nombre_lugar_visitado,
      });
    } else if (pantalla_visitada === 'detalle_de_evento') {
      let nombre_evento_visitado = nombre;
      this.ga.logEvent(pantalla_visitada + '_visitas', {
        nombre_evento_visitado,
      });
    } else if (pantalla_visitada === 'descripcion_lugar') {
      let nombre_descripcion_lugar_visitada = nombre;
      this.ga.logEvent(pantalla_visitada + '_visitas', {
        nombre_descripcion_lugar_visitada,
      });
    }
  }

  googleAnalyticsCompartir(tipo_compartir: string, nombre_compartir: string) {
    this.ga.logEvent('compartir', { tipo_compartir, nombre_compartir });
  }

  googleAnalyticsRedesSociales(pantalla_red_social: string, tipo_red_social: string) {
    this.ga.logEvent('vistas_redes_sociales', { pantalla_red_social, tipo_red_social });
  }

  googleAnalyticsReproducirVideo(tipo_video: string, nombre_video: string) {
    this.ga.logEvent('reproducir_video', { tipo_video, nombre_video });
  }

  /**métodos lugares */
  googleAnalyticsAccesibilidad() {
    this.ga.logEvent('accesibilidad');
  }

  googleAnalyticsPuntosDeInteres() {
    this.ga.logEvent('puntos_de_interes');
  }

  googleAnalyticsAudioStart(nombre_audio_start: string) {
    this.ga.logEvent('audio_lugares_start', { nombre_audio_start });
  }

  googleAnalyticsAudioStop(nombre_audio_stop: string) {
    this.ga.logEvent('audio_lugares_stop', { nombre_audio_stop });
  }

  /**métodos eventos */
  googleAnalyticsMapa(nombre_mapa_evento: string) {
    this.ga.logEvent('ubicacion_evento', { nombre_mapa_evento });
  }

  /**métodos interfaz */
  googleAnalyticsModos(tipo_modo: string, toggle: string) {
    this.ga.logEvent('modos', { tipo_modo, toggle });
  }

  /**métodos filtros */
  googleAnalyticsFiltroHome(tipo_filtro_home: string, seleccion_home: string) {
    this.ga.logEvent('filtro_home', { tipo_filtro_home, seleccion_home });
  }
}
