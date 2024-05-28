import { Schema, model, Model, connection } from "mongoose";

type PictureType = {
  name: string;
  src: string;
};

const schema = new Schema<PictureType>({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

// export default model<PictureType>("Picture", schema);

export default connection && connection.models["Picture"]
  ? (connection.models["Picture"] as Model<PictureType>)
  : model<PictureType>("Picture", schema);
