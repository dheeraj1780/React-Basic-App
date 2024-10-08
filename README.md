# React-Basic-App

This project is a simple web application built using React and Express, designed to demonstrate basic authentication and task management features. The app uses `useState` with booleans for handling authentication.

## Features

- User authentication (handled via `useState`)
- Role-based access control (admin users can add tasks)
- Task management (add, delete tasks)
- Responsive and professional UI/UX design

## Tech Stack

- **Frontend**: React
  - CSS for styling with a Microsoft-inspired theme
  - React hooks for state management
- **Backend**: Express.js
  - Serves the API for managing user data and tasks
- **Database**: JSON Server
  - Stores user data and tasks in a JSON file
- **Other Libraries**: 
  - Axios for API requests
  - React Router for routing
## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/React-Basic-App.git
   cd React-Basic-App
   ```
2. Install frontend dependencies:

  ```bash
    npm install
  ```
3. Start the frontend:

  ```bash
  npm start
  ```
4. Navigate to the backend folder:

  ```bash
  cd backend
  ```
5. Install backend dependencies:

  ```bash
  npm install
  ```
6. Start the backend server:

  ```bash
  node server.js
  ```

7. Open the app:
Visit http://localhost:3000 in your browser.

## Contributing

Feel free to submit issues or pull requests if you find bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License.
