import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Shoreditch mukbang raw denim marfa yuccie try-hard locavore prism.
            Street art narwhal echo park iPhone art party sartorial praxis
            tousled. Succulents kale chips glossier, meggings sriracha subway
            tile typewriter next level tofu blackbird spyplane chambray.
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
