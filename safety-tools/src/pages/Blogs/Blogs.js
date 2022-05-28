import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="blogs-container">
        <div className="blog">
          <h3>How will you improve the performance of a React Application?</h3>
          <br />
          <h5>
            <strong>
              Performance of a React Application can be improved by-
            </strong>
          </h5>
          <p>
            Keeping component state local where necessary. <br />
            Memoizing React components to prevent unnecessary re-renders. <br />
            Code-splitting in React using dynamic import <br />
            Windowing or list virtualization in React. <br />
            Lazy loading images in React.
          </p>
        </div>
        <div className="blog">
          <h3>
            What are the different ways to manage a state in a React
            application?
          </h3>
          <br />
          <h5>
            <strong>We can manage a state in a React application with-</strong>
          </h5>
          <p>
            <li>Useing useReducer for Complex State</li>
            <li>Using Custom Hooks</li>
            <li>Using Context API</li>
            <li>Using Data Fetching Libraries</li>
            <li>Using localStorage and URL params</li>
          </p>
        </div>
        <div className="blog">
          <h3>How does prototypical inheritance work?</h3>
          <p>
            prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function.
          </p>
        </div>
        <div className="blog">
          <h3>
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </h3>
          <p>
            setState() enqueues changes to the component state and tells React
            that this component and its children need to be re-rendered with the
            updated state. This is the primary method use to update the user
            interface in response to event handlers and server responses.
          </p>
        </div>
        <div className="blog">
          <h3>
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h3>
          <p>const result = products.find(product = product.name === "name");</p>
        </div>
        <div className="blog">
          <h3>What is a unit test? Why should write unit tests?</h3>
          <p>
            Unit tests are typically automated tests written and run by software
            developers to ensure that a section of an application meets its
            design and behaves as intended. In procedural programming, a unit
            could be an entire module, but it is more commonly an individual
            function or procedure. <br />
            One of the benefits of unit tests is that they isolate a function,
            class or method and only test that piece of code. Higher quality
            individual components create overall system resiliency. Thus, the
            result is reliable code. Unit tests also change the nature of the
            debugging process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
