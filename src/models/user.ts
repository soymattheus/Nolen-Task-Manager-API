import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { UserAttributes } from "../types/user";

class User extends Model<UserAttributes> implements UserAttributes {
  declare id_user: string;
  declare name: string;
  declare last_name: string;
  declare email: string;
  declare password: string;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
}

User.init(
  {
    id_user: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "tb_user",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

export default User;
