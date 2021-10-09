import { Account } from "../../models/account";
import { Note } from "../../models/note";
import { Profile } from "../../models/profile";
import { IContext } from "../../types";
import { IUser } from "../schema";



export const userResolvers = {
  Query: {
    me: async (parent: any, args: any, context: IContext) => {
      try {
        if (!context.authorized) throw new Error('not authorized');
        const { id }: { id: string } = args;
        const account = await Account.findById(id);
        return account;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    accounts: async (parent: any, args: any, context: IContext) => {
      try {
        if (!context.authorized) throw new Error('not authorized');

        return await Account.find();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    profiles: async (parent: any, args: any, context: IContext) => {
      try {
        if (!context.authorized) throw new Error('not authorized');

        return await Profile.find();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    register: async (parent: any, args: any, context: IContext) => {
      const { email, firstname, lastname }: { email: string, firstname: string, lastname: string } = args.input;
      const account = new Account({ email });
      const profile = new Profile({ firstname, lastname, accountId: account._id });
      await account.save();
      await profile.save();
    },
  },
  User: {
    accountId: (parent: any) => parent.accountId,
    email: (parent: any) => parent.email,
    firstname: (parent: any) => parent.firstname,
    lastname: (parent: any) => parent.lastname,
    notes: async (parent: any) => await Note.find({ creatorId: parent.accountId })
  }
}