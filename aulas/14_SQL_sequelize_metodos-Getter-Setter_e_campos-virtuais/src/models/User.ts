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
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue("name").toUpperCase();
      },
    },
    firstLetterOfName: {
      type: DataTypes.VIRTUAL,
      get() {
        const name: string = this.getDataValue("name");
        return name.charAt(0);
      },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
      set(value: number) {
        if (value < 18) value = 18;
        this.setDataValue("age", value);
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
