import React from 'react';
import { useNavigate } from 'react-router';

function Home () {
    const navigate = useNavigate()

    return(
<div className="home-component">
<main className="home-main">
    <section className="home-section-text">
        <h5 className="headingFive home-heading">So, you want to travel to</h5>
        <h1 className="headingOne">Space</h1>
        <p className="par par-home">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </section>
    <section className="home-section-explore">
        <div>
        <button className='home-btn-explore' onClick={() => navigate('/destination')}>Explore</button>
    </div>
    </section>
</main>
</div>
    )
}
export default Home;
