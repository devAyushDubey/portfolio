"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";

const HomeSection4 = ({ current, setCurrent, skillData }) => {
  const skillsRef = useRef(null);

  const isInView = useIsInViewport(skillsRef);

  useEffect(() => {
    if (isInView && current !== "skills") setCurrent("skills");

    return () => {
      if (isInView && current === "skills") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColorTrans)] min-h-[100vh] items-center justify-center"
      id="skills"
      elementRef={skillsRef}
    >
      <ConstraintedBox classNames="p-4 py-12">
        <h2 className="text-center mx-auto">
          Skills <span className="text-[var(--primaryColor)]">I Know</span>
        </h2>

        <WrappedBox classes="justify-items-center grid-cols-2 sm:grid-cols-3 mt-12">
          {skillData?skillData.map((skill) => {
            return (
              <Column
                key={`skill-${skill.position-1}`}
                classes="bg-[var(--textColor10)] p-4 px-8 rounded-[var(--borderRadius)] items-center text-center min-w-[10rem]"
              >
                <Image
                  src={skill.logo.url}
                  alt={`service-${skill.position-1}`}
                  width={100}
                  height={100}
                  sizes="100%"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={skill.logo.url}
                  style={{
                    objectFit: "contain",
                    width: "4rem",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />

                <h5 className="font-bold mt-4">{skill.title}</h5>

                <p className="mt-4 flex flex-row items-center">
                  {skill.levels}
                </p>
              </Column>
            );
          }):''}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
