const express = require('express');
const { renderAbout, renderProjects, renderCrosses, renderContact, renderDoodle, renderClock, renderSpace, renderDesign } = require('../controllers/controllers');
const router = express.Router();

router.route('/about')
    .get(renderAbout)

router.route('/projects')
    .get(renderProjects)

router.route('/crosses')
    .get(renderCrosses)

router.route("/doodle")
    .all(renderDoodle)

router.route('/contact')
    .get(renderContact)

router.route('/clock')
    .get(renderClock)

router.route('/invaders')
    .get(renderSpace)

router.route('/design')
    .get(renderDesign)

module.exports = router