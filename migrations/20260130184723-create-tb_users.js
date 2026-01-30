"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tb_user", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("tb_user");
  },
};
