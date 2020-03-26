import { Router } from 'express';
import passport from 'passport';
import Controller from '../controllers';
import cache from '../middleware/cacheMiddle';

const route = Router();

export default (app) => {
  app.use('/', route);
  app.use(passport.initialize());

  app.get('/users', cache, Controller.UserCtrl.getAllUsers);
  app.get('/users/:userId', cache, Controller.UserCtrl.getSpecificUser);
  app.patch(
    '/users/:userId',
    passport.authenticate('jwt'),
    Controller.UserCtrl.updateUser,
  );
  app.delete(
    '/users/:userId',
    // passport.authenticate('jwt'),
    Controller.UserCtrl.deleteUser,
  );
  app.post('/users/emailverification', Controller.UserCtrl.verifyEmail);
  app.get('/users/resetpassword/:emailToken', Controller.UserCtrl.updateUser);
};
