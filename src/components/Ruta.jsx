import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '90vw',
  height: '500px'
};

const origen = { lat: 23.2314, lng: -106.4265 };    // FIMAZ     23.231434969223766, -106.42658708302817
const destino = { lat: 23.1984, lng: -106.4230 };   // Machado   23.198416022864045, -106.4230164397049

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