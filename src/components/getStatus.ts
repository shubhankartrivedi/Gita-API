import findStatus from '@/lib/mongodb/functions/findStatus';

export default async function getStatus(): Promise<{ statusText: string; ping: number } | null> {
  try {
    const statusData = await findStatus();

    if (!statusData.length) {
      throw new Error('No status data found');
    }

    return { statusText: statusData[0].status, ping: statusData[0].ping };
  } catch (error) {
    console.error(error);
    return null;
  }
}