import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const PublicRoutes = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={
                ((props) => (isAuth)
                    ? (<Redirect to="/journal" />)
                    : (<Component {...props} />)
                )}
        />
    )
}

PublicRoutes.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}