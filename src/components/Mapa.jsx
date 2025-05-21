import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 23.2186908,  // Mazatlán
  lng: -106.4137016,
};

export default function Mapa() {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} onClick={() => setSelected(center)} />
        {selected && (
          <InfoWindow position={selected} onCloseClick={() => setSelected(null)}>
            <div>
              <h2 className="text-lg font-bold">Casa de Medina Estrada </h2>
              <p>¡Aquí mero se lavan pitos con la boca!</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
