import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import "dotenv/config";
import session from "express-session";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';


// const express = require('express')
const app = express()
app.use(cors({
    credentials: true,
    // origin: process.env.NETLIFY_URL || "http://localhost:3000",
    origin: "*",

  }
 ));                    // make sure cors is used right after creating the app
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
app.use(session(sessionOptions));
  
app.use(express.json());
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
// EnrollmentRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

Hello(app)

app.listen(4000);
// app.listen(process.env.PORT || 4000)
