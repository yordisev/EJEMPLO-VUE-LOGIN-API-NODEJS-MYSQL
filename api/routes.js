const router = require('express').Router();
const { body } = require('express-validator');
const { registrarusuario } = require('./controllers/registrarusuarios');
const { login } = require('./controllers/loginController');
const {getDatosInicio} = require('./controllers/inicio/getdatosinicio')
const { getUser, getUsuarios } = require('./controllers/getUserController');
const userController = require('./controllers/userController');
const validators = require('./validator');


// Inserting User
router.post(
    '/insert-user',
    validators.userInfo,
    validators.result,
    userController.insertarusuario
);

// Fetching all users
router.get(
    '/get-usuarios',
    userController.getTodoslosUsuarios
);

// Fetching Single User By ID
router.get(
    '/get-user/:id',
    validators.userID,
    validators.result,
    userController.getUserByID
);

// Updating User
router.patch(
    '/update-user/:id', [...validators.userID, ...validators.userInfo],
    validators.result,
    userController.updateUser
);

// Deleting User
router.delete(
    '/delete-user/:id',
    validators.userID,
    validators.result,
    userController.deleteUser
);



router.post('/registrarusuario', [
    body('usuario', "El usuario minimo debe tener 3 caracteres")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('correo', "El correo registrado es invalido")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password', "La contraseña minimo debe de tener 4 caracteres").notEmpty().trim().isLength({ min: 4 }),
], registrarusuario);


router.post('/login', [
    body('usuario', "Correo Invalido")
    .notEmpty()
    .escape()
    .trim(),
    // .trim().isEmail(),
    body('password', "La contraseña minimo debe tener 4 cracteres").notEmpty().trim().isLength({ min: 4 }),
], login);

router.get('/getDatosInicio', getDatosInicio);

router.get('/getuser', getUser);

router.get('/getUsuarios', getUsuarios);

module.exports = router;