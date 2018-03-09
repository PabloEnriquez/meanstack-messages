Application developed using Angular 2, NodeJS and MongoDB.

Description
Message service for authenticated users. 
Sign in, sign up and logout. 
Create messages, edit and delete(only the ones you have created) messages.

Deployment =>

Install dependencies
run: npm install inside the project directory.

Have mongo installed. Then run: ./mongod (get started) and ./mongo (manage databases) in terminal windows. 
The database is node-angular (use node-angular: for use in ./mongo)

Then for the application run:
npm start
npm run build
In the project directory.

For online use visit:  https://messageservice-deployment.herokuapp.com/ 
To see/use the application running online.
Instructions:
Sign up. You can create multiple users, but emails have to be unique.
Then create, edit and delete messages. Logout.
Sign in as other users to see that you can only modify your own messages, and only see what others have written.
