import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const petSchema = new Schema({
  petId: ObjectId,
  name: String,
  age: Number,
  date: Date
});

export const petSchemaModel = mongoose.model('Pet', petSchema);