const jwt = require('jsonwebtoken');
const conn = require('../../dbConnection').promise();

exports.getDatosInicio = async(req, res, next) => {

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
            "CALL th_municipios_total", [decoded.id_usuario]
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