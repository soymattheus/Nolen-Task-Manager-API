import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { TaskAttributes } from "../types/task";

class Task extends Model<TaskAttributes> implements TaskAttributes {
  declare id_task: string;
  declare title: string;
  declare description: string;
  declare status: string;
  declare id_user: string;
  declare created_at: Date;
  declare updated_at: Date;
}

Task.init(
  {
    id_task: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    id_user: {
      type: DataTypes.UUIDV4,
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
    tableName: "tb_task",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

export default Task;
