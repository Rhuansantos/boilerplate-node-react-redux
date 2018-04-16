const glob          = require('glob');
const helmet        = require('helmet');
const bodyParser    = require('body-parser');
const compression   = require('compression');
const exphbs        = require('express-handlebars');
const passport      = require('passport');
const session       = require('express-session');
const path          = require('path');
const cookieParser  = require('cookie-parser');

module.exports = (app) => {
  app.engine('hbs', exphbs({ extname: '.hbs' }));
  app.set('view engine', '.hbs');
  app.set('views', path.join(__dirname, '/views'));
  app.use(helmet());
  app.use(cookieParser());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // passaport config
  app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
  app.use(passport.initialize());
  // include all the controllers
  const controllers = glob.sync(path.join(__dirname, '/controllers/*.js'));
  controllers.forEach((controllerFileName) => {
    require(controllerFileName)(app);
  });
};
