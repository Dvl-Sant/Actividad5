import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '90vw',
  height: '500px'
};

const origen = { lat: 19.4326, lng: -99.1332 };    // Ciudad de México
const destino = { lat: 19.5670, lng: -99.0437 };   // Ecatepec

const Ruta = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCcktq2JkFBOsQkOYrr1qevrKBcWtALfM8',
    libraries: ['places']
  });

  const [directions, setDirections] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Directions request failed:', response);
      }
    }
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={10}
        onLoad={() => setMapLoaded(true)}
      >
        <Marker position={origen} label="Origen" />
        <Marker position={destino} label="Destino" />
        {/* DirectionsService solo se monta cuando el mapa está cargado y aún no hay direcciones */}
        {mapLoaded && !directions && (
          <DirectionsService
            options={{
              destination: destino,
              origin: origen,
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
        )}
        {/* DirectionsRenderer solo si hay direcciones */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  ) : (
    <div>Cargando mapa...</div>
  );
};

export default Ruta;
