"use client";

import Head from "next/head";
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function Page() {
  // We are keeping the dynamic import for CesiumMap
  const CesiumMap = useMemo(() => dynamic(
    () => import('@/components/CesiumMap'),
    { 
      loading: () => <p>Loading 3D Map...</p>,
      ssr: false 
    }
  ), []);

  return (
    <>
      <Head>
        <title>WESEE | 3D Map</title>
        {/* Using CDN for testing */}
        <link 
          rel="stylesheet" 
          href="https://cesium.com/downloads/cesiumjs/releases/1.131/Build/Cesium/Widgets/widgets.css" 
        />
      </Head>

      <Script 
        src="https://cesium.com/downloads/cesiumjs/releases/1.131/Build/Cesium/Cesium.js" 
        strategy="beforeInteractive" 
      />

      {/* The <Layout> component has been removed for this test.
        The map container now takes up the full screen directly.
      */}
      <div className="h-screen w-screen">
        <CesiumMap />
      </div>
    </>
  );
}