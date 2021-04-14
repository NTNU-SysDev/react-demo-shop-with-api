// Set this to the base URL for the backend API
// For example, it could be http://localhost:8080/api if your are testing locally and the backend
// is running on port 8080
// If you use setup with Nginx proxy where the backend is available at the /api url,
// use "/api" as the value for API_URL
// export const API_URL = "/api";
export const API_URL = "http://localhost:8080/api";

// Comment: in real projects you would store this file as a "template" (for example, config.template.js, or .env file)
// and add the real config.js file to .gitignore, because each environment will have different values
// Here we save the config.js in the GIT just to allow a working version out-of-the box
