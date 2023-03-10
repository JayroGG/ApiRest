<h1>Mongo DB REST API with Node.js and Express</h1>
<p>This project is a REST API built with Node.js, Express, and MongoDB. It is designed to provide a simple way to store and retrieve data from a MongoDB database.</p>
<h2>Getting Started</h2>
<p>To get started with this project, you will need to have the following installed on your machine:</p>
<ul>
  <li>Node.js</li>
  <li>MongoDB</li>
</ul>
<p>Then, follow these steps:</p>
<ol>
  <li>Clone this repository to your local machine.</li>
  <li>Create a <code>.env</code> file in the root directory of the project and add your MongoDB connection string as <code>DB_URL</code>.</li>
  <li>Install the dependencies by running <code>npm install</code>.</li>
  <li>Start the server by running <code>npm start</code>.</li>
  <li>Open a web browser and go to <code>http://localhost:&lt;port&gt;/users</code> to access the API.</li>
</ol>
<h2>Dependencies</h2>
<p>This project depends on the following modules:</p>
<ul>
  <li>express: a fast, unopinionated web framework for Node.js</li>
  <li>mongoose: a MongoDB object modeling tool designed to work in an asynchronous environment</li>
  <li>dotenv: a zero-dependency module that loads environment variables from a .env file</li>
</ul>
<h2>Routes</h2>
<p>This project has the following REST endpoints:</p>
<ul>
  <li><code>GET /users</code>: get all users</li>
  <li><code>POST /users</code>: create a new user</li>
  <li><code>GET /users/:id</code>: get a user by ID</li>
  <li><code>PUT /users/:id</code>: update a user by ID</li>
  <li><code>DELETE /users/:id</code>: delete a user by ID</li>
</ul>
<h2>Contributing</h2>
<p>If you want to contribute to this project, feel free to open a pull request.</p>
<h2>License</h2>
<p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_new">MIT License</a>.</p>
