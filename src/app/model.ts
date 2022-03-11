import { TodoItem } from './todo.item';
export class Model {
  name: string;
  items: TodoItem[];
  constructor() {
    this.name = 'Ali';
    this.items = [
      { description: 'Kahvaltı', action: 'Yes' },
      { description: 'Spor', action: 'Yes' },
      { description: 'Ders', action: 'No' },
    ];
  }
}
