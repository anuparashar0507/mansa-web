import React from 'react'

const EventContact = () => {
  return (
    <section className="text-gray-600 body-font relative">
    <div className="absolute inset-0 bg-gray-300">
    <iframe
          className="grayscale-1 m-0  w-full scroll-m-0 border-none opacity-50 contrast-120 grayscale-1"
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1833.8897323192164!2d77.4274725!3d23.1782478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439eedfd261d%3A0xbda480b4e82fe8d7!2sLNCT%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1702208165099!5m2!1sen!2sin&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          loading="lazy"
        /> </div>
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
        <p className="leading-relaxed mb-5 text-gray-600">+91-8109680611, +91-7805058023</p>
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Email</h2>
        <p className="leading-relaxed mb-5 text-gray-600">navodayansinbhopal@gmail.com</p>
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Venue</h2>
        <p className="leading-relaxed mb-5 text-gray-600">LNCT University Campus, Kolar Road, Bhopal(M.P.)</p>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Navigation</button>
        <p className="text-xs text-gray-500 mt-3">We are waiting to host you.</p>
      </div>
    </div>
  </section>
  )
}

export default EventContact