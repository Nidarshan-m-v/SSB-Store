"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current!).setView([13.0827, 80.2707], 13); // Example: Chennai coordinates

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([13.0827, 80.2707])
      .addTo(map)
      .bindPopup("Our Marriage Hall Location")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-lg shadow-lg border border-gray-200"
    />
  );
};

export default MapSection;
