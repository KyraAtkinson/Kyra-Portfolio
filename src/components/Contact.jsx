import React from "react";

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl font-bold inline border-b-4 border-cyan-900'>
        Contact
      </h1>
      <br />
      <br />
      <br />
      <p className='text-2xl font-bold text-center  text-cyan-900'>
        Stopping by to chat or request my resume?
        <br />
        <br /> I look forward to hearing from you, shoot me a message by filling
        out the form below!
      </p>
      <br />
      <br />
      <br />
      <form
        action='https://getform.io/f/40434502-c750-4981-8cb1-f561d7aab6ce'
        method='POST'
        encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-500'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-500'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-500'
            type='email'
            name='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-500'
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-500'
            rows='10'
            name='message'></textarea>
        </div>
        <button className='bg-cyan-900 text-gray-200 mt-4 w-full p-4 rounded-lg'>
          send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
