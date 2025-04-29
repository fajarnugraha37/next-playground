"use client";

import { useLocationListener } from "@/components/store";
import Link from "next/link";

export function UrlListener({ id }: { id: string }) {
  const { locationState, navigate } = useLocationListener();

  return (
    <div className="p-4 border rounded mb-4">
      <h3>URL Listener {id}</h3>
      <div>Hostname: {locationState.hostname}</div>
      <div>Path: {locationState.path}</div>
      <div>Query: {JSON.stringify(locationState.query)}</div>
      <div className="mt-2 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() =>
            navigate("/blog", { tab: id, time: Date.now().toString() })
          }
        >
          Navigate to blog (Tab {id})
        </button>
        <Link className="px-4 py-2 bg-gray-500 text-white rounded" href="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
