const express = require('express');
const { renderAbout, renderProjects, renderCrosses } = require('../controllers/controllers');
const router = express.Router();

router.route('/about')
    .get(renderAbout)

router.route('/projects')
    .get(renderProjects)

    router.route('/crosses')
        .get(renderCrosses)
    

module.exports = router