import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { TaskAttributes } from "../types/task";

class Task extends Model<TaskAttributes> implements TaskAttributes {
  public id_task!: string;
  public title!: string;
  public description!: string;
  public status!: string;
  public id_user!: string;
  public created_at!: Date;
  public updated_at!: Date;
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
      type: DataTypes.STRING(36),
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
