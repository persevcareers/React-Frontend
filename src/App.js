import React, { Component } from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css"; // Update your CSS file accordingly

class App extends Component {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;
        return (
            <div className="app">
                {/* Left Pane with Course Details */}
                <div className="left-pane">
                    <h2>Course Details</h2>
                    {/* Add your course details here */}
                    <p>Course Name: XYZ</p>
                    <p>Instructor: ABC</p>
                    <p>Duration: 10 weeks</p>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <header className="app-header">
                        <h1>Perseverance Student Checklist</h1>
                    </header>
                    <Paper elevation={3} className="todo-container">
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input"
                                value={currentTask}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="Add Checklist Items"
                            />
                            <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
                                Add Item
                            </Button>
                        </form>
                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper key={task._id} className="task-item">
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    />
                                    <div className={task.completed ? "task-text completed" : "task-text"}>
                                        {task.task}
                                    </div>
                                    <Button onClick={() => this.handleDelete(task._id)} color="secondary" className="delete-task-btn">
                                        Delete
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default App;
