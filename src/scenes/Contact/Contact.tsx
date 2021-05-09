// @vendors
import React, { FunctionComponent } from 'react';
import { ContactForm } from './Components/ContactForm/ContactForm';

import styles from './Contact.module.scss';

const Contact: FunctionComponent = () => (
  <div className={styles.contact}>
    <ContactForm />
  </div>
);

export default Contact;
