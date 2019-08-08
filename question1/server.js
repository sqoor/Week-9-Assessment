const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

const tasks = [
    {
        id: 1,
        body: 'Clean the water',
    },
    {
        id: 2,
        body: 'Wash the TV',
    },
    {
        id: 3,
        body: 'Lean on me',
    },
    {
        id: 4,
        body: 'Dice it twice',
    }
]

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks/', (req, res) => {
    const title = req.body.title;
    const newTask = {
        id: tasks.length + 1,
        title 
    }

    tasks.push(newTask);

    res.json(tasks);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].id === id) {
            tasks.splice(i, 1);
            break;
        }
    }

    res.json(tasks);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening to server ${PORT}...`))