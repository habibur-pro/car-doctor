// import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ScrollTop = ({ children }) => {
    console.log(children)

    let { pathname } = useLocation();
    // console.log(pathname)
    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])
    return children
};

export default ScrollTop;