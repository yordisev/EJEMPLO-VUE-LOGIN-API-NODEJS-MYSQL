const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('../dbConnection').promise();

exports.registrarusuario = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {

        const [row] = await conn.execute(
            "SELECT correo FROM th_usuarios WHERE correo = ?", [req.body.correo]
        );

        if (row.length > 0) {
            return res.status(201).json({
                message: "El correo Registrado ya esta en uso",
            });
        }

        const hashPass = await bcrypt.hash(req.body.password, 12);

        const [rows] = await conn.execute('INSERT INTO th_usuarios (cedula,usuario,correo,password) VALUES(?,?,?,?)', [

            req.body.cedula,
            req.body.usuario,
            req.body.correo,
            hashPass
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "Usuario creado Correctamente.",
            });
        }

    } catch (err) {
        next(err);
    }
}