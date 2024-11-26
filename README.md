### Project Title: Role-Based Access Control (RBAC) UI
<br>
<br>
#### Project Overview:
<br>
This project is a web-based Role-Based Access Control (RBAC) dashboard designed to allow administrators to manage users, roles, and permissions efficiently. It provides a user-friendly interface to perform CRUD operations on users and roles, assign roles to users, and define permissions for roles dynamically.
<br>
The application is responsive, ensuring usability across devices, and follows best practices for secure and maintainable code.
<br>
<br>
---
<br>
#### Flow of the Project:
<br>
<br>
src/
<br>
|- component/
<br>
|  |-Modal.js
<br>
|  |-PermissionMatrix.js
<br>
|  |-RoleTable.js
<br>
|  |-Sidebar.js
<br>
|  |-UserTable.js
<br>
|- context/
<br>
|  |-RBACContext.js
<br>
|  |-RBACProvider.js
<br>
|- pages/
<br>
|  |-Dashboard.js
<br>
|  |-NotFound.js
<br>
|  |-Permissions.js
<br>
|  |-Roles.js
<br>
|  |-Users.js
<br>
|-services/
<br>
|  |-api.js
<br>
|  |-mockData.js
<br>
|-styles/
<br>
|  |-style.css
<br>
|-utils/
<br>
|  |-helpers.js
<br>
|-App.js
<br>
|-index.js
<br>
<br>
PermissionMatrix.js- it manages the permisson
<br>
RoleTable.js - it manages the roles
<br>
UserTable.js - it handles the users
<br>
mockData.js - it stores the mock data
<br>
<br>

#### Getting Started:
<br>
1. Prerequisites
<br>
Ensure you have the following installed on your system:
<br>
   - Node.js (v14 or higher)
   <br>
   - npm (Node Package Manager)
<br>
<br>
2. Setup Instructions
<br>
   - Clone the repository:
   <br>
         git clone https://github.com/MahwishRizwan/RDBC-Dashboard.git
         <br>
         cd rbac-ui
         <br>
   - Install dependencies:
   <br>
         npm install
         <br>

   - Start the development server:
     <br>
         npm start
<br>
   - Open the application in your browser:
     <br>
         http://localhost:3000
     <br>
<br>
#### Technology Stack:
<br>
1. Frontend: 
<br>
   - React.js
   <br>
   - React Router (for routing)
   <br>
   - CSS (for styling)
   <br>
   - Tailwind CSS (for utility-first CSS)
   <br>
   - Create React App (for project setup)
   <br>
   <br>

2. Backend
<br>
   -  Mock API using mockAPI.js
     <br>
     <br>

---
<br>
#### Features:
<br>

1. User Management
<br>
View a list of users with details like username, role, and status (Active/Inactive).
<br>
Add new users with a username, role, and status.
<br>
Edit existing user details, including changing roles or updating the status.
<br>
Delete users with a confirmation prompt to prevent accidental removal.
<br>
Search and filter users by role or username.
<br>
<br>
2. Role Management
<br>
View a list of roles with associated permissions.
<br>
Add and edit roles with customizable permissions (e.g., Read, Write, Delete).
<br>
Delete roles with the ability to reassign associated users to another role.
<br>
<br>

3. Permission Management
<br>
Dynamically assign or modify permissions (Read, Write, Delete) for each role.
<br>
Display role-based permissions in an intuitive, hierarchical structure.
<br>
<br>

4. Additional Features
<br>
Responsive design for seamless usability on desktop and mobile devices.
<br>
Confirmation dialogs for sensitive actions (e.g., deleting users or roles).
<br>
Interactive feedback, such as success/error messages and loading indicators.
<br>
Mock API integration to simulate server calls for CRUD operations.
<br>
<br>

---
<br>

#### Flow Diagram:
<br>

1. User Interaction:
<br>
   - User clicks a link in the sidebar.
<br>
   - The corresponding route is matched in the `Routes` component.
<br>
<br>

2. Routing Process:
<br>
   - `App` component handles route matching and renders the correct page.
<br>
   - The `useLocation` hook identifies the current path and passes it to the `Sidebar`.
<br>
<br>
3. Sidebar Highlighting:
<br>
   - The `Sidebar` compares the current path with its links.
<br>
   - Highlights the active link with unique styling.
<br>
4. Content Display:
<br>
   - The selected page component (e.g., `Users`, `Roles`) is rendered in the main content area.
<br>
<br>
---
<br>
#### Possible Extensions:
<br>
1. Authentication:
<br>
   - Add login functionality with role-based access control (RBAC).
<br>

2. Dynamic Sidebar Items:
<br>
   - Fetch sidebar links dynamically from an API or configuration file.
<br>

3. State Management:
<br>
   - Use a state management library (e.g., Redux or Context API) to manage global states like user roles and permissions.
<br>

4. API Integration:
<br>
   - Connect the pages to a backend API to fetch real-time data (e.g., list of users, roles).
<br>

5. Theme Customization:
<br>
   - Add a light/dark theme toggle feature.
<br>
<br>
---
<br>
#### Screenshots:
<br>
![alt text](Dashboard.png)
<br>
![alt text](Users.png)
<br>
![alt text](roles.png)
<br>
![alt text](Permisisons.png)
<br>
<br>

#### Future Enhancements
<br>
   - Implement real API integration with authentication.
   <br>
   - Add bulk actions for users and roles (e.g., bulk delete or update).
   <br>
   - Include an activity log for tracking administrative actions.
   <br>
   - Implement permission inheritance for role hierarchies.
<br>
<br>
#### Contact
<br>
For any queries or feedback, please contact:
<br>
   - Mahwish Rizwan: mahwishrzwn@gmail.com
<br>
   - GitHub Profile: https://github.com/MahwishRizwan
<br>
<br>
#### Conclusion:
<br>
This Admin Dashboard showcases the implementation of a simple yet effective navigation system with active route highlighting. It emphasizes clean UI/UX design principles and serves as a foundation for building more complex applications, such as admin panels, content management systems, or role-based dashboards.
<br>
<br>




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 
 
