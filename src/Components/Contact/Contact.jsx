import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r3kvpqc', 'template_mo1il8d', form.current, '-3GgqQcpXAw8cWzxX')
          .then((result) => {
            Swal.fire({
              title: "Receive Your Message Successfully",
              text: "Thanks For Message Me",
              icon: "success"
            });
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="mt-20">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Contact Us</h1>
            <form className='border-4 shadow-xl  border-orange-600 lg:p-20 lg:mr-72 lg:ml-96 mt-20' ref={form} onSubmit={sendEmail}>
           <h2 className='text-4xl font-bold text-center mb-10 text-orange-600'>Contact Me</h2>
      <div className='flex md:gap-32 lg:gap-16'>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>
    
  </div>
  <input type="text" placeholder="Your Name" name="from_name" className="input input-bordered w-full max-w-xs" />
  
</label>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email</span>
    
  </div>
  <input type="email" placeholder="Your Email"  name="email_id" className="input input-bordered w-full max-w-xs" />
  
</label>
      </div>
      
      
      <label className="form-control">
  <div className="label">
    <span className="label-text">Message</span>
    
  </div>
  <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Send Me Message"></textarea>
  
</label>
      <input className='btn bg-orange-600 text-white w-1/2 ml-24 md:ml-44 lg:ml-40 mt-5' type="submit" value="Send" />
    </form>
        </div>
    );
};

export default Contact;