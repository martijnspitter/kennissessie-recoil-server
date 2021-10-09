import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const noteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export interface INote {
  title: string,
}

export const Note = mongoose.model<INote>('Note', noteSchema);