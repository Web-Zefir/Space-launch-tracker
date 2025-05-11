export interface Launch {
  id: string; 
  mission_name: string; 
  launch_date_utc: string; 
  launch_success: boolean | null;
  details: string | null;

  rocket: {
    rocket_name: string; 
    rocket_type: string | null;
  };

  links: {
    video_link: string | null;
    article_link: string | null; 
    wikipedia: string | null; 
    flickr_images: string[]; 
  } | null;

  launch_site: {
    site_name_long: string; 
  } | null; 
};

export interface LaunchesResponse {
  launchesPast: Launch[]; 
};

export interface LaunchDetailsResponse {
  launch: Launch;
};

export interface FavoriteLaunch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
};
