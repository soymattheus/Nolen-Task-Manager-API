"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tb_task", {
      id_task: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      id_user: {
        type: Sequelize.STRING(36),
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
    await queryInterface.dropTable("tb_task");
  },
};
