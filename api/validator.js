const db_connection = require("./dbConnection").promise();
const { body, param, validationResult } = require("express-validator");

module.exports = {
    // User name and email Validation
    userInfo: [
        body("usuario", "El nombre minimo debe tener 3 caracteres")
        .optional()
        .isLength({ min: 3 })
        .trim()
        .unescape()
        .escape(),

        body("correo", "Correo invalido")
        .optional()
        .trim()
        .unescape()
        .escape()
        .isEmail()
        .custom(async(value) => {
            // Checking that the email already in use or NOT
            const [row] = await db_connection.execute(
                "SELECT correo FROM th_usuarios WHERE correo = ?", [value]
            );
            if (row.length > 0) {
                return Promise.reject("El correo que esta registrando ya existe");
            }
        }),
    ],

    // User ID Validation
    userID: [param("id_usuario", "Invalid User ID").trim().isInt()],

    // Checking Validation Result
    result: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    },
};