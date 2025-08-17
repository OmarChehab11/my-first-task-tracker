import React, { useState } from 'react';
import { Task } from '../App';

interface Props {
  task: Task;
  updateTask: (id: number, text: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, updateTask, deleteTask, toggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
