import '../App.css';
import logo from '../images/PHPA4945.JPG'

export default function About () {
    return (
        <div className="card mt-5 mx-auto mb-5 border-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={logo} className="img-fluid rounded-start" alt="Adam Sherrill"/>
                </div>
                <div className="dark-background col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">I am a <span>web developer</span> and <span>designer</span> from Austin, Texas.</p>
                        <p className="card-text">Apart from a adrenaline filled live in the outdoors skiing champaigne powder in the Rockies 
                        and climbing the limestone of the the Grand Tetons, you will find me disecting complex problems 
                        into clean and accessible web designs.</p>
                        <p className="card-text"><small className="text-muted">Last updated 1/3/2023</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}