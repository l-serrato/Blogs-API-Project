'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.fn('now'),
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.fn('now'),
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('blog_posts');
  },
};
