'use client';
import Layout from "@/components/Layout";
import { useTheme } from "./Providers/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>

      <Layout title="About">
        <div className={`p-8 max-w-4xl mx-auto ${theme.text_color}`}>
          <h1 className="text-4xl font-bold mb-6">About WESEE</h1>

          <p className="text-lg leading-relaxed mb-6">
            <strong>WESEE</strong> (Weather Earth System Environmental Explorer) is an interactive web platform designed to visualize real-time and historical temperature data across the globe. Our platform supports both <strong>2D and 3D</strong> mapping interfaces, giving users a powerful and intuitive way to explore weather patterns and environmental changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">🌍 2D World Map</h2>
          <p className="text-lg leading-relaxed mb-6">
            The <strong>2D Map</strong> provides a flat, zoomable view of the world. It is ideal for quickly viewing temperature overlays on a traditional geographic map. Users can zoom in/out, pan across regions, and click on locations to view temperature readings.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">🌐 3D Globe Map</h2>
          <p className="text-lg leading-relaxed mb-6">
            The <strong>3D Map</strong> delivers an immersive globe view powered by WebGL. Rotate the Earth in 3D space and see temperature gradients more naturally. This is especially useful for global-scale climate visualization.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">⚙️ How to Use</h2>
          <ul className="list-disc ml-6 text-lg leading-relaxed space-y-2">
            <li>Use the sidebar to switch between 2D and 3D views.</li>
            <li>Click on specific regions to view temperature data.</li>
            <li>Use the toggle button at the bottom to switch between light and dark mode.</li>
            <li>No internet? The 2D map can run offline using local tile support.</li>
          </ul>

          
        </div>
      </Layout>
    </>
  );
}
