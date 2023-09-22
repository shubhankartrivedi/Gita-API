import clientPromise from '../index';
import sendMessage from '@/utils/sendWebhook';
import censorEmail from '@/utils/censorEmail';

export default async function addToWaitlist(data) {
  let client;

  try {
    // Get the MongoDB client instance from the promise
    client = await clientPromise;

    const db = client.db(
        process.env.MONGODB_DATABASE
    ); // Use your specific database name here
    
     // Get a reference to the "waitlist" collection
    const waitlistCollection = db.collection('waitlist');

    // Check if a document with the same email already exists
    const existingDocument = await waitlistCollection.findOne({ email: data.email });

    if (existingDocument) {
      return true;
    } else {
      // If no document with the same email exists, insert the new data.
      await waitlistCollection.insertOne(data);
      await sendMessage(`New waitlist signup: ${data.name} - \`${censorEmail(data.email)}\``);
      return true;
    }
  } catch (error) {
    return false ;
  } finally {
    if (client) {
      // Do not close the client here; keep it open for reuse.
      // client.close();
    }
  }
}
