module.exports.renderAbout = (req, res) => {
    res.render('pages/about')
}
module.exports.renderProjects = (req, res) => {
    res.render('pages/projects')
}

module.exports.renderCrosses = (req, res) => {
    res.render('pages/crosses')
}

module.exports.renderContact = (req, res) => {
    res.render('pages/contact')
}

module.exports.renderDoodle = (req, res) =>{
    res.render('pages/doodle')
}

module.exports.renderClock = (req, res) =>{
    res.render('pages/clock')
}

module.exports.renderSpace = (req, res) =>{
    res.render('pages/invaders')
}

module.exports.renderDesign = (req, res) =>{
    res.render('pages/design')
}
