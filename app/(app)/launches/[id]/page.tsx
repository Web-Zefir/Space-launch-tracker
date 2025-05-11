import LaunchDetails from '@components/launches/Details';
import client from '@lib/apollo/client';
import { GET_LAUNCH_DETAILS } from '@lib/apollo/queries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export default async function LaunchPage({ params }: { params: { id: string } }) {
  const launchId = params.id;

  try {
    const { data } = await client.query({
      query: GET_LAUNCH_DETAILS,
      variables: { id: launchId }
    });

    if (!data?.launch) {
       notFound();
    }

    return <LaunchDetails launch={data.launch} />;

  } catch (error) {
    console.error('Error fetching launch:', error);

    return <div>Не удалось загрузить детали запуска. Пожалуйста, попробуйте позже.</div>;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
   const launchId = await params.id; 

   if (!launchId) {
     return { title: 'Детали запуска не найдены' };
   }

   try {
     const { data } = await client.query({
       query: GET_LAUNCH_DETAILS,
       variables: { id: launchId },
     });

     if (!data?.launch) {
       return { title: 'Детали запуска не найдены' };
     }

     const launch = data.launch;

     return {
       title: `Запуск: ${launch.mission_name} | Space Launch Tracker`,
       description: launch.details || `Детали запуска ${launch.mission_name}.`,
     };
   } catch (error) {
      console.error('Ошибка получения метаданных для запуска:', error);
      return { title: 'Ошибка загрузки деталей запуска' };
   }
}