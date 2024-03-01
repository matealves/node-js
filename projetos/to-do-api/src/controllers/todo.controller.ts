import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const getAllTasks = async (req: Request, res: Response) => {
  res.json(await Todo.findAll());
};

export const addTask = async (req: Request, res: Response) => {
  res.json({});
};

export const updateTask = async (req: Request, res: Response) => {
  res.json({});
};

export const removeTask = async (req: Request, res: Response) => {
  res.json({});
};
