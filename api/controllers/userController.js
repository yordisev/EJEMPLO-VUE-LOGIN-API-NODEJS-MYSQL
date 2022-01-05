const db_connection = require("../dbConnection").promise();

// INSERTING USER
exports.insertarusuario = async(req, res, next) => {

    if (!req.body.cedula || !req.body.usuario || !req.body.correo) {
        return res.status(400).json({
            message: "Por favor llenar los campos son necesarios.",
            fields: ["cedula", "usuario", "correo"],
        });
    }

    try {

        const [rows] = await db_connection.execute(
            "INSERT INTO th_usuarios (cedula,usuario,correo) VALUES(?, ?, ?)", [
                req.body.cedula, req.body.usuario, req.body.correo
            ]
        );

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "El usuario a sido creado Correctamente.",
                userID: rows.insertId,
            });
        }

    } catch (err) {
        next(err);
    }

};

// FETCHING ALL USERS
exports.getTodoslosUsuarios = async(req, res, next) => {
    try {

        const [rows] = await db_connection.execute("SELECT * FROM th_usuarios");

        if (rows.length === 0) {
            return res.status(200).json({
                message: "No hay registros de ningun usuario en la base de datos.",
            });
        }

        res.status(200).json(rows);

    } catch (err) {
        next(err);
    }

};


// FETCHING SINGLE USER
exports.getUserByID = async(req, res, next) => {

    try {

        const [row] = await db_connection.execute(
            "SELECT * FROM th_usuarios WHERE id_usuario = ?", [req.params.id]
        );

        if (row.length === 0) {
            return res.status(404).json({
                message: "No se encontro usuario!",
            });
        }

        res.status(200).json(row[0]);

    } catch (err) {
        next(err);
    }

};

// UPDATING USER
exports.updateUser = async(req, res, next) => {
    try {

        const [row] = await db_connection.execute(
            "SELECT * FROM th_usuarios WHERE id_usuario = ?", [req.params.id_usuario]
        );

        if (row.length === 0) {
            return res.status(404).json({
                message: "Invalid User ID",
            });
        }

        if (req.body.usuario) row[0].usuario = req.body.usuario;

        if (req.body.correo) row[0].correo = req.body.correo;

        const [update] = await db_connection.execute(
            "UPDATE th_usuarios SET usuario = ?, correo = ? WHERE id_usuario = ?", [row[0].usuario, row[0].correo, req.params.id_usuario]
        );

        if (update.affectedRows === 1) {
            return res.json({
                message: "The User has been successfully updated.",
            });
        }

    } catch (err) {
        next(err);
    }

};

// DELETING USER
exports.deleteUser = async(req, res, next) => {

    try {

        const [row] = await db_connection.execute(
            "DELETE FROM th_usuarios WHERE id_usuario = ?", [req.params.id]
        );

        if (row.affectedRows === 0) {
            return res.status(404).json({
                message: "Invalid user ID (No User Found!)",
            });
        }

        res.status(200).json({
            message: "The user has been deleted successfully.",
        });

    } catch (err) {
        next(err);
    }

};