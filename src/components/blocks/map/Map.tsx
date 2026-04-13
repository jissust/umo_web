export const Map = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[400px]">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14809273.094948573!2d-6.971336949999999!3d35.79275935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e1!3m2!1sen!2sar!4v1776086832284!5m2!1sen!2sar" 
        className="w-full h-full border-0" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};