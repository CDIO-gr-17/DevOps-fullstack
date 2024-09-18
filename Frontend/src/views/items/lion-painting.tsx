import React from "react";
import "./lion-painting.css";

function LionPainting() {
  return (
    <div className="lion-painting">
      <div className="div">
        <div className="text-wrapper">Lion Maqnifiqué</div>
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="ellipse-2" />
              <div className="rectangle" />
              <div className="text-wrapper-2">1/4</div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="overlap-group-wrapper">
              {/* Figma arrow*/}
              <div className="overlap-group-2">
                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/1ooum0nI/img/line-1.svg"
                />
                <img
                  className="img"
                  alt="Line"
                  src="https://c.animaapp.com/1ooum0nI/img/line-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="p">Water color painting in wood frame</p>
        <div className="overlap-2">
          <div className="menu-wrapper">
            <img src="menu-02.png" className="menu" color="#3A3A3A" />
          </div>
          <div className="text-wrapper-3">Search...</div>
        </div>
        <img
          src="user-profile-03.jpg"
          className="user-profile"
          color="#3A3A3A"
        />
        <img src="heart.png" className="heart-2" color="#3A3A3A" />
        <img src="bag-041.png" className="bag" />
        <div className="text-wrapper-4">Sun 22 sept 20:30</div>
        <img src="heart2.png" className="heart-1" color="#3A3A3A" />
        <img src="share.png" className="share" />
        <div className="text-wrapper-5">Ends in</div>
        <div className="text-wrapper-6">3 days 23 hours</div>
        <div className="text-wrapper-7">54 Bids</div>
        <img
          className="line-2"
          alt="Line"
          src="https://c.animaapp.com/1ooum0nI/img/line-3.svg"
        />
        <div className="text-wrapper-8">Leading bid</div>
        <div className="group-2">
          <div className="div-wrapper">
            <p className="text-wrapper-9">Its a painting of a lion</p>
          </div>
          <div className="text-wrapper-10">Description</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-11">Marius Picasso</div>
          <img src="user-profile-03 (2).png" className="user-profile-03-3" />
        </div>
        <div className="overlap-3">
          <div className="rectangle-2" />
          <div className="text-wrapper-12">Bid on item</div>
        </div>
        <div className="text-wrapper-13">$ ???</div>
      </div>
    </div>
  );
}
export default LionPainting;
