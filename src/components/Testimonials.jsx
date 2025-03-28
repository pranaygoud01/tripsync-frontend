import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mahender Goud Sunkari",
            designation: "CEO of Studio M",
            img:"https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1742746071~exp=1742749671~hmac=c0914b0a4a49fdfcf943767cd7061f9023a0a2074bf8b9ab25f64b61f2f2bc90&w=826",
            testimonial: "The AI-powered Trip Planner is a game-changer for travel enthusiasts and professionals alike. Its intelligent recommendations and seamless itinerary planning make travel stress-free and highly personalized. As someone who values efficiency, I appreciate how effortlessly it adapts to preferences and optimizes time. A must-have tool for modern travelers!"
        },
        {
            name: "Ananya Sharma",
            designation: "Travel Blogger & Influencer",
            img:"https://img.freepik.com/free-photo/3d-rendered-illustration-cartoon-character-with-face-picture-frame_1057-46066.jpg?t=st=1742747616~exp=1742751216~hmac=dbcfcb8baf7ce2b0b04bea6459f479725ce42fdaa5ccd6e603a7f07804d668e1&w=826",
            testimonial: "I’ve used many trip planners, but this AI-powered platform stands out. It understands my travel style, suggests hidden gems, and even adjusts my schedule dynamically. Whether you're a solo traveler or planning a group trip, this tool ensures a hassle-free experience. Highly recommended!"
        },
        {
            name: "Pranay",
            designation: "CEO of IP Studio",
            img:"https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107221.jpg?t=st=1742747693~exp=1742751293~hmac=d87d6a32d96dbad31c7cb6f0673d58e2cbb8f0e8da7b1a48a5906d93352107b5&w=826",
            testimonial: "This AI-powered Trip Planner redefines how we explore the world. Its ability to curate personalized experiences, optimize travel routes, and provide real-time recommendations makes it an essential tool for any traveler. A truly revolutionary innovation in travel planning!"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };

    return (
        <>
        <div className='flex justify-center mt-20 w-full'>
            <div className='max-w-[900px] h-[50vh] flex items-center flex-col border-b-2 max-lg:border-b-0 border-b-neutral-200 w-full'
            style={{borderRadius:"100% 0% 50% 50% / 0% 0% 100% 100% "}}>
                <h1 className='font-semibold text-2xl bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text'>Testimonials</h1>
                <div className='px-10 w-full mt-5'>
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className='flex flex-col items-center  text-center'>
                                <h1 className='text-md max-lg:text-xs'>"{item.testimonial}"</h1>
                                <div className='mt-10 flex flex-col items-center gap-5'>
                                    <img src={item.img}
                                        className='w-14 h-14 rounded-xl object-cover object-center' />
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='font-semibold'>{item.name}</h1>
                                        <p className='text-sm'>{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
        <h1 className='w-full text-[120px] max-lg:text-3xl text-center text-neutral-800'>TRIPSYNC-PLAN SMARTER</h1>
        </>
    );
}

export default Testimonials;
