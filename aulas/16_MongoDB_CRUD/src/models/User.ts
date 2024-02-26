import { Schema, model, Model, connection } from "mongoose";

type UserType = {
  name: { firstName: string; lastName: string };
  age: number;
  email: string;
  interests: [string];
};

const schema = new Schema<UserType>({
  name: {
    firstName: { type: String, required: true },
    lastName: String,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  interests: [String],
});

export default connection && connection.models["User"]
  ? (connection.models["User"] as Model<UserType>)
  : model<UserType>("User", schema);
