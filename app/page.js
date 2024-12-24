import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  try {
    // Ensure the username is defined before making the request
    if (!personalData.devUsername) {
      console.error("Developer username is not defined in personalData");
      return [];
    }

    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      return []; // Return an empty array on failure
    }

    const data = await res.json();

    // Validate and sort the data
    return data
      .filter((item) => item?.cover_image) // Ensure only items with cover images are included
      .sort(() => Math.random() - 0.5); // Randomize order
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return []; // Return an empty array on error
  }
}

export default async function Home() {
  let blogs = [];

  try {
    blogs = await getData(); // Fetch blog data
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
      {/* Blog section can be added if required */}
      {blogs.length > 0 && (
        <section>
          <h2>Blog Posts</h2>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <a href={blog.url} target="_blank" rel="noopener noreferrer">
                  {blog.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

// import { personalData } from "@/utils/data/personal-data";
// import AboutSection from "./components/homepage/about";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };

// export default async function Home() {
//   const blogs = await getData();

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