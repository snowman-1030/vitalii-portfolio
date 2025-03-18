"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Rezerve",
    description: `Rezerve is a feature-rich mobile app designed for seamless salon bookings in Poland. Built with Flutter, it offers a smooth iOS & Android experience.

Our team handled full-cycle mobile app development, from UI/UX design to backend integration, ensuring a seamless experience. Key features include:
- Effortless Booking – Users book services in seconds.
- Salon Management System – Business owners manage clients & staff schedules.
- Real-Time Notifications – Reduce no-shows with automated alerts.

Flutter App Development – Android App Development - iOS App Development – Laravel - Firebase`,
    link: "https://play.google.com/store/apps/details?id=com.techubllc.rezerve",
    images: [
      "/assets/projects-screenshots/reserve/1.png",
      "/assets/projects-screenshots/reserve/2.png",
    ],
  },
  {
    id: 2,
    name: "Primecar",
    description: `Primecar is a high-performance mobile app for car renting & selling, making vehicle transactions effortless.`,
    link: "https://play.google.com/store/apps/details?id=com.dinsstech.primecar&hl=en_US",
    images: [
      "/assets/projects-screenshots/primecar/1.png",
      "/assets/projects-screenshots/primecar/2.png",
      "/assets/projects-screenshots/primecar/3.png",
      "/assets/projects-screenshots/primecar/4.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
