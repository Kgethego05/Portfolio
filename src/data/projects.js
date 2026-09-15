// Identity Service
import identityRegisterPage from "../assets/images/identityService/registerPage.png";
import identityLoginPage from "../assets/images/identityService/loginPage.png";

// Text-to-SQL AI Data Analyst
import HomePage from "../assets/images/textToSql/homePage.png";
import SignInPage from "../assets/images/textToSql/signInPage.png";
import SignUpPage from "../assets/images/textToSql/signUpPage.png";
import DashboardPage1 from "../assets/images/textToSql/dashboardPage1.png";
import DashboardPage2 from "../assets/images/textToSql/dashboardPage2.png";
import DashboardPage3 from "../assets/images/textToSql/dashboardPage3.png";
import DashboardPage4 from "../assets/images/textToSql/dashboardPage4.png";
import DashboardPage5 from "../assets/images/textToSql/dashboardPage5.png"; 

// AI BI Dashboard / Excel Upload
import excelHomePage from "../assets/images/excelUpload/homePage.png";
import excelSignInPage from "../assets/images/excelUpload/signInPage.png";
import excelSignUpPage from "../assets/images/excelUpload/signUpPage.png";
import excelDashboardPage1 from "../assets/images/excelUpload/dashboardPage1.png";
import excelDashboardPage2 from "../assets/images/excelUpload/dashboardPage2.png";
import excelDashboardPage3 from "../assets/images/excelUpload/dashboardPage3.png";
import excelDashboardPage4 from "../assets/images/excelUpload/dashboardPage4.png";
import excelDashboardPage5 from "../assets/images/excelUpload/dashboardPage5.png";
import excelDashboardPage6 from "../assets/images/excelUpload/dashboardPage6.png";

const projects = [


    {
        images:[
            identityRegisterPage,
            identityLoginPage
        ],


        title:"Identity Service",


        description:
        "A centralized authentication microservice built with Spring Boot that provides secure user registration, login and JWT authentication for multiple applications.",


        frontend:[
            "JavaScript",
            "React",
            "Tailwind CSS"
        ],


        backend:[
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "PostgreSQL"
        ],


        status:"In Progress",


        github:"https://github.com/Kgethego05/identity-service",


        demo:""
    },





    {
        images:[
            HomePage,
            SignInPage,
            SignUpPage,
            DashboardPage1,
            DashboardPage2,
            DashboardPage3,
            DashboardPage4,
            DashboardPage5
        ],


        title:"AI SQL Analyst",


        description:
        "An AI-powered application that allows users to query a PostgreSQL database using plain English. Gemini converts the user's question into an SQL query, executes it against the database, and displays the generated SQL and query results. Login and registration are handled through the centralized Identity Service.",


        frontend:[
            "JavaScript",
            "React",
            "Tailwind CSS"
        ],


        backend:[
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Gemini API"
        ],


        status:"In Progress",


        github:"https://github.com/Kgethego05/ai-sql-analyst",


        demo:""
    },






    {
        images:[
            excelHomePage,
            excelSignInPage,
            excelSignUpPage,
            excelDashboardPage1,
            excelDashboardPage2,
            excelDashboardPage3,
            excelDashboardPage4,
            excelDashboardPage5,
            excelDashboardPage6
        ],


        title:"AI BI Dashboard",


        description:
        "An AI-powered dashboard that allows users to upload Excel files and analyze their data. The application processes the uploaded data and presents the results through KPIs, charts, tables, and AI-generated insights. Login and registration are handled through the centralized Identity Service",

        frontend:[
            "JavaScript",
            "React",
            "Tailwind CSS"
        ],


        backend:[
            "Node.js",
            "Express.js",
            "PostgreSQL"
        ],


        status:"In Progress",


        github:"https://github.com/Kgethego05/smart-analytics-agent",


        demo:""
    }


];


export default projects;