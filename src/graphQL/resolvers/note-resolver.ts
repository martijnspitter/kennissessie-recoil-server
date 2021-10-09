import { Note } from "../../models/note";
import { IContext } from "../../types";


export const noteResolver = {
  Query: {
    notes: async (parent: any, args: any, context: IContext) => {
      try {
        if (!context.authorized) throw new Error('not authorized');

        return await Note.find();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  }
}