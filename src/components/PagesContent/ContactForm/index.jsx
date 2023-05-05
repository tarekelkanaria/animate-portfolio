import { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Loader from 'react-loaders';
import './index.scss';

const ContactForm = () => {
  const formRef = useRef();
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .trim()
            .required('Name is Required')
            .min(3, 'Must be at least 3 characters')
            .max(20, 'Must be 20 characters or less'),
          email: Yup.string()
            .trim()
            .required('Email is Required')
            .email('Invalid email address'),
          subject: Yup.string()
            .trim()
            .required('Subject is Required')
            .min(3, 'Must be at least 3 characters')
            .max(100, 'Must be 100 characters or less'),
          message: Yup.string()
            .trim()
            .required('Message is Required')
            .min(20, 'Must be at least 20 characters'),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          emailjs
            .sendForm(
              'contact_service',
              'contact_form',
              formRef.current,
              'pZyFjOeZ3_r_Z92gY'
            )
            .then(
              () => {
                toast.success('Message successfully sent!');
                setSubmitting(false);
                resetForm();
              },
              () => {
                toast.error('Failed to send the message, please try again!');
                setSubmitting(false);
                resetForm();
              }
            );
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formRef}>
            <ul>
              <li className="half">
                <Field type="text" name="name" placeholder="Name" />
                <p className="error-text">
                  <ErrorMessage name="name" />
                </p>
              </li>
              <li className="half">
                <Field type="email" name="email" placeholder="Email" />
                <p className="error-text">
                  <ErrorMessage name="email" />
                </p>
              </li>
              <li>
                <Field type="text" placeholder="Subject" name="subject" />
                <p className="error-text">
                  <ErrorMessage name="subject" />
                </p>
              </li>
              <li>
                <Field as="textarea" name="message" placeholder="Message" />
                <p className="error-text">
                  <ErrorMessage name="message" />
                </p>
              </li>
              <li>
                <button className="flat-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader
                      type="ball-scale-multiple"
                      active
                      style={{ transform: 'scale(0.5)' }}
                      color="#ffd700"
                    />
                  ) : (
                    'Send'
                  )}
                </button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
