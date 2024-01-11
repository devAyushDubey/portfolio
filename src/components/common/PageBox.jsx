"use client"

import { useState, useRef, useEffect } from "react";
import NavBar from "@/components/navbar/NavBar";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
import HomeSection3 from "@/components/home/Section3";
import HomeSection4 from "@/components/home/Section4";
import HomeSection5 from "@/components/home/Section5";
import HomeSection6 from "@/components/home/Section6";
import PropTypes from "prop-types";
import FOG from "vanta/dist/vanta.fog.min"

const PageBox = (props) => {
  const { children, classes, about, service, exp, skills, projects } = props;


  const [current, setCurrent] = useState("");

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x20202,
        midtoneColor: 0xe3096f,
        lowlightColor: 0x1c1b25,
        baseColor: 0x50505,
        blurFactor: 0.78,
        speed: 2.90,
        zoom: 0.40
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (<>
    <div
      className={`relative flex flex-col justify-start items-start w-screen max-w-full p-0 m-0 mt-20 overflow-hidden transition duration-300 ease-in-out ${classes}`}
    >
      {children}
    </div>
    <div
      className="fixed w-[100vw] h-[100vh] top-0 -z-[1]"
      ref={myRef}>

    </div>
    <>
      <NavBar current={current} />
      <HomeSection1 current={current} setCurrent={setCurrent} aboutData={about}/>
      <HomeSection2 current={current} setCurrent={setCurrent} servicesData={service} />
      <HomeSection3 current={current} setCurrent={setCurrent} experienceData={exp}/>
      <HomeSection4 current={current} setCurrent={setCurrent} skillData={skills}/>
      <HomeSection5 current={current} setCurrent={setCurrent} projectData={projects}/>
      <HomeSection6 current={current} setCurrent={setCurrent} />
    </>
  </>
  );
};

PageBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default PageBox;
