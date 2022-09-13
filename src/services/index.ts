import mongoose, { now } from 'mongoose'
import { petSchemaModel } from '../models/Pet';

// set mongo when docker, localhost when running without
const url = `mongodb://${process.env.MONGO_URL as string}:27017/test-table`;

export async function main() {
    await mongoose.connect(url)
	console.log('Connected successfully to mongo');
}

export async function getPets() {
	console.log(await petSchemaModel.find());
}

export async function create() {
	const pet = new petSchemaModel({
		name: "gaspar",
		age: 2,
		date: Date.now()
	})
	try {
		await pet.save()
	} catch (error) {
		console.log(error);
	}
}
