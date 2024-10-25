import { usePictureStore } from '@/stores'

export default defineNuxtPlugin({
  name: 'set-image-data',
  async setup(nuxtApp) {
    const pictureStore = usePictureStore()
    nuxtApp.hook('app:created', async () => {
      await pictureStore.setImageData()
    })
  }
})