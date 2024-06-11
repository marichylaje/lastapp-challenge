# LastApp: Web Application 

## Overview
LastApp is a web application designed primarily for mobile users, enabling them to place orders from a variety of restaurants organized by proximity. Users can select a restaurant from a list of associated places, view the available products, choose their desired items, and complete their purchase seamlessly. This mobile-first application ensures a smooth and user-friendly experience, making it easy for users to enjoy their favorite meals from nearby restaurants.

### Application Structure
The application is structured using a page-based approach facilitated by react-router-dom, which helps maintain the user's restaurant choise even after a page reload.

### Component and Styling
LastApp utilizes pre-designed components provided by PrimeReact, which are then styled using Styled Components and TailwindCSS. This combination allows for a flexible and aesthetically pleasing design, ensuring a consistent look and feel throughout the application.

### State Management
Given the small size of the application, state management is efficiently handled using ContextAPI. Each store/context is tailored to specific parts of the application, providing a modular and organized approach to state management. This ensures that each section of the app has access to the relevant state data it requires, promoting maintainability and scalability.


## Architecture Baseline

The project follows a modular architecture that focuses on organizing and reusing components. It is designed to be highly modular and scalable, enabling efficient development and easy maintainability.

### Reusable Components

The project uses a component composed structure, where each component is designed to fulfill a specific function and can be easily reused in different parts of the application. This promotes code reusability and facilitates the creation of consistent and aesthetically pleasing user interfaces.

### Modular Organization

Different functional aspects of the project, such as routes, contexts, styles, and utilities, are organized into separate modules to enhance code readability and maintainability. This allows developers to work more efficiently and collaboratively, as each module focuses on a specific task.

### Flexible Configuration

The project structure is designed to be highly configurable and adaptable to changing development needs. Configuration files are organized in a neat and well-documented manner, making it easy to customize and integrate with other tools and technologies.

### Scalability and Maintainability

By following a modular and component-focused architecture, the project is prepared to grow and evolve over time. This structure facilitates the addition of new features and the implementation of code changes without compromising project stability or quality.

---

This architectural approach provides a solid foundation for the development of modern web applications and enables effective collaboration among development team members.


## Project Structure

The project's structure is organized within the `src` directory, which contains the following file hierarchy:

- animations
- App
- components
  - ComponentExample
    - index.tsx
    - styles.ts
- constants
- contexts
- hooks
- pages
  - PageExample
    - index.tsx
    - styles.ts
- routes
- styles
- types
- utils

The `components` and `pages` directories are specialized folders where reusable UI components and page-level components reside, respectively. Each component or page folder contains an index.tsx file, which serves as the default export point. This structure simplifies importing by allowing direct imports without specifying the file name, such as: import ComponentExample from 'components/ComponentExample'.

If a component requires sub-components that are only used within the parent component, they can be organized within a sub-folder structure. This approach reduces clutter within the components directory, enhancing readability and navigation.

Styling files are not exported as default to distinguish them clearly from React component files. This practice aids in maintaining a clear separation between component logic and styling concerns.

We strongly recommend to have each file reduced to >100 lines of code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Will run and execute throw webpack to optimize the application

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

To test the application, it's using Jest with React-Testing-Library
The focus for testing the application will be
 - tests the utils or computational functions, to avoid side effects while development

We encourage to avoid snapshots

TODO: add integrational tests to mimic the user interaction across the app

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance using Webpack

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

The lint script is responsible for running ESLint, a static code analysis tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It helps ensure that your codebase follows the defined coding standards, style guidelines, and best practices specified in your ESLint configuration. By running this script, you can catch potential errors, enforce consistent coding conventions, and maintain code quality throughout your project.

TODO: Integrate this into the pipeline as a checker. It needs to pass in order to merge into the Developer branch.

### `npm run format`

The format script utilizes Prettier, a code formatter, to automatically format your code according to the rules specified in your Prettier configuration file. This script ensures that your code maintains a consistent and readable style by applying indentation, line length, and other formatting rules defined in your configuration. By running the format script regularly, you can keep your codebase clean, improve readability, and facilitate collaboration among team members.

TODO: Ensure that this script is set to run automatically on push events.


## TODO

- Request designers to change the secondary color to improve Accesibility metrics
- Create Pipelines on push to run prettier and eslint to improve codebase
- Create integrational tests
- Improve performance, and image sizes from server
- Modularize CSS
- Improve final animation, add total
- Add more context stores, to be able to obtain "total" and other data
- Save on cache images
- Test contextAPI properly
- Generate Toaster to handle errors as global component
- Work on manifest
- Add Dependency section on Readme
- Move from ContextAPI to Effector to improve Performance using an Event Based centralized store mannager
- Move from CRA to Next.js to improve FCP 
- Save user's selection on Local Storage in case of reload page

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
