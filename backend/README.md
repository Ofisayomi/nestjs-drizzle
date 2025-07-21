# **NestJS User Management Backend**

This project is a robust backend application built with NestJS, designed to handle user authentication and management. It supports traditional email/password registration and login, as well as seamless integration with Google Sign-In using OAuth 2.0. Authentication is managed using Passport.js with JWTs for secure, stateless sessions, and user data is persisted in a PostgreSQL database.

## **Table of Contents**

* [Features](https://www.google.com/search?q=%23features)  
* [Technologies Used](https://www.google.com/search?q=%23technologies-used)  
* [Getting Started](https://www.google.com/search?q=%23getting-started)  
  * [Prerequisites](https://www.google.com/search?q=%23prerequisites)  
  * [Installation](https://www.google.com/search?q=%23installation)  
  * [Environment Variables](https://www.google.com/search?q=%23environment-variables)  
  * [Database Setup](https://www.google.com/search?q=%23database-setup)  
  * [Running the Application](https://www.google.com/search?q=%23running-the-application)  
* [Google OAuth Setup](https://www.google.com/search?q=%23google-oauth-setup)  
* [API Endpoints](https://www.google.com/search?q=%23api-endpoints)  
* [Contributing](https://www.google.com/search?q=%23contributing)  
* [License](https://www.google.com/search?q=%23license)

## **Features**

* **Local User Registration:** Users can register with their email and password.  
* **Local User Login:** Authenticate users using their registered email and password.  
* **Google Sign-In (OAuth 2.0):** Allow users to sign in using their Google accounts.  
  * **Account Linking:** Automatically links Google accounts to existing local accounts if the email matches.  
  * **New Google User Registration:** Creates new user accounts for Google sign-ins if no matching email is found.  
* **JWT-Based Authentication:** Secure and stateless authentication using JSON Web Tokens.  
* **Protected Routes:** API endpoints secured with JWTs, requiring authenticated access.  
* **Passport.js Integration:** Leverages Passport.js with passport-local, passport-google-oauth20, and passport-jwt strategies for flexible authentication.  
* **Password Hashing:** Secure storage of local user passwords using bcryptjs.  
* **PostgreSQL Database:** Persistent storage for user data.

## **Technologies Used**

* **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.  
* **TypeScript:** Primary language for development, providing strong typing and improved code quality.  
* **PostgreSQL:** A powerful, open-source relational database system.  
* **Drizzle ORM:** A modern TypeScript ORM for relational databases, providing a type-safe and performant way to interact with your PostgreSQL database.  
* **Passport.js:** Flexible authentication middleware for Node.js.  
  * @nestjs/passport: NestJS integration for Passport.js.  
  * passport-local: Strategy for username/password authentication.  
  * passport-google-oauth20: Strategy for Google OAuth 2.0 authentication.  
  * passport-jwt: Strategy for JWT authentication.  
* **@nestjs/jwt:** NestJS module for JWT creation and verification.  
* **bcryptjs:** Library for password hashing.  
* **dotenv:** For loading environment variables from a .env file.

## **Getting Started**

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

* Node.js (LTS version recommended)  
* npm (Node Package Manager)  
* PostgreSQL database instance

### **Installation**

1. **Clone the repository:**  
   git clone https://github.com/your-username/your-repo-name.git  
   cd your-repo-name

2. **Install dependencies:**  
   npm install

   You will also need to install Drizzle ORM and its PostgreSQL driver:  
   npm install drizzle-orm pg \# or @neondatabase/serverless for Neon  
   npm install \--save-dev drizzle-kit

### **Environment Variables**

Create a .env file in the root of your project and populate it with the following:

\# JWT Configuration  
JWT\_SECRET=your\_super\_secret\_jwt\_key\_here \# Generate a strong, random string  
JWT\_EXPIRATION\_TIME=3600s \# e.g., 1 hour (e.g., "3600s", "1h", "7d")

\# Google OAuth Configuration  
GOOGLE\_CLIENT\_ID=YOUR\_GOOGLE\_CLIENT\_ID\_FROM\_GOOGLE\_CLOUD  
GOOGLE\_CLIENT\_SECRET=YOUR\_GOOGLE\_CLIENT\_SECRET\_FROM\_GOOGLE\_CLOUD  
GOOGLE\_CALLBACK\_URL=http://localhost:3000/api/auth/google/callback \# Adjust port if needed

\# Database Configuration (for Drizzle ORM)  
DATABASE\_URL="postgresql://user:password@localhost:5432/your\_database\_name"

**Important:** Replace placeholder values with your actual credentials and desired settings. For JWT\_SECRET, use a truly random and long string.

### **Database Setup**

1. **Ensure PostgreSQL is running.**  
2. **Create a database:** Create a new database in your PostgreSQL instance (e.g., your\_database\_name).  
3. **Define your Drizzle Schema:** Create your database schema (e.g., src/db/schema.ts) using Drizzle ORM's schema definition API.  
4. **Run Drizzle Migrations:**  
   * **Generate a migration:**  
     npx drizzle-kit generate:pg \--schema=./src/db/schema.ts

   * **Apply migrations to your database:**  
     npx drizzle-kit push:pg \--config=./drizzle.config.ts \# Assuming you have a drizzle.config.ts

     (Alternatively, you might run migrations programmatically within your NestJS application startup using Drizzle's migrate function.)

### **Running the Application**

To run the application in development mode:

npm run start:dev

The server will typically run on http://localhost:3000 (or the PORT specified in your .env file).

## **Google OAuth Setup**

As a reminder, before running the application, ensure you have configured your Google Cloud Project:

1. Go to [Google Cloud Console](https://console.cloud.google.com/).  
2. Create/select a project.  
3. Navigate to **APIs & Services \> Credentials**.  
4. Create an **OAuth client ID** for a **Web application**.  
5. Set **Authorized JavaScript origins** to your frontend URL (e.g., http://localhost:3000).  
6. Set **Authorized Redirect URIs** to your backend callback URL (e.g., http://localhost:3000/api/auth/google/callback).  
7. Copy the generated Client ID and Client Secret into your .env file.

## **API Endpoints**

All API endpoints are prefixed with /api.

| Method | Endpoint | Description \`\`\`  
\<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
\<script src="https://www.google.com/search?q=https://cdn.tailwindcss.com"\>\</script\>  
\<link rel="stylesheet" href="https://www.google.com/search?q=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7QbPyXgOchNTMMg==" crossorigin="anonymous" referrerpolicy="no-referrer" /\>  
\<style\>  
body {  
font-family: "Inter", sans-serif;  
display: flex;  
justify-content: center;  
align-items: center;  
min-height: 100vh;  
background-color: \#f0f2f5;  
}  
.container {  
background-color: white;  
padding: 2.5rem;  
border-radius: 1rem;  
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);  
max-width: 400px;  
width: 100%;  
text-align: center;  
}  
.icon-button {  
display: inline-flex;  
align-items: center;  
justify-content: center;  
padding: 0.75rem 1.5rem;  
border-radius: 0.75rem;  
font-weight: 600;  
transition: all 0.2s ease-in-out;  
cursor: pointer;  
text-decoration: none;  
color: white;  
margin-top: 1.5rem;  
}  
.google-button {  
background-color: \#db4437; /\* Google Red \*/  
box-shadow: 0 4px 10px rgba(219, 68, 55, 0.3);  
}  
.google-button:hover {  
background-color: \#c23321;  
transform: translateY(-2px);  
box-shadow: 0 6px 15px rgba(219, 68, 55, 0.4);  
}  
.google-button i {  
margin-right: 0.75rem;  
}  
h1 {  
color: \#333;  
font-size: 2rem;  
margin-bottom: 1.5rem;  
font-weight: 700;  
}  
p {  
color: \#666;  
margin-bottom: 1rem;  
}  
.error-message {  
color: \#dc2626;  
margin-top: 1rem;  
font-weight: 500;  
}  
.success-message {  
color: \#16a34a;  
margin-top: 1rem;  
font-weight: 500;  
}  
\</style\>  
\<div class="container"\>  
\<h1\>Google Sign-In\</h1\>  
\<p\>Click the button below to sign in with your Google account.\</p\>  
\<a href="http://localhost:3000/api/auth/google" class="icon-button google-button"\>  
\<i class="fa-brands fa-google"\>\</i\> Sign in with Google  
\</a\>  
\<div id="message" class="error-message"\>\</div\>  
\</div\>  
\<script\>  
// Function to parse URL query parameters  
function getQueryParams() {  
const params \= {};  
window.location.search.substring(1).split('&').forEach(param \=\> {  
const parts \= param.split('=');  
params\[decodeURIComponent(parts\[0\])\] \= decodeURIComponent(parts\[1\] || '');  
});  
return params;  
}  
    document.addEventListener('DOMContentLoaded', () \=\> {  
        const messageDiv \= document.getElementById('message');  
        const params \= getQueryParams();

        if (params.error) {  
            messageDiv.textContent \= 'Error: ' \+ (params.message || 'Authentication failed.');  
            messageDiv.classList.remove('success-message');  
            messageDiv.classList.add('error-message');  
        } else if (params.access\_token) {  
            messageDiv.textContent \= 'Successfully logged in with Google\! Token received.';  
            messageDiv.classList.remove('error-message');  
            messageDiv.classList.add('success-message');  
            // You can store the token (e.g., in localStorage) and redirect  
            // localStorage.setItem('jwt\_token', params.access\_token);  
            // window.location.href \= '/dashboard'; // Redirect to a dashboard or profile page  
        }  
    });  
\</script\>  
