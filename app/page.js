'use client';

import dynamic from 'next/dynamic';

// Dynamically import components to ensure they run only on the client-side
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

// Uncomment the following code if `getData` is required and ensure API access logic is properly handled
// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   const data = await res.json();
//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
//   return filtered;
// };

export default async function Home() {
  // Uncomment if using blogs fetched via getData
  // const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}

// // import { personalData } from "@/utils/data/personal-data";
// import AboutSection from "./components/homepage/about";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// // async function getData() {
// //   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

// //   if (!res.ok) {
// //     throw new Error('Failed to fetch data')
// //   }

// //   const data = await res.json();

// //   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

// //   return filtered;
// // };

// export default async function Home() {
//   // const blogs = await getData();

//   return (
//     <>
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <ContactSection />
//     </>
//   )
// };