import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { TokenBlacklistAttributes } from "../types/tokenBlacklist";

class TokenBlacklist
  extends Model<TokenBlacklistAttributes>
  implements TokenBlacklistAttributes
{
  declare token: string;
  declare expires_at: Date;
}

TokenBlacklist.init(
  {
    token: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tb_token_blacklist",
    timestamps: false,
    underscored: true,
  },
);

export default TokenBlacklist;
