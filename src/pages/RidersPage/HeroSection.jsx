const HeroSection = () => {
  return (
    <section className="bg-[url('/assets/riderBgImg.png')] relative flex items-center justify-center h-screen bg-fixed bg-cover bg-top">
      <section className="bg-[#008B5080] w-full h-full">
        <section className="text-white flex h-full flex-col justify-center items-center text-center">
          <h1 className="lg:text-7xl md:text-5xl text-4xl mb-5 font-bold">Join Our Rider Network</h1>
          <p className="text-lg">Become a Foodbank rider and help deliver food assistance to those in need.</p>
        </section>
      </section>
    </section>
  )
}

export default HeroSection