import { NextResponse } from 'next/server';
import addStatus from '@/lib/mongodb/functions/addStatus';
import findStatus from '@/lib/mongodb/functions/findStatus';
import { revalidateTag } from 'next/cache'

export async function POST(request) {
  const data = await request.json();
    const heartbeat = data.heartbeat;
    let status = data.msg;
    const ping = heartbeat.ping|| 0;

    if(!heartbeat || !status) {
        return NextResponse.json({ error: 'Missing heartbeat or status or ping' }, { status: 400 });
    }

    if(status.includes('Down')) {
        status = "🔴 Down"
    }
    if(status.includes('Up')) {
        status = "🟢 Online"
    }
    await addStatus({
        status: status,
        ping: ping
    });
    revalidateTag('status')
  return NextResponse.json({ success: true }, { status: 200 });

  
}

export async function GET(request) {
    
    const statusData = await findStatus();

   
    return NextResponse.json({ statusText: statusData[0].status, ping: statusData[0].ping }, { status: 200 });
  
    
  }
