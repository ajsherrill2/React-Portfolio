import '../App.css';

export default function Contact () {
    return (
        <form className="card contact-form mt-4 card-body mx-auto border-0">
            <h4>Contact</h4>
            <div className="mb-3">
                <label for="nameInput" className="form-label">Name</label>
                <input type="email" className="form-control " id="nameInput" placeholder="Obi-Wan Kenobi"/>
            </div>
            <div className="mb-3">
                <label for="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" placeholder="example@email.com"/>
            </div>
            <div className="mb-3">
                <label for="messageInput" className="form-label">Message</label>
                <input type="text" className="form-control" id="messageInput" placeholder="Hello there"/>
            </div>
        </form>
    )
}