import {Todo} from '../../model/todo';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: [],
};

export const todoReducer = (state: TodoState = initialState, action) => {
  return state;
};
