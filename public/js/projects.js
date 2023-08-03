const projects = document.querySelectorAll('.project-item')
const projectContainer = document.querySelector('.project-container')

const loveBird = {
    name: 'Love bird',
    type: 'Website',
    link: 'https://lovebird.onrender.com/',
    git: "https://github.com/Nbt53/demo-website",
    image: "/img/lovebird-screenshot.png",
    description: "This website is an online store for showcasing and selling art, and also allows customers to request custom art pieces. It was my first attempt at building a website, and I took inspiration from Jonas Schmedtmann's Advanced CSS and Sass: Flexbox, Grid, Animations and More! course for the homepage design. The website is built using Node.js, Express, JavaScript, Mongoose, and ejs, and the code is available to view online "

}
const crosses = {
    name: 'Noughts and crosses',
    type: 'HTML game',
    link: '/crosses',
    git: "https://github.com/Nbt53/crosses",
    image: "img/crosses-screenshot.png",
    description: "This is a noughts and crosses game developed using JavaScript, which utilizes CSS for certain visual features. The codebase features a simplified architecture, enabling straightforward implementation and modification. "

}
const doodle = {
    name: 'Love bird',
    type: 'Web Widget',
    link: '/doodle',
    git: "https://github.com/Nbt53/demo-website",
    image: "/img/doodle.png",
    description: " A web app using JavaScript, HTML, jQuery, and CSS. It is a drawing pad that lets you change the pen color. You can draw lines in different colors and thicknesses and erase parts of your drawing. It's easy to use and has a clean interface. "

}
const clock = {
    name: 'Digital Clock',
    type: 'Web Widget',
    link: 'https://lovebird.onrender.com/',
    git: "https://github.com/Nbt53/demo-website",
    image: "/img/clock.png",
    description: "This digital clock, created using HTML, CSS, and JS, displays the current time using clip path and absolute positioning. Each digit is made using a separate div element and styled with unique shapes for each number. The time is extracted using JavaScript's Date() object and displayed in the respective div elements using a loop to add a class for the appropriate digit."
}
const projectData = {
    loveBird: loveBird,
    crosses: crosses,
    doodle: doodle,
    clock: clock
};

projects.forEach(project => {
    project.addEventListener('click', function (e) {
        const thisProject = project.dataset.project;
        showProject(projectData[thisProject]); // Pass the corresponding project object
    });
});

const showProject = (p) => {
    projectContainer.innerHTML = `  <div class="card">
    <div class="card__header">
        <img src="${p.image}" alt="" class="card__img">
    </div>
    <div class="card__body">
        <h3 class="card__body-title">${p.name}</h3>
        <p class="card__body-description">
        ${p.description}
        </p>


        <a href="${p.link}" class="card__body-link btn" target="_blank"
            rel="noopener noreferrer">view the ${p.type}/a>
    </div>
`
}