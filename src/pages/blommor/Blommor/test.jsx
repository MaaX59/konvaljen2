import React from 'react'

const test = () => {
  return (
     <div className="blommor-gallery">
          <div className="blommor-gallery-items">
            <div className="blommor-gallery-item">
              <img src={pic} alt="awdawd" />
              <h2> Color pallet</h2>
              <span>Från 479 kr</span>
            </div>
            <div className="blommor-gallery-item">
              <img src={pic} alt="awdawd" />
              <h2> Color pallet</h2>
              <span>Från 479 kr</span>
            </div>
            <div className="blommor-gallery-item">
              <img src={pic} alt="awdawd" />
              <h2> Color pallet</h2>
              <span>Från 479 kr</span>
            </div>
            <div className="blommor-gallery-item">
              <img src={pic} alt="awdawd" />
              <h2> Color pallet</h2>
              <span>Från 479 kr</span>
            </div>
            <div className="blommor-gallery-item">
              <img src={pic} alt="awdawd" />
              <h2> Color pallet</h2>
              <span>Från 479 kr</span>
            </div>
            <div className="blommor-gallery-item">
              <img src={pic} alt="awdawd" />
              <h2> Color pallet</h2>
              <span>Från 479 kr</span>
            </div>
          </div>
          </div>



.blommor-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.blommor-gallery-items {
  flex-wrap: wrap;
  display: flex;

  justify-content: space-evenly;
  width: 80vw;
  align-items: center;
}
.blommor-gallery-item {
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.blommor-gallery-item img {
  width: 24vw;
  height: 28vw;
}
.blommor-gallery-item h2 {
  font-family: "Barlow Condensed";
  line-height: 1px;
}
.blommor-gallery-item span {
  font-family: "Barlow Condensed";
  line-height: 5px;
  color: var(--color-blue);
  font-size: 20px;
}
  )
}

export default test