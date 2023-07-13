const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date());
    //res.send('testing'); // one option - this would cancel whatever the main app.get has
    next(); // otherwise MUST include this or the tab will hang
}

module.exports = logger;