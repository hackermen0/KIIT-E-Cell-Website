import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = import.meta.env.VITE_MONGO_URI || ''; // MongoDB connection URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.');
}

let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<Db> {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db('KIIT_E_Cell'); // specify the database name, e.g., client.db('my-database')
    console.log('Connected to MongoDB');
  }
  
  return db;
}