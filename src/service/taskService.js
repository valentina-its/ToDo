// task service 
const { Op } = require('sequelize');
const Task = require('../models/task');

async function createTask(req) {
    try {
        const task = await Task.create({
            titolo: req.title,
            descrizione: req.description,
            stato: req.status,
            scadenza: req.dueDate,
            userId: req.userId
        });
        console.log('Create task:', task);
        return task;
    }
    catch (err) {
        console.log('Errore durante la creazione del task:', err);
        throw err;
    }
}

async function getTasks() {
    try {
        const tasks = await Task.findAll();
        console.log('Get tasks:', tasks);
        return tasks;
    }
    catch (err) {
        console.log('Errore durante il recupero dei task:', err);
        throw err;
    }
}

async function getTask(req) {
    try {
        const task = await Task.findByPk(req.id);
        console.log('Find task by id:', task);
        return task;
    }
    catch (err) {
        console.log('Errore durante il recupero del task:', err);
        throw err;
    }
}

async function updateTask(req) {
    try {
        const [updated] = await Task.update({
            titolo: req.title,
            descrizione: req.description,
            stato: req.status,
            scadenza: req.dueDate
        }, {
            where: { id: req.id }
        });

        if (updated) {
            const updatedTask = await Task.findByPk(req.id);
            console.log('Update task:', updatedTask);
            return updatedTask;
        }
        throw new Error('Task non trovato');
    }
    catch (err) {
        console.log('Errore durante l\'aggiornamento del task:', err);
        throw err;
    }
}

async function deleteTask(req) {
    try {
        const deleted = await Task.destroy({
            where: { id: req.id }
        });

        if (deleted) {
            console.log('Delete task with id:', req.id);
            return true;
        }
        throw new Error('Task non trovato');
    }
    catch (err) {
        console.log('Errore durante l\'eliminazione del task:', err);
        throw err;
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};
