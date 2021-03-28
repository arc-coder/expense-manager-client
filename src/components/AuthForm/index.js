/**
 * @author Harsh Patel @arc-coder
 * @description Common file for Authentication form
 * @param
 *      - routeType
 *          - 0 for Sign In
 *          - 1 for Sign Up
 */

import React from 'react';

const AuthForm = ({ routeType }) => {
    return <div>AuthForm {`${routeType}`}</div>;
};

export default AuthForm;
