import axios from 'axios';
import findStatus from '@/lib/mongodb/functions/findStatus';



export default async function getStatus() {
  try {
    const statusData = await findStatus();

    return { statusText: statusData[0].status, ping: statusData[0].ping };
  } catch (error) {
    console.error(error);
    return null;
  }
}