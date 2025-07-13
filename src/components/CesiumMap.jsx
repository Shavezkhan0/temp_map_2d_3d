"use client";

import { useEffect, useRef } from 'react';

export default function CesiumMap() {
    const cesiumContainer = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Cesium && cesiumContainer.current) {
            
            // ✅ CHANGE: Use the online OpenStreetMap tile server
            const imageryProvider = new window.Cesium.UrlTemplateImageryProvider({
                url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                tilingScheme: new window.Cesium.WebMercatorTilingScheme(),
            });

            const viewer = new window.Cesium.Viewer(cesiumContainer.current, {
                imageryProvider: imageryProvider,
                baseLayerPicker: false,
                geocoder: false,
                homeButton: false,
                sceneModePicker: false,
                navigationHelpButton: false,
                animation: false,
                timeline: false,
            });

            viewer.camera.flyTo({
                destination: window.Cesium.Cartesian3.fromDegrees(77.2090, 28.6139, 100000),
            });
        }
    }, []);

    return <div ref={cesiumContainer} style={{ width: '100%', height: '100%' }} />;
}