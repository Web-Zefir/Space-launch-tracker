import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
        flickr_images
      }
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_utc
      details
      rocket {
        rocket_name
        rocket_type
      }
      links {
        article_link
        video_link
        wikipedia
      }
      launch_site {
        site_name_long
      }
    }
  }
`;
