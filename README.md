## Installing :wrench:

- Copy the url https://github.com/charitha95/cocktail-app.git
- Do a `git clone` with the url.
- Run `npm i` in terminal to install modules.
  <br/><br/>

## Running and testing the project :runner:

- Run `npm run dev` in terminal to run the project. This will spin up the app.<br/>
- Uni Test `npm run test` in terminal to run the unit tests. This will run all unit tests inside the unit folder.
  <br/><br/>

## 1. Introduction
The purpose of the project is to evaluate the skills and knowledge of frontend development while focusing on architecting a frontend application with best practices. The project aimed to showcase proficiency in designing and implementing a robust, efficient, and user-friendly frontend application.

The project was designed to assess the ability to apply industry-standard techniques and principles in frontend development, including but not limited to:

- Implementing clean and modular code structure for maintainability and scalability.
- Adhering to coding best practices, including proper code organization, naming conventions, and documentation.
- Utilizing appropriate design patterns and architectural principles to ensure a well-structured application.
- Incorporating responsive design principles to ensure compatibility across different devices and screen sizes.
- Implementing efficient data fetching and management techniques, such as handling API requests, caching, and data synchronization.
- Implementing effective state management solution with context api and save draft in local storage.
- Incorporating appropriate UI/UX design principles to create an intuitive and visually appealing user interface.
- Conducting thorough testing and debugging to ensure the functionality and reliability of the application.
  <br/><br/>

## 2. Methodology

The project followed a modern frontend development approach to ensure a robust and efficient implementation. `React` was chosen as the framework, coupled with `Vite` for fast development and optimized bundling. `Vitest` was used for comprehensive unit testing, while `SCSS modules` enabled modular and scoped styling. The `Context API` facilitated centralized state management, and `Husky` ensured code quality through pre-commit hooks. `TypeScript`, `linting`, `prettier`, and formatting tools enhanced code analysis and consistency. `Error boundaries` were implemented to handle errors gracefully and provide a seamless user experience. These methodologies and tools collectively aimed to achieve high code quality and a well-structured frontend architecture.

- vite `^4.3.9`
- typescript `^5.0.4`
- eslint `^8.41.0`
- prettier `^2.8.8`
- husky `^8.0.0`
- react-router-dom `^6.11.2`
- sass `^1.62.1`
- testing library `^14.0.0`
- vitest `^0.31.4`
  <br/><br/>

## 3. Implementation

The project implemented `custom hooks` for data fetching, which enhanced code reusability and modularity. These hooks were utilized to retrieve data from external APIs and handle asynchronous operations effectively. Additionally, local storage was leveraged to persist favorites data, allowing users to access their saved drinks across sessions.

The project utilized the `Context API` as a centralized state management system to effectively manage the user's favorite drinks. By adopting the Context API, the application achieved a seamless flow of data across components without the need for `prop drilling`.

To optimize performance, `refs` were used in certain scenarios instead of `useState`. This choice helped improve efficiency by avoiding unnecessary re-rendering when managing certain mutable values.

In order to enhance user experience and minimize API calls, `caching` mechanisms were implemented for search functionality. API responses for search queries were cached to avoid redundant requests for the same search term, providing faster results and reducing server load.

`Error handling` played a crucial role in the project, ensuring a smooth user experience even in the face of unexpected errors. The application implemented `error boundaries` to catch and handle errors at the component level, preventing them from propagating and crashing the entire application
  <br/><br/>

## 4. Testing and Evaluation

Testing played a crucial role in ensuring the functionality and reliability of the frontend application. The project adopted the `vitest` framework for unit testing, allowing comprehensive testing coverage for almost all components.

Unit tests were written to verify the expected behavior of `individual components`, ensuring that they functioned correctly in isolation. Mocking techniques were employed to simulate the behavior of `functions`, `contexts`, and `custom hooks`, enabling thorough testing of component interactions.

The tests focused on various aspects, including user interactions, API requests, state management, and edge cases. This iterative approach ensured a high-quality application, enhancing the overall user experience and minimizing the risk of critical bugs or regressions.
 <br/><br/>

## 5. Future Enhancements

To further enhance the frontend application, several potential areas of improvement can be explored. These include the implementation of `lazy loading` and dynamic loading techniques, `virtualization` for search results, and `snapshot testing` for pages.

`Lazy loading` can significantly improve the application's performance by loading content and resources on-demand. By employing techniques such as code splitting and lazy loading of components, the initial page load time can be reduced, allowing for a smoother user experience. Additionally, dynamic loading of data, such as fetching additional search results as the user scrolls, can optimize network usage and improve the perceived performance of the application.

`Virtualization` is another technique that can improve the rendering efficiency and responsiveness of long lists or grids, such as search results. By rendering only the visible portion of the list and dynamically loading additional items as the user scrolls, virtualization reduces the memory footprint and enhances the application's performance, particularly when dealing with large datasets.

`Snapshot testing` for pages can be introduced to ensure the visual consistency of the application across different releases. By taking snapshots of rendered pages and comparing them with reference snapshots, any unintended visual changes or regressions can be quickly identified and addressed, ensuring the application maintains a consistent and visually appealing user interface.

By incorporating these future enhancements, the frontend application can further optimize performance, improve user experience, and maintain a high level of quality and reliability. These enhancements can be prioritized and implemented in subsequent iterations to continually enhance the application's capabilities.