// import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ScrollTop = ({ children }) => {
    console.log(children)

    const pathName = children.props.router.state.location.pathname;
    // useEffect(() => {
    //     console.log(pathName)
    // }, [pathName])


    // let { pathname } = useLocation();
    // console.log(pathname)
    useEffect(() => {
        window.scroll(0, 0)
    }, [pathName])
    return children
};

export default ScrollTop;