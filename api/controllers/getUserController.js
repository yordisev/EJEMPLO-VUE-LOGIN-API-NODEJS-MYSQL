const jwt = require('jsonwebtoken');
const conn = require('../dbConnection').promise();


exports.getUser = async(req, res, next) => {

    try {

        if (!req.headers.tokenautorizado ||
            !req.headers.tokenautorizado.startsWith('Bearer') ||
            !req.headers.tokenautorizado.split(' ')[1]
        ) {
            return res.status(422).json({
                message: "Por favor verificar token1"
            });
        }

        const theToken = req.headers.tokenautorizado.split(' ')[1];
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
      
   
        const [row] = await conn.execute(
            'SELECT id_usuario,cedula,usuario,correo FROM th_usuarios WHERE cedula = '+[req.query.cedula]+'',[decoded.id_usuario]
        );

        if (row.length > 0) {
            return res.json({
                user: row[0]
            });
        }

        res.json({
            message: "No user found"
        });

    } catch (err) {
        next(err);
    }
}

exports.getUsuarios = async(req, res, next) => {

    try {

        if (!req.headers.tokenautorizado ||
            !req.headers.tokenautorizado.startsWith('Bearer') ||
            !req.headers.tokenautorizado.split(' ')[1]
        ) {
            return res.status(422).json({
                message: "Por favor verificar token",
            });
        }

        const theToken = req.headers.tokenautorizado.split(' ')[1];
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

        const [usuarios] = await conn.execute(
            "SELECT id_usuario,cedula,usuario,correo FROM th_usuarios", [decoded.id_usuario]
        );

        if (usuarios.length > 0) {
            return res.json({
                // user:row[1]
                usuarios
            });
        }

        res.json({
            message: "No user found"
        });

    } catch (err) {
        next(err);
    }
}