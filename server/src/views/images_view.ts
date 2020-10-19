import Image from '../models/Image'

export interface ImageProps {
  id: number
  url: string
}

export default {
  render(image: Image): ImageProps {
    return {
      id: image.id,
      url: `http://192.168.0.102:3333/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]): ImageProps[] {
    return images.map(image => this.render(image))
  }
}
