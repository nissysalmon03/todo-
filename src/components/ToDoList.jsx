import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({
  todos,
  onDelete,
  onToggleComplete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  editingId,
  editingText,
  setEditingText,
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            isEditing={editingId === todo.id}
            editingText={editingText}
            setEditingText={setEditingText}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
