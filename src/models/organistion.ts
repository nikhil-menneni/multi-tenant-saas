import getConnection from "db";
import { DataTypes, Model } from "sequelize";

export default class Organisation extends Model {}

Organisation.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
      allowNull: false,
    },
  },
  {
    sequelize: getConnection(),
    tableName: "organisation",
    freezeTableName: true, //false will set modelname to tablename.
  }
);
