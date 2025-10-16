// task service 
const { Sequelize } = require('sequelize');
const Task = require('../model/task');
const { request } = require('express');
const { Op } = Sequelize;

Sequelize.sync();

async function createTask(req) {
    try {
        const task = await Task.create(
            {
                title: req.title,
                description: req.description,
                status: req.status,
                dueDate: req.dueDate,
                userId: req.userId
            });
        console.log('Create task:', task);
    }
    catch (err) {
        console.log(err);
    }
}

async function getTasks() {
    try {
        const tasks = await Task.find();
        console.log('Get tasks:', tasks);
    }
    catch (err) {
        console.log(err);
    }
}

async function getTask(req) {
    try {
        const task = await Task.findById(req.id);
        console.log('Find task by id:', task);
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteTask(req) {
    try {
        const Task = await Task.deleteOne({ _id: req.id });
        console.log('Delete task:', Task);
    }
    catch (err) {
        console.log(err);
    }
}