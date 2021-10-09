import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const accountSchema = new Schema<IAccount>(
  {
    email: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

export interface IAccount {
  id: mongoose.ObjectId,
  email: string,
}

export const Account = mongoose.model<IAccount>('Account', accountSchema);