### Project: Full-Stack To-Do List Application

#### Objective:

Build a to-do list application using MongoDB, Express.js, React.js, and Node.js (MERN stack). The application should allow users to create, view, edit, and delete to-do items.

#### Project Setup:

1. Initialize a new Node.js project.
2. Setup the MVC folder structure
3. Set up the Express server.
4. Create a MongoDB database in the cloud.
5. Connect the application to a MongoDB database.
6. Create a React application for the frontend.

#### Basic Tasks (Fundamentals):

1. **Create the To-Do Model**: Define a Mongoose model for to-do items with fields for the task description, a boolean to mark completion, and timestamps.
2. **Backend API Routes**: Create RESTful routes using Express:

   - `GET /todos`: Fetch all to-do items.
   - `POST /todos`: Add a new to-do item.
   - `PUT /todos/:id`: Update a to-do item.
   - `DELETE /todos/:id`: Delete a to-do item.

3. **Frontend Development**: Build the frontend with React:

   - Create components for listing tasks, adding new tasks, and a task item.
   - Use state and props to manage data.
   - Implement API calls to interact with the backend.

4. **Basic Styling**: Use CSS to style the application.

#### Intermediate Tasks (Enhancements):

1. **User Authentication**: Implement user registration and login functionality.

   - Add a User model with fields for username, password, and tokens.
   - Use JWT for authentication.
   - Modify the To-Do model to associate tasks with users.

2. **Frontend Routing**: Implement React Router to manage navigation between the login page, registration page, and the to-do list.
3. **Data Validation and Error Handling**: Implement data validation on the backend and frontend. Show appropriate error messages to users.

#### Advanced Tasks (Challenges):

1. **Search Functionality**: Implement a search feature to filter tasks based on their description.
2. **Task Prioritization**: Add the ability to prioritize tasks, and sort tasks by their priority.
3. **Responsive Design**: Ensure that the application is responsive and works well on various screen sizes.
4. **Assign Tasks to Users** : Enhance the application to allow users to assign tasks to other registered users. This requires modifying the To-Do model to include an 'assignedTo' field referencing the User model.
5. **Task Deadlines** : Integrate the functionality to add deadlines to tasks. Modify the To-Do model to include a 'deadline' field, which stores the due date of the task. Implement frontend components to allow users to set and view deadlines.

#### Testing:

- Test each API endpoint using Thunder Client or Postman or any other similar tool.
- Ensure that the application works seamlessly from end to end.

#### Deployment Guidelines:

- Create a repository at GitHub.
- Include a README file with setup instructions and a brief overview of the application's functionality.

#### Evaluation Criteria:

- Functionality: The application should work as described.
- Code Quality: The code should be clean, well-organized, and properly commented.
- UI/UX Design: The application should be user-friendly and visually appealing.
