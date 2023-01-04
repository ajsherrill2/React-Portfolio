import '../App.css';
import image1 from "../images/Weather-Dashboard.png";
import image2 from "../images/The-Book-Club.png";
import image3 from "../images/note-taker.png";
import image4 from "../images/e-commerce.png";
import image5 from "../images/tech-blog.png";
import image6 from "../images/daily-fit.png";

export default function Projects () {
    return (
        <div class="projects row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 my-auto mx-auto">
            <div class="col">
                <div class="card border-0">
                    <a href="https://ajsherrill2.github.io/Your-Weather-Dashboard/" target="_blank" rel="noreferrer">
                        <img src={image1} class="card-img-top" alt="Weather Dashboard"/>
                    </a>
                    <div class="card-body dark-background">
                        <h5 class="card-title dark-background">Weather Dashboard</h5>
                        <p>
                            <button class="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                Description
                            </button>
                        </p>
                        <div class="collapse" id="collapse1">
                            <div class="card card-body">
                            Using Bootstrap, Moment.js, jQuery, and the Weathermap API I developed a fully functional dashboard that includes the current and future forcast.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-0">
                    <a href="https://ajsherrill2.github.io/Project-1-Runtime-Terror/" target="_blank" rel="noreferrer">
                        <img src={image2} class="card-img-top" alt="The Book Club"/>
                    </a>
                    <div class="card-body dark-background">
                        <h5 class="card-title dark-background">The Book Club</h5>
                        <p>
                            <button class="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                Description
                            </button>
                        </p>
                        <div class="collapse" id="collapse2">
                            <div class="card card-body">
                            A book finding app using Materialize.css and the Google Books REST v2 API.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-0">
                    <a href="https://ajs-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={image3} class="card-img-top" alt="Note Taker"/>
                    </a>
                    <div class="card-body dark-background">
                        <h5 class="card-title dark-background">Note Taker</h5>
                        <p>
                            <button class="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                Description
                            </button>
                        </p>
                        <div class="collapse" id="collapse3">
                            <div class="card card-body">
                            A note taker application that runs on Heroku CLI using node.js, express.js and Javascript.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-0">
                    <a href="https://github.com/ajsherrill2/E-Commerce-BE.git" target="_blank" rel="noreferrer">
                        <img src={image4} class="card-img-top" alt="E-Commerce App"/>
                    </a>
                    <div class="card-body dark-background">
                        <h5 class="card-title dark-background">E-Commerce App</h5>
                        <p>
                            <button class="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                Description
                            </button>
                        </p>
                        <div class="collapse" id="collapse4">
                            <div class="card card-body">
                            In this Project I created the back end for an e-commerce site. I configured a working Express.js API to use Sequalize to interact with a MySQL database.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-0">
                    <a href="https://desolate-oasis-10594.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={image5} class="card-img-top" alt="Tech Blog"/>
                    </a>
                    <div class="card-body dark-background">
                        <h5 class="card-title dark-background">Tech Blog</h5>
                        <p>
                            <button class="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                Description
                            </button>
                        </p>
                        <div class="collapse" id="collapse5">
                            <div class="card card-body">
                            A tech blog site which utilizes an MVC framework using MySQL, Express.js, Sequelize and handlebars.js.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-0">
                    <a href="https://daily-fit2.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={image6} class="card-img-top" alt="Daily Fit Nutrition"/>
                    </a>
                    <div class="card-body dark-background">
                        <h5 class="card-title dark-background">Daily Fit Nutrition</h5>
                        <p>
                            <button class="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                Description
                            </button>
                        </p>
                        <div class="collapse" id="collapse6">
                            <div class="card card-body">
                            A full stack calorie tracker app. Which utilizes an MVC framework using MySQL, Express.js, Sequelize, Chart.js and handlebars.js in order to allow users to create secure accounts and perform appropriate CRUD operations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}