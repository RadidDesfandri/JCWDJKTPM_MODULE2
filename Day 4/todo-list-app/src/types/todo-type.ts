export interface TodoItemType {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export type Filters = "all" | "active" | "completed";
