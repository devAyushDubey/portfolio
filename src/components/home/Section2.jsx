"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import ReadMoreText from "@/components/common/ReadMoreText";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";

const HomeSection2 = ({ current, setCurrent, servicesData }) => {
  const servicesRef = useRef(null);

  const isInView = useIsInViewport(servicesRef);

  useEffect(() => {
    if (isInView && current !== "services") setCurrent("services");

    return () => {
      if (isInView && current === "services") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[100vh] items-center justify-center"
      id="services"
      elementRef={servicesRef}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <h2 className="text-center mx-auto">
          What <span className="text-[var(--primaryColor)]">I Do</span>
        </h2>
        <WrappedBox classes="justify-items-center sm:grid-cols-2 mt-12">
          {servicesData?servicesData.map((service) => {
            return (
              <Column
                key={`service-${service.position-1}`}
                classes="bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center text-center"
              >
                <Image
                  src={service.icon.url}
                  alt={`service-${service.position-1}`}
                  width={100}
                  height={100}
                  sizes="100%"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={service.icon.url}
                  style={{
                    width: "5rem",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />

                <h5 className="font-bold mt-4">{service.title}</h5>

                <span className="w-[3rem] h-[0.125rem] bg-[var(--primaryColor)] mx-auto mt-4"></span>

                <ReadMoreText className="mt-8" visibleTextCount={120}>
                  {service.body}
                </ReadMoreText>
              </Column>
            );
          }):''}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
