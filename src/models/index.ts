import User from "./user";
import TokenBlacklist from "./tokenBlacklist";
import Task from "./task";

User.hasMany(Task, {
  foreignKey: "idUser",
  sourceKey: "idUser",
  as: "tasks",
});

Task.belongsTo(User, {
  foreignKey: "idUser",
  targetKey: "idUser",
  as: "user",
});

export { User, TokenBlacklist, Task };
