import mongoose, { now } from 'mongoose'
import { petSchemaModel } from '../models/Pet';

// set mongo when docker, localhost when running without
// const url = `mongodb://${process.env.MONGO_URL as string}:27017/test-table`;
// const url = `mongodb://192.168.64.7:30332/test-table`;
const url = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/test-table`;

export async function main() {
    await mongoose.connect(url)
	return 'Connected successfully to mongo';
}

export async function getPets() {
	return petSchemaModel.find();
}

export async function create(params: any) {
	const pet = new petSchemaModel({
		name: params.name,
		age: params.age,
		date: Date.now()
	})
	try {
		await pet.save()
	} catch (error) {
		console.log(error);
	}
}
