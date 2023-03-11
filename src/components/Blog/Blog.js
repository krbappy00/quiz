import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="bg-gray-200 p-12 rounded-lg">
          <h1 className="text-center text-3xl mb-6">What is React.js?</h1>
          <p className="text-justify">
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook. It's used for building interactive
            user interfaces and web applications quickly and efficiently with
            significantly less code than you would with vanilla JavaScript. In
            React, you develop your applications by creating reusable components
            that you can think of as independent Lego blocks. These components
            are individual pieces of a final interface, which, when assembled,
            form the application's entire user interface. React's primary role
            in an application is to handle the view layer of that application
            just like the V in a model-view-controller (MVC) pattern by
            providing the best and most efficient rendering execution. Rather
            than dealing with the whole user interface as a single unit,
            React.js encourages developers to separate these complex UIs into
            individual reusable components that form the building blocks of the
            whole UI. In doing so, the ReactJS framework combines the speed and
            efficiency of JavaScript with a more efficient method of
            manipulating the DOM to render web pages faster and create highly
            dynamic and responsive web applications.
          </p>
        </div>
        <div className="bg-gray-200 p-12 rounded-lg mt-10">
          <h1 className="text-center text-3xl mb-6">WHAT IS CONTEXT API?</h1>
          <p>
            Context API can solve many problems that modern applications face,
            related to state management, for example, props drilling. Many
            solutions can solve state management issues and props drilling, but
            they may increase your build size and compromise your app
            performance. Context API is a React built-in feature, so we don't
            have to worry about performance overhead and library installing
            issues. The props drilling problem occurs when you pass a prop
            somewhere down the tree. When a project grows, data passing through
            props becomes chaotic, making the code more vulnerable and complex.
            To tackle this problem, we use Context API.{" "}
          </p>
          <p>
            1. The Context API helps share data between components which you
            can't easily share with props, for example, complex data objects.{" "}
          </p>
          <p>
            2. React Context API provides a way to send data like userid, auth,
            and theme data through the component tree without sending any props
            manually at every level.{" "}
          </p>
          <p>
            3. We can also share specific states with multiple components
            instead through props manually. In some use cases, ideal for
            theming, localization, authentication etc.
          </p>
        </div>
        <div className="bg-gray-200 p-12 rounded-lg mt-10">
          <h1 className="text-center text-3xl mb-6">React useRef Hook</h1>
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          <h2 className="text-center text-3xl mb-6">What is useRef?</h2>
          <p>
            One of the various hooks included in React is the useRef hook; it is
            used to reference an object inside a functional component and
            preserves the referenced object's state between re-renders. useRef
            has a property called "current" used to retrieve the value of the
            referenced object at any time while also accepting an initial value
            as an argument. You can change the value of a referenced object by
            updating the current value.
          </p>
          <h2 className="text-justify text-xl mt-4 mb-2 underline">
            Using Ref to Access DOM Elements
          </h2>
          <p>
            Having in mind that DOM elements are also objects, we can reference
            them using useRef. But now, we need to make use of another player
            called ref. ref is an HTML attribute that assigns a referenced
            object to a DOM element.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
