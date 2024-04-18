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

module.exports.renderDoodle = (req, res) => {
    res.render('pages/doodle')
}

module.exports.renderClock = (req, res) => {
    res.render('pages/clock')
}

module.exports.renderSpace = (req, res) => {
    res.render('pages/invaders')
}

module.exports.renderDesign = (req, res) => {
    res.render('pages/design')
}

module.exports.renderPortfolioItem = (req, res) => {
    const options = {
        hostname: process.env.HOSTNAME,
        port: 1337,
        path: '/api/portfolio-items',
        method: 'GET',
        headers: {
            'Authorization': `bearer ${process.env.STRAPI_API}`
        }
    };

    const request = http.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const parsedData = JSON.parse(data);
            res.render('test', { data: parsedData });
        });
    });

    request.on('error', (error) => {
        console.error(`Problem with request: ${error.message}`);
    });

    request.end();
}