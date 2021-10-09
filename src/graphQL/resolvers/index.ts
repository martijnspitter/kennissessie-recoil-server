import { noteResolver } from "./note-resolver";
import { userResolvers } from "./user-resolver";

export const resolvers = {
  ...noteResolver,
  ...userResolvers
}
