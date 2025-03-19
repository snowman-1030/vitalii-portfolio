const config = {
  title: "Vitalii Kaminskyi | Mobile App Developer",
  description: {
    long: "Explore the portfolio of Vitalii, a mobile app developer specializing in React Native | Flutter | Native iOS & Android App Development. Let's build something amazing together!",
    short:
      "Discover the portfolio of Vitalii, a mobile app developer creating interactive mobile experiences and innovative projects.",
  },
  keywords: [
    "Vitalii",
    "Portfolio",
    "Mobile App Developer",
    "React Native | JS | TS",
    "Flutter | Dart",
    "iOS | Swift",
    "Android | Java | Kotlin",
    "Laravel",
    "Node.js",
    "Figma",
  ],
  author: "Vitalii Kaminskyi",
  email: "vitaliikaminskyi556@gmail.com",
  site: "https://vitalii-portfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/vitalii-kaminskyi556/",
    instagram: "",
    facebook: "",
    github: "https://github.com/devprogrammer",
  },
};
export { config };
