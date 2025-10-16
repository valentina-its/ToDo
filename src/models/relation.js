const User = require('./user');
const Task = require('./task');

User.belongsToMany(Task, {
  through: 'users_tasks',
  foreignKey: 'users_id',
  otherKey: 'tasks_id'
});

Task.belongsToMany(User, {
  through: 'users_tasks',
  foreignKey: 'tasks_id',
  otherKey: 'users_id'
});

module.exports = {
  User,
  Task
};