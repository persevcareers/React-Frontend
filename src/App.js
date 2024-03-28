import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css"; // Update your CSS file accordingly

class App extends Tasks {
state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask, studentName, mobileNumber, interestedCourse } = this.state;
        return (
            <div className="app">
                <header className="app-header">
                    <h1>Perseverance Student's Corner</h1>
                </header>
                <div className="main-content">
                    <Paper elevation={3} className="perseverance-container">
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="input-field"
                                value={studentName}
                                required={true}
                                onChange={(e) => this.setState({ studentName: e.target.value })}
                                placeholder="Student Name"
                            />
                            <TextField
                                variant="outlined"
                                size="small"
                                className="input-field"
                                value={mobileNumber}
                                required={true}
                                onChange={(e) => this.setState({ mobileNumber: e.target.value })}
                                placeholder="Mobile Number"
                            />
                            <TextField
                                variant="outlined"
                                size="small"
                                className="input-field"
                                value={interestedCourse}
                                required={true}
                                onChange={(e) => this.setState({ interestedCourse: e.target.value })}
                                placeholder="Interested Course"
                            />
                            <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
                                Add Student
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
