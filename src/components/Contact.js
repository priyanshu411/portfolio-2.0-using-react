import Preloader from './PreLoader';
import React, { useState, useEffect } from 'react';
function Contact() {

    const [style, setStyle] = useState(true);
    const [_name, set_name] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [btn, setBtn] = useState(false);
    const [btnText, setBtnText] = useState("send");

    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 1200);
    }, []);

    // encode form data
    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    // send message
    function sendMessage(e) {
        e.preventDefault();
        const M = window.M;
        setBtn(true);
        setBtnText("Loading...");
        
        fetch("/", {
            method: "Post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "portfolio-contact", _name, email, message }),
        })
            .then(() => {
                M.toast({ html: `<i class="material-icons">done</i>Thank you  ${_name} .Your message sent successfully `, displayLength: 5000, classes: "green accent-4" });
            })
            .catch((error) => {
                M.toast({ html: error.code, displayLength: 5000, classes: "red darken-1" });

            })
            .finally(() => {
                setBtn(false);
                setBtnText("Send");
                set_name("");
                setEmail("");
                setMessage("");
            });
    }


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
                            onSubmit={sendMessage}
                        >

                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_outline</i>
                                    <input
                                        id="name"
                                        type="text"
                                        className="validate"
                                        name="_name"
                                        value={_name}
                                        required
                                        onChange={(e) => { set_name(e.target.value) }}
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
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
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
                                        value={message}
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        required

                                    />
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div className="center-align">
                                    <button
                                        className="btn waves-effect waves-light btn-2"
                                        type="submit"
                                        disabled={btn}
                                    >
                                        {btnText}
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