import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {



    return (
        <div className="container">
            <div className="card card-login">
                <div className="card-header text-center font-weight-bold">
                    Presupuesto App - Iniciar sesion
                </div>
                <div className="card-body">
                    <form>
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
                        <button type="submit" className="btn btn-primary mt-3 btn-block">Iniciar sesion</button>
                        <hr />
                        <div className='auth__social-networks'>
                            <p className='font-weight-bold'>Redes sociales</p>
                            <div
                                className="google-btn"
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Google</b>
                                </p>
                            </div>
                        </div>
                        <Link to="/auth/register">
                            <h5>Crear nueva cuenta</h5>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};