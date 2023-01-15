import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div>
      <div className="hero__container section__padding">
        <div className="hero__container-notes slide-in-left">
          <h1>Bring Your brand to life with my help</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            doloribus consequuntur neque nesciunt, nihil molestiae eaque velit
            vitae quis temporibus!
          </p>
          <button className="btn hero--btn">Contact me /> </button>
        </div>
        <div className="hero__container-img slide-in-top">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
