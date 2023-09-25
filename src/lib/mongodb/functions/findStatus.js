import clientPromise from '../index';

export default async function findStatus() {
  let client;

  try {
    // Get the MongoDB client instance from the promise
    client = await clientPromise;

    const db = client.db(
      process.env.MONGODB_DATABASE
    ); // Use your specific database name here

    // Get a reference to the "status" collection
    const statusCollection = db.collection('status');

    // Find all documents in the "status" collection
    const cursor = await statusCollection.find();
    const documents = await cursor.toArray();

    return documents;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    if (client) {
      // Do not close the client here; keep it open for reuse.
      // client.close();
    }
  }
}