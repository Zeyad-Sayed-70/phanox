import { BACK_END_URL } from '../constant'

const storageName = 'uploads' // name of file where all images stored

export default function getImageUrl(filename) {
  return `${BACK_END_URL}/${storageName}/${filename}`
}