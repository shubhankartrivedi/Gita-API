import clientPromise from '../index';

export default async function addStatus(data) {
  let client;

  try {
    // Get the MongoDB client instance from the promise
    client = await clientPromise;

    const db = client.db(
      process.env.MONGODB_DATABASE
    ); // Use your specific database name here

    // Get a reference to the "status" collection
    const statusCollection = db.collection('status');

    // Delete all documents from the "status" collection
    await statusCollection.deleteMany({});

    // Insert the new data into the "status" collection
    await statusCollection.insertOne(data);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    if (client) {
      // Do not close the client here; keep it open for reuse.
      // client.close();
    }
  }
}