import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {



    return (
        <div className="container">
            <div className="card card-login">
                <div className="card-header text-center font-weight-bold">
                    Presupuesto App - Registrarse
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <i className="fas fa-user">&nbsp;</i>
                            <label className='font-weight-bold'>Nombre</label>
                            <input
                                type="email"
                                autoComplete='off'
                                className="form-control"
                                name='email'
                            />
                        </div>
                        <div className="form-group">
                            <i class="fas fa-envelope-square">&nbsp;</i>
                            <label className='font-weight-bold'>Correo</label>
                            <input
                                type="email"
                                autoComplete='off'
                                className="form-control"
                                name='email'
                            />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-key">&nbsp;</i>
                            <label className='font-weight-bold'>Contraseña</label>
                            <input
                                type="password"
                                autoComplete='off'
                                className="form-control"
                                name='password'
                            />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-key">&nbsp;</i>
                            <label className='font-weight-bold'>Confirmar contraseña</label>
                            <input
                                type="password2"
                                autoComplete='off'
                                className="form-control"
                                name='password2'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 btn-block">Registrarse</button>
                        <hr />
                        <Link to="/auth/login">
                            <h5>Ya tienes una cuenta?</h5>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};