const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const { Title, description } = req.body;
        const response = await Todo.create({ Title, description });
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Initial server error",
            message: err.message,
        });
    }
};
