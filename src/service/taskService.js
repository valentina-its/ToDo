// task service 
const Task = require('../model/task');
const { request } = require('express');

async function createTask(req) {
    try {
        const task = await Task.create(
            {
                titolo: req.titolo,
                descrizione: req.descrizione,
                stato: req.stato,
                dataScadenza: req.dataScadenza,
                idUtente: req.idUtente
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