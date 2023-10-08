import './Banner.css'

const Banner = () => {
    return (
        <div className="my-10">
                 

<div className="carousel w-full rounded-lg mt-10">
  <div id="slide1" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/Fhqs2rc/banner-one.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-50" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
            DevConf 2.0
          </h1>
          <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
          Uncover the Power of Code <br /> Join us at the Developer's
Conference 2023 <br /> Organized by Sadia Afrin
          </p>

        <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
            Registration Open
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
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/syj2S3D/16406291-rm373batch2-04.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-white">
          DevConf 2.0
          </h1>
          <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
          Uncover the Power of Code <br /> Join us at the Developer's
Conference 2023 <br /> Organized by Sadia Afrin
          </p>
           <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
            Registration Open
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
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/y6xprD6/banner-four.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-white">
          DevConf 2.0
          </h1>
          <p className="mb-5 lg:text-lg text-white md:text-base text-xs font-medium">
          Uncover the Power of Code <br /> Join us at the Developer's
Conference 2023 <br /> Organized by Sadia Afrin
          </p>
          <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
            Registration Open
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
    <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/xY2WVH6/banner-three.jpg")'}}>
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-white">
          DevConf 2.0
          </h1>
          <p className="mb-5 lg:text-lg  text-white md:text-base text-xs font-medium">
          Uncover the Power of Code <br /> Join us at the Developer's
Conference 2023 <br /> Organized by Sadia Afrin
          </p>
          <div className='mx-auto ml-4  md:ml-14 lg:ml-20'>
        <button className="btn  btn-grad rounded border-none text-white">
            Registration Open
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