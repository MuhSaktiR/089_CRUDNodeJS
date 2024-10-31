const express = require('express');
const router = express.Router();

// Definisikan array todos untuk menyimpan data
const todos = [
    {
        id: 1,
        task: "Test bang Pertama",
        completed: false
    },
    {
        id: 2,
        task: "Test bang Kedua",
        completed: false
    },
    {
        id: 3,
        task: "Test bang Ketiga",
        completed: false
    }
];

// Endpoint untuk mendapatkan data todos
router.get('/', (req, res) => { res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;

//Endpoint untuk menghapus tugas 
router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ Message: 'Tugas tidak ditemukan'});

    const deleteTodo = todos.splice(todoIndex, 1)[0]; //Menghapus dan menyimpan todo yang dihapus
    res.status(200).json({ message: `Tugas '${deleteTodo.task}' telah dihapus`});
});

// Endpoint untuk memperbarui tugas
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan'});
    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui`,
        updateTodo: todo
    });
});