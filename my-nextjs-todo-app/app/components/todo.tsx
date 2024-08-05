"use client" // This is to avoid the file being bundled by the server

import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface TodoItem {
    id: number;
    text: string;
    checked: boolean;
}

const ErrorFallback: React.FC<{ error: Error, resetErrorBoundary: () => void }> = ({ error, resetErrorBoundary }) => {
    return (
        <div>
            <h2>Something went wrong</h2>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

const Todo: React.FC = () => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    const [newItemText, setNewItemText] = useState('');

    const handleAddItem = () => {
        if (newItemText.trim() !== '') {
            const newItem: TodoItem = {
                id: Date.now(),
                text: newItemText.trim(),
                checked: false
            };

            setTodoItems([...todoItems, newItem]);
            setNewItemText('');
        }
    };

    const handleToggleItem = (itemId: number) => {
        setTodoItems(todoItems.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    checked: !item.checked
                };
            }
            return item;
        }));
    };

    const getTodoItemStyle = (checked: boolean): React.CSSProperties => {
        return {
            textDecoration: checked ? 'line-through' : 'none'
        };
    };

    const handleDeleteItem = (itemId: number) => {
        setTodoItems(todoItems.filter((item) => item.id !== itemId));
    };
        return (
            // issue i'm having is to having a failing error boundary 
            //<ErrorBoundary FallbackComponent={ErrorFallback}>
               
                <div>
                    <input
                        type="text"
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                    />

                    <button onClick={handleAddItem} style={{ padding: '10px' }}>Add</button>
                
                    <ul>
                        {todoItems.map((item, index) => (
                            <li key={item.id} style={getTodoItemStyle(item.checked)}>
                                {index + 1}. {item.text}                        
                                <button style={{ padding: '10px', color: 'pastelgreen'  }} onClick={() => handleToggleItem(item.id)}>Done</button>
                                <button style={{ padding: '10px',   }} onClick={() => handleDeleteItem(item.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
        //</ErrorBoundary>
    );
};

export default Todo;