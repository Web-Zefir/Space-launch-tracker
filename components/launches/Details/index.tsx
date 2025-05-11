'use client'  
  
import type { Launch } from '@lib/types/launch';

export default function LaunchDetails({ launch }: { launch: Launch }) {
  if (!launch) return <div className="text-red-500">Launch data not available</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{launch.mission_name}</h1>
      <div className="space-y-2">
        <p>Date: {new Date(launch.launch_date_utc).toLocaleDateString()}</p>
        <p>Rocket: {launch.rocket.rocket_name}</p>
        {launch.details && <p className="mt-4">{launch.details}</p>}
      </div>
    </div>
  );
};