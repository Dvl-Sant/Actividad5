import { useState, useRef } from 'react';
import { GoogleMap, LoadScript, DrawingManager } from '@react-google-maps/api';
import { Box, Container, Button, Typography, List, ListItem } from "@mui/material";

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 23.2314459,
  lng: -106.4265313
};

const libraries = ['drawing'];

const MapDrawing = () => {
  const [controlPosition, setControlPosition] = useState(null);
  const shapesRef = useRef([]);
  const [coords, setCoords] = useState([]);

  const handleMapLoad = () => {
    if (window.google) {
      setControlPosition(window.google.maps.ControlPosition.TOP_CENTER);
    }
  };

  const updateCoordinates = (label, pathArray) => {
    const newCoords = pathArray.map(coord => ({
      lat: coord.lat(),
      lng: coord.lng()
    }));
    setCoords(prev => [...prev, { type: label, coordinates: newCoords }]);
  };

  const handlePolygonComplete = (polygon) => {
    updateCoordinates('Polígono', polygon.getPath().getArray());
    shapesRef.current.push(polygon);
  };

  const handleRectangleComplete = (rectangle) => {
    const bounds = rectangle.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const rectangleCoords = [
      { lat: ne.lat(), lng: sw.lng() },
      { lat: ne.lat(), lng: ne.lng() },
      { lat: sw.lat(), lng: ne.lng() },
      { lat: sw.lat(), lng: sw.lng() }
    ];
    setCoords(prev => [...prev, { type: 'Rectángulo', coordinates: rectangleCoords }]);
    shapesRef.current.push(rectangle);
  };

  const handlePolylineComplete = (polyline) => {
    updateCoordinates('Polilínea', polyline.getPath().getArray());
    shapesRef.current.push(polyline);
  };

  const handleClearShapes = () => {
    shapesRef.current.forEach(shape => shape.setMap(null));
    shapesRef.current = [];
    setCoords([]); // Limpiar también las coordenadas mostradas
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Box>
        <h1>Mapa con Herramientas de Dibujo</h1>
        <Button variant="contained" color="error" onClick={handleClearShapes} sx={{ mb: 2 }}>
          Eliminar todas las formas
        </Button>

        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={handleMapLoad}
          >
            {controlPosition && (
              <DrawingManager
                options={{
                  drawingControl: true,
                  drawingControlOptions: {
                    position: controlPosition,
                    drawingModes: ['polygon', 'rectangle', 'polyline']
                  }
                }}
                onPolygonComplete={handlePolygonComplete}
                onRectangleComplete={handleRectangleComplete}
                onPolylineComplete={handlePolylineComplete}
              />
            )}
          </GoogleMap>
        </LoadScript>

        {/* Coordenadas mostradas */}
        {coords.length > 0 && (
          <Box mt={4} textAlign="left">
            <Typography variant="h6">Coordenadas Dibujadas:</Typography>
            {coords.map((item, index) => (
              <Box key={index} mt={2}>
                <Typography variant="subtitle1"><strong>{item.type}</strong></Typography>
                <List dense>
                  {item.coordinates.map((coord, i) => (
                    <ListItem key={i}>
                      Lat: {coord.lat.toFixed(6)}, Lng: {coord.lng.toFixed(6)}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default MapDrawing;
