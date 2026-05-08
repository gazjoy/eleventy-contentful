import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
// Learn
import LearnToSwim from "./pages/LearnToSwim";
import Teachers from "./pages/Teachers";
import LearnTimetable from "./pages/LearnTimetable";
// Compete
import CompetitiveSquad from "./pages/CompetitiveSquad";
import Masters from "./pages/Masters";
import Coaches from "./pages/Coaches";
import Timetable from "./pages/Timetable";
// Our Club
import About from "./pages/About";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Committee from "./pages/Committee";
import Welfare from "./pages/Welfare";
import ClubPolicies from "./pages/ClubPolicies";
import Fundraising from "./pages/Fundraising";
import Volunteering from "./pages/Volunteering";
// Club Events
import Events from "./pages/Events";
import Results from "./pages/Results";
// Members
import Payments from "./pages/Payments";
import Resources from "./pages/Resources";
import SwimManager from "./pages/SwimManager";
// Join Phoenix
import Join from "./pages/Join";
import FAQs from "./pages/FAQs";
import MembershipFees from "./pages/MembershipFees";
// Standalone
import News from "./pages/News";
import NewsPost from "./pages/NewsPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      // Learn
      { path: "learn-to-swim", Component: LearnToSwim },
      { path: "teachers", Component: Teachers },
      { path: "learn/timetable", Component: LearnTimetable },
      // Compete
      { path: "competitive-squad", Component: CompetitiveSquad },
      { path: "masters", Component: Masters },
      { path: "coaches", Component: Coaches },
      { path: "timetable", Component: Timetable },
      // Our Club
      { path: "about", Component: About },
      { path: "about/committee", Component: Committee },
      { path: "history", Component: History },
      { path: "contact", Component: Contact },
      { path: "welfare", Component: Welfare },
      { path: "club-policies", Component: ClubPolicies },
      { path: "fundraising", Component: Fundraising },
      { path: "volunteering", Component: Volunteering },
      // Club Events
      { path: "events", Component: Events },
      { path: "results", Component: Results },
      // Members
      { path: "payments", Component: Payments },
      { path: "resources", Component: Resources },
      { path: "swim-manager", Component: SwimManager },
      // Join Phoenix
      { path: "join", Component: Join },
      { path: "faqs", Component: FAQs },
      { path: "membership-fees", Component: MembershipFees },
      // Standalone
      { path: "news", Component: News },
      { path: "news/:id", Component: NewsPost },
    ],
  },
]);