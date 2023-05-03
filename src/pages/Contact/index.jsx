import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <article className="container contact-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLetters
              strArr={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I&apos;m Interested in freelance or Full-time opportunities,
            especially in ambitious or large projects. Moreover, if you have any
            other request or question , please don&apos;t hesitate to contact me
            using the form below.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button className="flat-btn">Send</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </article>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
