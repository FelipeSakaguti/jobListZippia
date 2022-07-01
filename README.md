```
Goal:
Creating a simple web website to show some jobs from API.

Technologies:
Required: Node.js, React
Nice to have: Next.js, Server Side Rendering, TypeScript

Details:
* Create a website with Node.js, this website just needs one page, URL: /test/jobs/
* On this page, connect to an API service URL where you will get a json with a list of jobs https://www.zippia.com/api/jobs/ with following parameters:
POST  https://www.zippia.com/api/jobs/
Request payload:
{
"companySkills": true,
"dismissedListingHashes": [],
"fetchJobDesc": true,
"jobTitle": "Business Analyst",
"locations": [],
"numJobs": 20,
"previousListingHashes": []
}

* List the first 10 jobs with cards, you should display the job title (jobTitle), the job company (companyName), and the job description (shortDesc).
* Add a button that will offer the jobs by company name.
* Add a button that will display only the jobs published in the last 7 days.
* Display the jobs as a list or as a carousel (slider).
* Try to add some styles to the elements of the jobs.
* Try to make it responsive (supports desktops, mobile phones and tablets).
* Do SSR (Server Side Rendering) for the first screen.
* Try to add as many comments as you could explaining your code.
* Please deploy your code to https://vercel.com/, and then send the page URL to us.
* You can take as design reference: https://www.zippia.com/developer-jobs/jobs/
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
