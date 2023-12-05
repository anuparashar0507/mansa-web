import { SEO } from "~/components/SEO";
import ContactDetail from "~/components/home//Contact";

export default function Contact() {
  return (
    <>
      <SEO
        title={"Contact Us - MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-red-50 to-blue-50">
        <ContactDetail />
        {/* <iframe
          width="100%"
          height="100%"
          className="grayscale-1  m-0 scroll-m-0 border-none opacity-40 contrast-125"
          title="map"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe> */}
        <iframe
          className="grayscale-1  m-0 mb-8 w-full max-w-7xl scroll-m-0 border-none opacity-70 contrast-125"
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7332.917711539796!2d77.42457404640088!3d23.22638386612555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c433240a5390d%3A0xa0980c921464e05c!2sMansarovar%20Complex!5e0!3m2!1sen!2sin!4v1701735426820!5m2!1sen!2sin&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          width="600"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
}
