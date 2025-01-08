function Contact() {
    return <>
        <section id="contact" class="container my-5">
            <h2>Contact</h2>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" required />
                    <div class="invalid-feedback">Name is required.</div>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" required />
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                    <div class="invalid-feedback">Message is required.</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    </>
}

export default Contact;