import React from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading';
import styles from '../../styles/Contact.module.css'

function Contact() {
  const [result, setResult] = React.useState<boolean | string>(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult(false);
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "70c3968c-0d4a-471a-883a-96e4d32bacf1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Submission failed.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setResult("Error: " + err.message);
      } else {
        setResult("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (result === true) {
      success();
    }
  }, [result]);

  const success = () => {
    Swal.fire({
      title: 'Email Sent',
      text: 'Thank You For Connecting!',
      icon: 'success',
      confirmButtonText: 'Back'
    });
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="name" placeholder='Your Name' className={styles.name} required />
        <input type="email" name="email" placeholder='Your Email' className={styles.email} required />
        <textarea name="message" placeholder='Write your message' className={styles.message} required></textarea>
        <button className={styles.button} type="submit">Submit Form</button>
      </form>
      {loading && !result && <Loading />}
    </>
  );
}

export default Contact;