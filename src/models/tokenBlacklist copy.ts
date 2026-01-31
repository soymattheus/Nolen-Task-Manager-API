import { DataTypes, Model } from "sequelize";
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
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
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
  },
);

export default TokenBlacklist;
