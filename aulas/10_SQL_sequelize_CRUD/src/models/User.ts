import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection/mysql";
// import { sequelize } from "../connection/postgre";

export interface UserInstance extends Model {
  id: number;
  name: string;
  age: number;
}

export const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
