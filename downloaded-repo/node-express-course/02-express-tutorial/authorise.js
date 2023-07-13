const authorise = (req, res, next) => {
    const {user} = req.query;
    if (user === 'obiwan') {
        req.user = {name: 'obiwan', id: 2}
        next();
    } else {
        res.status(401).send('Not a jedi')
    }
}

module.exports = authorise;