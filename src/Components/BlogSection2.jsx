import React, { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

function BlogSection2() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className="sweet-loading flex items-center justify-center h-96">
          <RiseLoader color={"#F2AE02"} size={20} />
        </div>
      )}

      {!loading && (
        <div>
          <h2 className="text-4xl font-bold mb-3">Express.js:</h2>
          <p>
            Express.js is one of the most popular web application frameworks for
            Node.js. Here are some key points about Express.js:
          </p>
          <ul className="mb-5">
            <li>
              <strong className="text-xl">Minimalistic:</strong> Express.js is
              minimalistic and unopinionated, meaning it provides a basic set of
              features for web application development but allows developers the
              flexibility to add additional features as needed.
            </li>
            <li>
              <strong className="text-xl">Middleware:</strong> Express.js uses
              middleware functions to handle requests. Middleware functions are
              functions that have access to the request object (req), the
              response object (res), and the next middleware function in the
              application’s request-response cycle. This allows for a modular
              approach to handling requests.
            </li>
            <li>
              <strong className="text-xl">Routing:</strong> Express.js provides
              a simple and intuitive way to define routes for handling different
              HTTP requests (GET, POST, PUT, DELETE, etc.). Routes are defined
              using HTTP methods and URL patterns.
            </li>
            <li>
              <strong className="text-xl">Template engines:</strong> Express.js
              supports various template engines like EJS, Pug, Handlebars, etc.,
              allowing developers to generate HTML dynamically.
            </li>
            <li>
              <strong className="text-xl">Static file serving:</strong>{" "}
              Express.js can serve static files such as images, CSS files,
              JavaScript files, etc., from a directory on the server.
            </li>
            <li>
              <strong className="text-xl ">Extensibility:</strong> Express.js
              can be extended using middleware and third-party modules, allowing
              developers to add features like authentication, logging, etc.
            </li>
          </ul>
          <img
            data-aos="fade-right"
            className="w-3/5 ml-20 lg:ml-72"
            src="https://i.ibb.co/WxrJbV5/1692105615355.jpg"
            alt=""
          />

          <h2 className="text-4xl font-bold mt-5 mb-3">NestJS:</h2>
          <p>
            NestJS is a progressive Node.js framework for building efficient,
            reliable, and scalable server-side applications. Here's what sets
            NestJS apart:
          </p>
          <ul>
            <li>
              <strong className="text-xl">Modular architecture:</strong> NestJS
              encourages a modular architecture by using modules. Modules are a
              way to organize the application into cohesive blocks of
              functionality. Each module can encapsulate controllers, services,
              and other related components.
            </li>
            <li>
              <strong className="text-xl">Dependency injection:</strong> NestJS
              uses dependency injection to manage the creation and sharing of
              application components. This allows for better modularity,
              testability, and reusability of code.
            </li>
            <li>
              <strong className="text-xl">Decorators and metadata:</strong>{" "}
              NestJS leverages decorators and metadata to define routes, inject
              dependencies, and configure modules. This allows developers to use
              a familiar syntax and structure, especially for those coming from
              frameworks like Angular.
            </li>
            <li>
              <strong className="text-xl">TypeScript support:</strong> NestJS is
              built with TypeScript, which brings static typing and other modern
              language features to Node.js development. TypeScript helps catch
              errors at compile-time and provides better tooling and IDE
              support.
            </li>
            <li>
              <strong className="text-xl">
                Integration with other libraries:
              </strong>{" "}
              NestJS can easily integrate with other libraries and frameworks,
              including Express.js. This means you can use Express.js middleware
              and features within a NestJS application if needed.
            </li>
            <li>
              <strong className="text-xl">
                Built-in support for microservices:
              </strong>{" "}
              NestJS provides built-in support for building microservices-based
              architectures using tools like RabbitMQ, Kafka, and gRPC.
            </li>
          </ul>

          <p>
            Overall, while Express.js provides a more minimalistic and flexible
            approach to building web applications in Node.js, NestJS adds more
            structure, features, and patterns to streamline development,
            particularly for larger and more complex applications. It's a matter
            of preference and project requirements when choosing between the
            two.
          </p>

          <div>
            <h2>Sample Image Section:</h2>
            <img
              data-aos="fade-left"
              className="w-3/5 ml-20 lg:ml-72"
              src="https://i.ibb.co/GnJ5rnB/twitter-card.png"
              alt="Sample Image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BlogSection2;
