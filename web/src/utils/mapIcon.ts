import Leaflet from 'leaflet'
import mapMarkerImg from '../assets/images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconAnchor: [29, 68],
  iconSize: [58, 68],
  iconUrl: mapMarkerImg,
  popupAnchor: [0, -60]
})

export default mapIcon
