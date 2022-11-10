import React from "react";
import "../../App.css";

const Blogs = () => {
  return (
    <div className="App  w-50 gap-5">
      <h2 className="text-3xl m-5">
        Q1:What are the Difference between SQL and NoSQL?
      </h2>
      <p className="my-auto">
        Ans: SQL is the programming language used to interface with relational
        databases. (Relational databases model data as records in rows and
        tables with logical links between them). NoSQL is a class of DBMs that
        are non-relational and generally do not use SQL.
      </p>

      <h2 className="text-3xl m-5">Q2:What is JWT, and how does it work?</h2>
      <p>
        Ans:What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
        standard (RFC 7519) for securely transmitting information between
        parties as JSON object. It is compact, readable and digitally signed
        using a private key/ or a public key pair by the Identity Provider(IdP).
      </p>

      <h2 className="text-3xl m-5">
        Q3:What is the difference between javascript and NodeJS?
      </h2>
      <p>
        Ans:JavaScript is a simple programming language that can be used with
        any browser that has the JavaScript Engine installed. Node. js, on the
        other hand, is an interpreter or execution environment for the
        JavaScript programming language.
      </p>
      <h2 className="text-3xl m-5">
        Q4:How does NodeJS handle multiple requests at the same time?
      </h2>
      <p>
        How NodeJS handle multiple client requests? NodeJS receives multiple
        client requests and places them into EventQueue. NodeJS is built with
        the concept of event-driven architecture. NodeJS has its own EventLoop
        which is an infinite loop that receives requests and processes them
      </p>
    </div>
  );
};

export default Blogs;
