import getConnection from "db";
import Organisation from "./organistion";
import { DataTypes, Model } from "sequelize";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organisationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Organisation,
        key: "id",
      },
    },
  },
  {
    sequelize: getConnection(),
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "users",
    freezeTableName: true,
  }
);
