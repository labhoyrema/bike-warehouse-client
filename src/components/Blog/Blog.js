import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <h2>Difference between javascript and nodejs ?</h2>
      <p>
        JavaScript is a programming language, which runs in web browsers.
        Whereas Node.js is an interpreter or running environment for JavaScript,
        which holds a lot of requiring libraries and all. JavaScript is
        basically one standard defining programming language; it can run any
        browser with a default browser running environment. It is a very strong
        language normally used for a web application on any verification or any
        specific business logic.
      </p>

      <h2>When should you use nodejs and when should you use mongodb ?</h2>
      <p>
        Nodejs is a Javascript engine that you can write any application you
        want with (by programming in the Javascript language). It runs your
        Javascript code. Most commonly, it is used to build servers that can
        respond to web requests, though it can be used for lots of other types
        of code too. MongoDB is a database engine. Code within some application
        or server uses MongoDB to save, query or update data in a database.
        There are many web servers built with nodejs that will then use MongoDB
        for storing data.
      </p>
      <h2>Differences between sql and nosql databases.?</h2>
      <p>
        SQL is the programming language used to interface with relational
        databases. (Relational databases model data as records in rows and
        tables with logical links between them). NoSQL is a class of DBMs that
        are non-relational and generally do not use SQL.
      </p>
    </div>
  );
};

export default Blog;
