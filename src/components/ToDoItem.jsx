function ToDoItem({
  todo,
  onDelete,
  onToggleComplete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  isEditing,
  editingText,
  setEditingText,
}) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="todo-checkbox"
        />
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <button
              onClick={() => onSaveEdit(todo.id)}
              className="save-btn"
            >
              Save
            </button>
            <button
              onClick={onCancelEdit}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}
      </div>
      {!isEditing && (
        <div className="todo-actions">
          <button
            onClick={() => onStartEdit(todo.id, todo.text)}
            className="edit-btn"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default ToDoItem;
