const TOTAL_FOLLOWERS = 23004

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Social Media Dashboard</h1>
      <p className="hero__total-followers">Total Followers: {TOTAL_FOLLOWERS.toLocaleString('en-US')}</p>
    </section>
  );
}

export default Hero