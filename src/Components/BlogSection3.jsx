import React, { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const BlogSection3 = () => {
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
        <div className="blog-section">
          <div className="blog">
            <h3 className="text-3xl font-bold mb-5">
              CRUD Operations in Web Development
            </h3>
            <img
              className="w-3/5 ml-20 lg:ml-60 mb-5 mt-5"
              src="https://i.ibb.co/wsKr5fq/1-Wx-JYUNOWc-V1-ZDPjiw-Ef-Bb-A.jpg"
              alt=""
            />
            <p className="text-xl mb-3">
              CRUD stands for Create, Read, Update, and Delete. It's a set of
              basic operations commonly used in database and web development to
              manage the data stored in a system.
            </p>
            <p>
              <strong className="text-lg mb-3">Create:</strong> This operation
              involves adding new data records to the database. For example,
              adding a new user to a user database, or inserting a new entry
              into a list of products.
            </p>
            <p>
              <strong className="text-lg mb-3">Read:</strong> This operation
              involves retrieving existing data records from the database. For
              instance, fetching information about a particular user from the
              user database, or displaying a list of all products available in
              the system.
            </p>
            <p>
              <strong className="text-lg mb-3">Update:</strong> This operation
              involves modifying existing data records in the database. This
              could be changing the details of a user, updating the price of a
              product, or editing any other information stored in the system.
            </p>
            <p>
              <strong className="text-lg mb-3">Delete:</strong> This operation
              involves removing existing data records from the database. For
              example, deleting a user account from the user database, or
              removing a product from the list of available products.
            </p>
            <p className="text-xl mt-5 mb-3">
              CRUD operations are fundamental to most database-driven
              applications and are often supported by various frameworks and
              libraries in software development. They provide a standardized way
              to interact with and manipulate data within a system.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogSection3;
