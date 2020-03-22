import { Router } from 'express';
import TestRoute from './testRoute';
import UserRoute from './userRoute';
import AuthRoute from './authRoute';
import SwaggerRoute from './swaggerRoute';

// Routing
// Here the import/export of all routes
export default () => {
  const app = Router();
  // Routes passing app as Router()
  // That initialize as a route for the API endpoint
  TestRoute(app);
  UserRoute(app);
  AuthRoute(app);
  SwaggerRoute(app);

  return app;
};
