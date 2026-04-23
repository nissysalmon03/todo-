# React To-Do List Application

A modern, responsive To-Do List application built with React and Vite. This application allows users to add, edit, delete, and mark tasks as completed with a clean and intuitive user interface.

## Features

✅ **Add Tasks** - Easily add new to-do items with a single click or press Enter
✅ **Edit Tasks** - Modify existing tasks with inline editing
✅ **Delete Tasks** - Remove completed or unwanted tasks
✅ **Mark Complete** - Check off tasks as you complete them
✅ **Task Counter** - Keep track of total and completed tasks
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
✅ **Beautiful UI** - Modern gradient design with smooth animations

## Technology Stack

- **React 19.2.5** - Latest React library
- **Vite 4.4.0** - Ultra-fast build tool
- **Modern CSS** - Beautiful styling with CSS variables and animations

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Application header component
│   │   ├── ToDoList.jsx        # List display component
│   │   ├── ToDoList.css        # List styling
│   │   └── ToDoItem.jsx        # Individual task item component
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styling
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Components

### App Component
- Main component managing application state
- Handles task management logic (add, edit, delete, complete)
- Manages input and editing state

### Header Component
- Displays the application title and tagline
- Provides branding for the application

### ToDoList Component
- Renders the list of all tasks
- Maps through todos and displays each as a ToDoItem
- Shows empty state when no tasks exist

### ToDoItem Component
- Represents individual task items
- Displays task text with checkbox for completion
- Provides edit, save, cancel, and delete buttons
- Inline editing functionality

## Installation

1. **Clone the repository** (or extract the project files)
   ```bash
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/` in your web browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build

## How to Use

1. **Adding a Task**
   - Type your task in the input field
   - Click "Add Task" or press Enter
   - Task appears in the list below

2. **Completing a Task**
   - Click the checkbox next to any task to mark it as complete
   - Completed tasks will show a strikethrough

3. **Editing a Task**
   - Click the "Edit" button on any task
   - Modify the task text in the edit field
   - Click "Save" to confirm or "Cancel" to discard changes

4. **Deleting a Task**
   - Click the "Delete" button to remove a task permanently
   - This action cannot be undone

5. **Track Progress**
   - View the task counter at the bottom to see:
     - Total number of tasks
     - Number of completed tasks

## Styling

The application features:
- Modern gradient background (purple to violet)
- Responsive card-based layout
- Smooth animations and transitions
- Interactive hover effects
- Mobile-friendly design with breakpoints at 600px
- Customizable CSS variables for easy theming

### Color Scheme
- Primary: `#6366f1` (Indigo)
- Success: `#10b981` (Green)
- Danger: `#ef4444` (Red)
- Background: `#f8fafc` (Light slate)

## Browser Support

This application works best on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast development server with Hot Module Replacement (HMR)
- Optimized production build
- Minimal bundle size using Vite
- Efficient React rendering

## Future Enhancements

Possible features for future versions:
- Local storage persistence
- Task categories/tags
- Due dates and reminders
- Priority levels
- Dark mode toggle
- Task filtering and sorting
- Drag and drop reordering

## Getting Help

If you encounter any issues:
1. Check that Node.js version 16+ is installed
2. Clear node_modules and reinstall: `rm -r node_modules && npm install`
3. Clear npm cache: `npm cache clean --force`
4. Restart the development server

## License

This project is open source and available under the MIT License.

## Author

Developed as a React learning project demonstrating best practices in:
- Component composition
- State management with hooks
- Event handling
- Props passing
- Conditional rendering
- List rendering with keys
- CSS-in-JS styling
