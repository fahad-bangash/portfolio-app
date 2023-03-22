import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <div>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
            </ul>
          </article>
          {/* END of WEB DEVELOPMENT */}

          <article className="service">
            <div className="service__head">
              <h3>App Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
            </ul>
          </article>
          {/* End of Content Creation */}
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>This is Paragraph Tag for Give Services Description</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
