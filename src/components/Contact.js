import Preloader from './PreLoader';
import React, { useState, useEffect } from 'react';
function Contact() {

    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 1200);
    }, []);

    return (
        <React.Fragment>
            <Preloader myStyle={style} />
            <section id="contact">
                <div className="container">
                    <h4 className="center-align txt-col1 heading">Contact Me</h4>
                    <div className="row">
                        <form
                            className="col s12 m8 offset-m2"
                            name="portfolio-contact"
                            method="POST"
                        >
                            <input type="hidden" name="form-name" value="portfolio-contact" />

                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_outline</i>
                                    <input
                                        id="name"
                                        type="text"
                                        className="validate"
                                        name="name"
                                        required
                                    />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mail_outline</i>
                                    <input
                                        id="email"
                                        type="email"
                                        className="validate"
                                        name="email"
                                        required
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">chat_bubble_outline</i>
                                    <textarea
                                        id="message"
                                        className="mt-textarea"
                                        name="message"
                                        required
                                        defaultValue={""}
                                    />
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div className="center-align">
                                    <button
                                        className="btn waves-effect waves-light btn-2"
                                        type="submit"
                                    >
                                        Send
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Contact;