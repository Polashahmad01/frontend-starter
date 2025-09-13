import { CustomerTestimonialProps } from "../types/NotFound";

export default function CustomerTestimonial({ title, rating, testimonial}: CustomerTestimonialProps) {
  return (
    <div className="p-4 border border-[#00000014] rounded-[20px] flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        <img
          className="h-9 w-9 rounded-full"
          src="https://picsum.photos/200"
          alt="reviewUser"
        />
        <div className="flex flex-col">
          <h6 className="text-sm">{title}</h6>
          <div className="flex items-center">
            {Array.from({ length: rating }).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-warning-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[13px]">
        {testimonial}
      </p>
    </div>
  );
}
