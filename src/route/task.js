const express = require('express');
const router = express.Router();
const taskService = require('../service/taskService');
const auth = require('../middleware/auth');

// Middleware per verificare l'autenticazione
router.use(auth);

// Ottieni tutte le tasks di un utente
router.get("/", async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Errore nel recupero dei task", error: error.message });
    }
});

// Ottieni task specifica per ID
router.get("/:id", async (req, res) => {
    try {
        const task = await taskService.getTask({ id: req.params.id });
        if (!task) {
            return res.status(404).json({ message: "Task non trovato" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Errore nel recupero del task", error: error.message });
    }
});

// Crea un nuovo task
router.post("/", async (req, res) => {
    try {
        const taskData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'da fare',
            dueDate: req.body.dueDate,
            userId: req.userId // Ottenuto dal middleware auth
        };
        const newTask = await taskService.createTask(taskData);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Errore nella creazione del task", error: error.message });
    }
});

// Aggiorna un task esistente
router.put("/:id", async (req, res) => {
    try {
        const taskData = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate
        };
        const updatedTask = await taskService.updateTask(taskData);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Errore nell'aggiornamento del task", error: error.message });
    }
});

// Elimina un task
router.delete("/:id", async (req, res) => {
    try {
        const result = await taskService.deleteTask({ id: req.params.id });
        res.status(200).json({ message: "Task eliminato con successo" });
    } catch (error) {
        res.status(500).json({ message: "Errore nell'eliminazione del task", error: error.message });
    }
});

module.exports = router;