# Munch React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contact us at: Jasonj1@uw.edu or bvt@uw.edu

## Continuing the Project

### Background

* Project uses React + Typescript
* Project was developed with only mobile view in mind
 * Mainly due to time constraints since we only had time for a mobile view prototype
 * View is not entirely responsive and does not display properly for desktop View
 * To view web app properly:
   * Use Google Chrome
   * Inspect the window to open dev tools
   * Change view to mobile
   * Choose iPhone 12 Pro as viewing device
* Due to varying levels of experience, there is a mixture of styling techniques/frameworks involved
 * Bootstrap classes
 * Material UI
 * Inline styling
* Uses React Router to organize pages

### Structure

* Multi-page structure
 * Uses React Router to organize and navigate between pages/components
* Multiple directories to organize types of files
  * Components contains all the React components
  * Constant contains files to house constants such as URL's and strings
  * Theme contains themes for Material UI
  * Types contains types for Typescript
  * Util contains utility classes/functions like ApiUtil that handles the logic of calling backend endpoints

### Next Steps

* Refactor the code to have consistent styling
  * Replace inline styles with css classes or bootstrap classes
  * Incorporate Material UI as much as possible
* Re-host the project
  * Originally hosted on Azure but will be taken down by end of Spring 2023 quarter per handoff procedure
  * Recommend re-hosting on Azure
    * Process is fairly simple
      - Azure provides a [tutorial](https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react) on hosting with a Github repo
    * Free with UW account
* Add new features
  * Use React Router to add new pages/components


## Links

* Hosted web app: https://victorious-dune-0e5eed11e.2.azurestaticapps.net/
* Hosted backend: https://munch.azurewebsites.net/
* Backend repository: https://github.com/bvt167/munch-back-end
* Final presentation: https://docs.google.com/presentation/d/1-EqW145BVskgbnMoF0iMW0xGzqYMrucp8-4sMCL25og/edit#slide=id.p

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
