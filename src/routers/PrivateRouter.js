import React from 'react';
import { Navigate } from 'react-router-native'
import PropTypes from 'prop-types';

export const PrivateRouter = ({
    estaAutenticado,
    element
}) => {
    return (
        (estaAutenticado)
            ? (element)
            : (<Navigate to="/login" />)
    )

}

PrivateRouter.propTypes = {
    estaAutenticado: PropTypes.bool.isRequired,
    element: PropTypes.object.isRequired
}