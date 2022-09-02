import mongoose from 'mongoose'
import { petSchemaModel } from '../models/Pet';

const url = 'mongodb://localhost:27017/test-table';

export async function main() {
	// Use connect method to connect to the server
    mongoose.connect(url)
    const f = await petSchemaModel.find()
    console.log(f);
	// await client.connect();
	console.log('Connected successfully to server');
	//   const db = client.db(dbName);
	//   console.log(db);
	//   const collection = db.collection('Pet');
	//   console.log(collection);

	return 'done.';
}
