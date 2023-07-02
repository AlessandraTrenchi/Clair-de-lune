import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import '../index.css';

const Scroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress max="100" value="0"></progress>
      <p className="scro"></p>
      <div className="container">
        <section></section>
        <section></section>
        <section></section>
      </div>
    </>
  );
};

export default Scroll;
