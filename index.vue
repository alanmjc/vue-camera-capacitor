<template>
  <button class="btn" :disabled="enProgreso" @click="tomar_foto">
    <b-spinner v-if="enProgreso" small label="En progreso"></b-spinner>
    <slot v-else>Tomar fotos</slot>
  </button>
</template>

<script>
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import File from './File';
import Imagen from './Image';
import { Directory } from '@capacitor/filesystem';

export default {
  emits: ['update:objeto', 'actualizado'],
  props: {
    /**
     * cámara|galería
     */
    source: {
      type: String,
      default: 'cámara'
    },
    objeto: {
      type: Object,
      default: () => ({
        archivos: []
      })
    },
    crearThumbnail: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      enProgreso: false
    };
  },
  methods: {
    async tomar_foto() {
      this.enProgreso = true;
      try {
        const image = await Camera.getPhoto({
          quality: 100,
          resultType: CameraResultType.Uri,
          source: this.source === 'cámara' ? CameraSource.Camera : CameraSource.Photos
        });
        await this.emitir_imagen_si_se_tomo_o_selecciono_correctamente(image);
        this.enProgreso = false;
      } catch (error) {
        this.enProgreso = false;
      }
    },
    async emitir_imagen_si_se_tomo_o_selecciono_correctamente(file) {
      if (!file.hasOwnProperty('format')) {
        return;
      }

      const objeto = JSON.parse(JSON.stringify(this.objeto));
      file.thumbWebPath = null;
      file.thumbPath = null;

      if (this.platform !== 'web' && this.crearThumbnail === true) {
        const filename = File.getFileName(file.path);

        await Imagen.crearThumbnailYGuardar({
          directory: Directory.External,
          path: `Pictures/${filename}`,
          height: 150
        });

        file.thumbPath = `${File.getDir(file.path)}thumb-${filename}`;
        file.thumbWebPath = `${File.getDir(file.webPath)}thumb-${filename}`;
      }

      objeto.archivos.push(file);
      this.$emit('update:objeto', objeto);
      this.$emit('actualizado', file);
    }
  }
};
</script>
