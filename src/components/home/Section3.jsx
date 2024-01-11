"use client";

import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import ReadMoreText from "@/components/common/ReadMoreText";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";

const HomeSection3 = ({ current, setCurrent, experienceData }) => {
  const experiencesRef = useRef(null);

  const isInView = useIsInViewport(experiencesRef);

  useEffect(() => {
    if (isInView && current !== "experiences") setCurrent("experiences");

    return () => {
      if (isInView && current === "experiences") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[100vh] items-center justify-center"
      id="experiences"
      elementRef={experiencesRef}
    >
      <ConstraintedBox classNames="p-4 py-12">
        <h2 className="text-center mx-auto">
          Experiences{" "}
          <span className="text-[var(--primaryColor)]">I Possess</span>
        </h2>

        <WrappedBox classes="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-12">
          {experienceData?experienceData.map((exp) => {
            return (
              <Column
                key={`service-${exp.position-1}`}
                classes="bg-[var(--textColor10)] p-4 px-8 rounded-[var(--borderRadius)] w-full"
              >
                {/* <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-2xl md:text-3xl text-[var(--primaryColor)]"
                /> */}
                <img src={exp.logo.url} fetchPriority="high" style={{
                  height: "30px",
                  width: "auto",
                  objectFit: "contain",
                  marginTop: "0.5rem",
                }}/>
                {/* <Image
                  src={exp.icon}
                  alt="company"
                  fill={true}
                  sizes="(max-height: 10px)"
                  priority
                  fetchPriority="high"
                  placeholder="blur"
                  blurDataURL={exp.icon}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    marginTop: "0.5rem",
                  }}
                /> */}

                <small className="font-bold mt-4 text-[var(--textColorLight)]">
                  {exp.start_date + ' - ' + exp.end_date}
                </small>

                <h4 className="font-bold mt-1">{exp.title}</h4>

                <p className="mt-1 text-[var(--textColorLight)] font-bold">
                  {exp.company}
                </p>

                <ReadMoreText className="mt-4 text-[var(--textColorLight)]">
                  {exp.description}
                </ReadMoreText>
              </Column>
            );
          }):''}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
