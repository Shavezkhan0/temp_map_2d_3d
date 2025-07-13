// components/Map.js

import { MapContainer, TileLayer, useMap, ZoomControl, Marker, Popup } from 'react-leaflet'; // 1. Import Marker and Popup
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from 'react'; // 2. Import useState
import L from 'leaflet';
import 'leaflet.heat';
import { temperatureData } from '../app/temperatureData';

function FlyToPosition({ position }) {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.flyTo(position, 10);
        }
    }, [position]);
    return null;
}

const HeatmapLayer = () => { /* ... (no changes here) ... */ };

export default function Map({ positionToGo }) {
    const initialPosition = [28.6139, 77.2090];

    // 3. Add state to hold the marker's position
    const [markerPosition, setMarkerPosition] = useState(null);

    // 4. Update the marker's position when the prop changes
    useEffect(() => {
        if (positionToGo) {
            setMarkerPosition(positionToGo);
        }
    }, [positionToGo]);

    return (
        <MapContainer
            center={initialPosition}
            zoom={8}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
        >
            <TileLayer
                url="/tiles/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
                minZoom={0}
                maxZoom={10}
            />
            <HeatmapLayer />
            <ZoomControl position="topright" />
            <FlyToPosition position={positionToGo} />

            {/* 5. Conditionally render the marker and its popup */}
            {markerPosition && (
                <Marker position={markerPosition}>
                    <Popup>
                        Coordinates: <br />
                        Lat: {markerPosition[0].toFixed(4)}, Lng: {markerPosition[1].toFixed(4)}
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};