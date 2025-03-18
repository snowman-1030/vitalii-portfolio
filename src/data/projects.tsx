import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiFlutterFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          App Link
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
          App Link
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <RiFlutterFill />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "reserve",
    category: "Salon Booking",
    title: "Rezerve – Poland’s Leading Mobile App for Salon Booking",
    src: "/assets/projects-screenshots/reserve/1.png",
    screenshots: ["1.png"],
    live: "https://play.google.com/store/apps/details?id=com.techubllc.rezerve",
    github: "https://apps.apple.com/us/app/rezerve/id6496685025",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Rezerve is a feature-rich mobile app designed for seamless salon bookings in Poland. Built with Flutter, it offers a smooth iOS & Android experience.
          </TypographyP>
          <TypographyP className="font-mono ">
            Our team handled full-cycle mobile app development, from UI/UX design to backend integration, ensuring a seamless experience. Key features include:
          </TypographyP>
          <p className="font-mono mb-2">
            - Effortless Booking – Users book services in seconds.
          </p>
          <p className="font-mono mb-2">
            - Salon Management System – Business owners manage clients & staff schedules.
          </p>
          <p className="font-mono mb-2">
            - Real-Time Notifications – Reduce no-shows with automated alerts.
          </p>
          <TypographyP className="font-mono ">
            Flutter App Development – Android App Development - iOS App Development – Laravel - Firebase
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Screenshot 1</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/reserve/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 2</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/reserve/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "primecar",
    category: "Renting & Selling",
    title: "Primecar – Car Renting & Selling Mobile App",
    src: "/assets/projects-screenshots/primecar/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://play.google.com/store/apps/details?id=com.dinsstech.primecar&hl=en_US",
    github: "https://apps.apple.com/us/app/primecar-location-achat-auto/id6446251526",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Primecar is a high-performance mobile app for car renting & selling, making vehicle transactions effortless.
          </TypographyP>
          <p className="font-mono mb-2">
            Key Features
          </p>
          <p className="font-mono mb-2">
            - Seamless Booking – Rent & list cars with ease
          </p>
          <p className="font-mono mb-2">
            - Advanced Search & Filters – Find vehicles by price, model & location
          </p>
          <p className="font-mono mb-2">
            - Real-Time Location Tracking – See available cars nearby
          </p>
          <p className="font-mono mb-2">
            - Secure Payments – Integrated with Stripe & mobile wallets
          </p>
          <TypographyP className="font-mono ">
            I led end-to-end mobile app development, integrating Flutter, Laravel, Firebase, and AWS. Now with 50,000+ users, Primecar is revolutionizing vehicle rentals! 
          </TypographyP>
          <TypographyP className="font-mono ">
            Flutter App Development – Android App Development - iOS App Development – Laravel
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Screenshot 1</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/primecar/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 2</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/primecar/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 3</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/primecar/3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 4</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/primecar/4.png`,
            ]}
          />

        </div>
      );
    },
  },
  {
    id: "tradingchecklist",
    category: "Trade Journaling & SOP Management",
    title: "Trading Checklist – Trade Journaling & SOP Management App",
    src: "/assets/projects-screenshots/tradingchecklist/1.png",
    screenshots: ["1.png", "2.png"],
    live: "",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Trading Checklist is a powerful mobile app designed for traders to journal trades, track performance, and follow SOPs for better risk management & profits.
          </TypographyP>
          <p className="font-mono mb-2">
            Key Features
          </p>
          <p className="font-mono mb-2">
            - Trade Journaling – Log trades with key details & insights
          </p>
          <p className="font-mono mb-2">
            - Customizable SOPs – Set rules & checklists for disciplined trading
          </p>
          <p className="font-mono mb-2">
            - Performance Analytics – Track success rates & refine strategies
          </p>
          <p className="font-mono mb-2">
            - Cloud Sync & Reminders – Never miss a step in your trading routine
          </p>
          <TypographyP className="font-mono ">
          I developed the full mobile app, integrating Flutter, Laravel, Firebase, and real-time trade analytics to help traders stay disciplined & profitable! 
          </TypographyP>
          <TypographyP className="font-mono ">
            Flutter App Development – Android App Development - iOS App Development – Laravel - Figma - UI/UX
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Screenshot 1</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/tradingchecklist/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 2</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/tradingchecklist/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "cookease",
    category: "Meal Planner & Recipe Booking",
    title: "CookEase – Meal Planner & Recipe Book Mobile App",
    src: "/assets/projects-screenshots/cookease/1.png",
    screenshots: ["1.png", "2.png"],
    live: "https://apps.apple.com/us/app/cookease/id6451418047",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            CookEase is a smart meal planning & recipe book app, helping users discover, plan, and cook delicious meals effortlessly.
          </TypographyP>
          <p className="font-mono mb-2">
            Key Features
          </p>
          <p className="font-mono mb-2">
            - Personalized Meal Plans – Tailored recipes based on dietary preferences
          </p>
          <p className="font-mono mb-2">
            - Grocery List Generator – Auto-creates shopping lists from selected meals
          </p>
          <p className="font-mono mb-2">
            - Step-by-Step Cooking Mode – Interactive recipe guidance
          </p>
          <p className="font-mono mb-2">
            - Cloud Sync & Favorites – Save and access recipes anytime
          </p>
          <TypographyP className="font-mono ">
            I handled full mobile app development, integrating Flutter, Laravel, Firebase, and API-driven recipe suggestions. Now helping thousands cook smarter! 
          </TypographyP>
          <TypographyP className="font-mono ">
            Flutter App Development – Android App Development - iOS App Development – Laravel - Figma
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Screenshot 1</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/cookease/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 2</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/cookease/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "plandemonium",
    category: "Family's Roadmap",
    title: "Plandemonium App - Your family's roadmap to organized chaos",
    src: "/assets/projects-screenshots/plandemonium/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://play.google.com/store/apps/details?id=com.techubllc.plandemonium_app",
    github: "https://apps.apple.com/us/app/plandemonium/id6449745379",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Plandemonium is a family event planning app that helps groups stay organized, plan events, and stay connected effortlessly.
          </TypographyP>
          <p className="font-mono mb-2">
            Key Features
          </p>
          <p className="font-mono mb-2">
            - Group Event Planning – Create & manage family, friend, or work events
          </p>
          <p className="font-mono mb-2">
            - Shared Calendars & Reminders – Never miss an important date
          </p>
          <p className="font-mono mb-2">
            - Interactive Polls & Messaging – Make planning easy & collaborative
          </p>
          <p className="font-mono mb-2">
            - Photo & Video Sharing – Capture memories in one place
          </p>
          <TypographyP className="font-mono ">
            I led full mobile development, integrating Flutter, Laravel, Firebase, and real-time notifications. Now making family planning fun & stress-free! 
          </TypographyP>
          <TypographyP className="font-mono ">
            Flutter App Development – Android App Development - iOS App Development – Laravel - Figma - AWS
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Screenshot 1</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/plandemonium/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 2</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/plandemonium/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "karma",
    category: "Social Awareness & Good Deeds",
    title: "Karma – Social Awareness & Good Deeds Mobile App",
    src: "/assets/projects-screenshots/karma/1.png",
    screenshots: ["1.png", "2.png"],
    live: "",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Karma is a social awareness app that encourages users to do good deeds for stray animals & pets while earning rewards.
          </TypographyP>
          <p className="font-mono mb-2">
            Key Features
          </p>
          <p className="font-mono mb-2">
            - Upload & Share Videos – Spread awareness with engaging content
          </p>
          <p className="font-mono mb-2">
            - Reward System – Earn money for impactful contributions
          </p>
          <p className="font-mono mb-2">
            - Community Engagement – Like, comment & share inspiring stories
          </p>
          <p className="font-mono mb-2">
            - Live Updates & Notifications – Stay informed about trending causes
          </p>
          <TypographyP className="font-mono ">
          I led full app development, integrating Android & iOS apps, Laravel, Firebase, and a custom reward system. Karma is now driving real-world change! 
          </TypographyP>
          <TypographyP className="font-mono ">
            Android App Development - iOS App Development – SwiftUI - Kotlin - Figma
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Screenshot 1</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/karma/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Screenshot 2</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/karma/2.png`,
            ]}
          />
        </div>
      );
    },
  },

];
export default projects;
