import Title from './Title';
import { services } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" altTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          // With destructuring
          // const { id, ...rest } = service;
          // return <Service key={id} {...rest} />;
          return <Service key={service.id} {...service} />;
        })}
        {/* {services.map((service) => {
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })} */}
      </div>
    </section>
  );
};
export default Services;
