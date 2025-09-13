import { testimonials, moreTestimonials } from "../lib/AppData";
import CustomerTestimonial from "./CustomerTestimonial";

export default function MarqueeEffect() {
  return (
    <article className="marquee-container wrapper--vertical">
      <div className="marquee marquee--vertical">
        <div className="marquee__group">
          {testimonials.map((testimonial) => (
            <CustomerTestimonial
              key={testimonial.title}
              title={testimonial.title}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
        <div aria-hidden="true" className="marquee__group">
          {moreTestimonials.map((testimonial) => (
            <CustomerTestimonial
              key={testimonial.title}
              title={testimonial.title}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
