import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const getAllTasks = async (req: Request, res: Response) => {
  res.json(await Todo.findAll());
};

export const addTask = async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    res.json({
      error: "Invalid data.",
    });
    return false;
  }

  const data = await Todo.create(req.body);

  res.status(201);
  res.json({
    success: true,
    message: "Task added successfully.",
    data,
  });
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Todo.findByPk(id);

  if (!task) {
    res.status(404);
    res.json({
      error: "404 - Not Found.",
    });
    return false;
  }

  const { title, done } = req.body;

  if (title) {
    task.title = title;
  }

  if (done !== undefined) {
    task.done = done;
  }

  await task.save();

  res.status(201);
  res.json({
    success: true,
    message: "Task updated successfully.",
    data: task,
  });
};

export const removeTask = async (req: Request, res: Response) => {
  if (await Todo.destroy({ where: { id: req.params.id } })) {
    res.json({
      success: true,
      message: "Task deleted successfully.",
    });
  } else {
    res.status(404);
    res.json({
      error: "404 - Not Found.",
    });
  }
};
