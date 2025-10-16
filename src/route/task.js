const { route } = require("./route");
const Task = require('../model/task');


// tutte le tasks di un utente
router.get("/tasks",
    loginController.getTasks
);

// task specifica
router.get("/tasks/:id",
    loginController.getTask
);

// delete task specifica
router.delete("/tasks/:id",
    loginController.deleteTask
);

// create task
router.post("/task/create",
    loginController.createTask
);

// update task
router.put("/tasks/:id",
    loginController.updateTask
);

router.exports = router;