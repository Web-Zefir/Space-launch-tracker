'use client';

import { Card, Title, Text, Box } from '@mantine/core';
import Link from 'next/link'; 
import type { Launch } from '@/lib/types/launch';

const LaunchCard = ({ launch }: { launch: Launch }) => (
  <Link href={`/launches/${launch.id}`} style={{ textDecoration: 'none' }}>
    <Box
      component="div"
      style={{ cursor: 'pointer' }}
      role="link" 
      tabIndex={0} 
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={3} mb="sm">
          {launch.mission_name}
        </Title>
        <Text size="sm" c="dimmed" mb={4}>
          🚀 {launch.rocket.rocket_name}
        </Text>
        <Text size="sm" mb="md">
          🗓 {new Date(launch.launch_date_utc).toLocaleDateString()}
        </Text>
        <Text size="sm" style={{ color: 'blue' }}>
          View Details →
        </Text>
      </Card>
    </Box>
  </Link>
);

export default LaunchCard;