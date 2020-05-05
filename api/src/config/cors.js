const Cors = (req, res, next) => {
    // if (req.headers.origin.indexOf('http://localhost') > -1 ) {
    //
    // }
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}


export {
    Cors
};
