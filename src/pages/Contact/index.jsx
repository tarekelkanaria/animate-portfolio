import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { ToastContainer } from 'react-toastify';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import ContactForm from '../../components/PagesContent/ContactForm';
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
            <ContactForm />
          </div>
        </div>
        <address className="info-map">
          Tarek Elkanaria,
          <br />
          Alexandria,
          <br />
          Egypt. <br />
          <a href="mailto:tarekelkanaria@gmail.com">tarekelkanaria@gmail.com</a>
        </address>
        <div className="map-wrapper">
          <MapContainer center={[31.241878, 29.958756]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.241878, 29.958756]}>
              <Popup>Elkanaria lives here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </article>
      <ToastContainer position="bottom-left" />
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
