const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();


exports.login = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {

        const [row] = await conn.execute(
            "SELECT * FROM th_usuarios WHERE usuario = ?", [req.body.usuario]
        );

        if (row.length === 0) {
            return res.status(422).json({
                message: "usuario Invalido intentalo de nuevo",
            });
        }

        const passMatch = await bcrypt.compare(req.body.password, row[0].password);
        if (!passMatch) {
            // return res.status(422).json({
            return res.json({
                message: "Contraseña Incorrecta",
                estatus: "error"
            });
        }

        const [datosusuario] = await conn.execute(
            "CALL th_datos_login('" + [req.body.usuario] + "')"
        );


        const theToken = jwt.sign({ id_usuario: row[0].id_usuario }, 'the-super-strong-secrect', { expiresIn: '1h' });
        return res.json({
            token: theToken,
            // user:row[0]
            user: datosusuario[0],
        });

    } catch (err) {
        next(err);
    }
}