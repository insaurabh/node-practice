### Some common or must-know concepts on node.js

---

0. Pre-requisite : [Core JS Concepts](https://nodejs.dev/en/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs/)

   1. [x] Install NodeJS
   2. [x] Create a NodeJS project
   3. [x] Write hello world

1. **Core Node.js Concepts:**

   - [x] What is Node.js, and how does it differ from traditional JavaScript?
   - [x] Explain the [event-driven](https://youtu.be/rJHTK2TfZ1I?si=IklachFiNA-zsyd8) architecture, [node events](https://nodejs.org/dist/latest-v20.x/docs/api/events.html) non-blocking I/O model of Node.js. [Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking)
   - [x] Can you describe the Node.js event loop and its significance?
   - [x] Explore [timers](https://nodejs.org/api/timers.html)

   - [x] File handling
     - [x] Create a file, write some data, in sync and async mode
     - [x] Create folders and write some data

- Explore some in-built methods
  - [ ] node: http
  - [ ] node: url
  - [ ] node: crypto
  - [ ] node: fs/promises
  - [ ] node: events
  - [ ] node:util
- Create Server
  - [x] Create server
  - [x] Do a CRUD operation to file

2. **Asynchronous Programming:**

   - [ ] How do you handle asynchronous operations in Node.js?
   - [x] Explain callbacks, Promises, and async/await. When would you use each of them?
     - [x] Can `node: fs/promises` have any relation here?
   - [x] What is callback hell, and how can it be mitigated?

3. **Modules and Package Management:**

   - [ ] How do you organize and structure a Node.js application?
   - [x] What is the CommonJS module system, and how does it work?

     - [x] [modules](https://nodejs.dev/en/api/v18/modules/)
     - [x] How they work '/', './', or '../'
     - [x] Any [difference](https://nodejs.dev/en/api/v18/modules/#file-modules) when we call a file as './someModule.js' or 'someFile.js'

   - [x] Describe the use of npm (Node Package Manager) in managing dependencies.

4. **Express.js:**

   - [ ] What are its main features and advantages?
   - [ ] Explain middleware in Express.js work on
     - [ ] Authentication middleware
     - [ ] Check headers
     - [ ] Check headers
   - [ ] Handle routing in an Express.js application.

5. **Error Handling:**

   - [ ] What are some common error-handling techniques in Node.js applications?
   - [ ] How can unhandled exceptions be caught and handled gracefully?

6. **Security:**

   - [ ] What are the security best practices for Node.js applications?
   - [ ] How can you prevent common security vulnerabilities like SQL injection and XSS attacks?
   - [ ] Have you worked with authentication and authorization in Node.js applications?

7. **Database Interaction:**

   - Describe your experience with databases in Node.js. Which databases have you used?
   - Explain the differences between SQL and NoSQL databases, and when you might choose one over the other.
   - How do you perform database queries asynchronously?

8. **Testing and Debugging:**

   - What testing frameworks and libraries have you used in Node.js development?
   - How do you write unit tests for Node.js applications?
   - What debugging tools and techniques do you use?

9. **Performance Optimization:**

   - How would you identify and address performance bottlenecks in a Node.js application?
   - Have you used any profiling or monitoring tools for Node.js applications?

10. **Project ( Hosted somewhere ):**

    - What was the most challenging technical problem you encountered, and how did you solve it?

11. [Node best practices](https://github.com/goldbergyoni/nodebestpractices)
