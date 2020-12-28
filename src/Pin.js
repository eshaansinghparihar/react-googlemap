import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './App.css';

const Pin = ({lat,lng}) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <h1 className="pin-text">This is {lat.toFixed(2)} , {lng.toFixed(2)}</h1>
    </div>
  )

export default Pin;