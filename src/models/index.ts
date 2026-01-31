import User from "./user";
import TokenBlacklist from "./tokenBlacklist";
import Task from "./task";

User.hasMany(Task, {
  foreignKey: "id_user",
  sourceKey: "id_user",
  as: "tasks",
});

Task.belongsTo(User, {
  foreignKey: "id_user",
  targetKey: "id_user",
  as: "user",
});

export { User, TokenBlacklist, Task };
