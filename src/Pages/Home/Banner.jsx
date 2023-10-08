import './Banner.css'

const Banner = () => {
    return (
        <div className="my-10">
                 

<div  data-aos="zoom-in-up" data-aos-duration="3000" className="carousel w-full rounded-lg mt-10">
  <div id="slide1" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/87rFXb4/alexandre-pellaes-6v-Ajp0psc-X0-unsplash-1-1.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-50" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
            Dev 3.0
          </h1>
          <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
          Book us for make your event <br /> or conference successfull..   We will organize <br /> your conference the best posiible way.
          </p>

        <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
            Booking Open 
          </button>
        </div>

        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/fd09CSD/ed-tech-conference-learning.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-white">
          Dev 3.0
          </h1>
          <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
          Book us for make your event <br /> or conference successfull..   We will organize <br /> your conference the best posiible way.
          </p>
           <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
        Booking Open
          </button>
        </div>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/Q9C4Vjn/https-cdn-evbuc-com-images-598988379-121300576625-1-original.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-white">
          Dev 3.0
          </h1>
          <p className="mb-5 lg:text-lg text-white md:text-base text-xs font-medium">
          Book us for make your event <br /> or conference successfull..   We will organize <br /> your conference the best posiible way.
          </p>
          <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
        Booking Open
          </button>
        </div>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/X8B3tF2/smaller.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-white">
          Dev 3.0
          </h1>
          <p className="mb-5 lg:text-lg  text-white md:text-base text-xs font-medium">
          Book us for make your event <br /> or conference successfull..   We will organize <br /> your conference the best posiible way.
          </p>
          <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
        Booking Open
          </button>
        </div>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;