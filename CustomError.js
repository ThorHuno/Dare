class CustomError extends Error {
    constructor(_mensaje, _estado = false, _status = 500) {
        super(_mensaje);

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.status = _status;

        this.estado = _estado;
        this.mensaje = _mensaje;
    }
}

module.exports = CustomError;