export const CLUB_NAME = "Cannock Phoenix Swimming Club";
export const CLUB_SHORT = "CPSC";
export const CLUB_TAGLINE = "Inspiring every swimmer — from first splash to podium finish";

export interface GalaEvent {
  id: string;
  name: string;
  location: string;
  address: string;
  blurb: string;
  date: string;
  time: string;
  link?: string;
}

export const galas: GalaEvent[] = [
  {
    id: "storm-trident-2026",
    name: "Storm Trident 2026",
    location: "Sandwell Aquatics Centre",
    address: "Londonderry Lane, Smethwick, B67 6RR",
    blurb:
      "Storm Trident is one of the region's most exciting open water galas, welcoming competitive swimmers from across the Midlands. Featuring events across all strokes and age groups, it's a fantastic opportunity for our squad to test their times in a high-energy arena.",
    date: "Saturday, 26 April 2026",
    time: "9:00am",
    link: "https://sandwellaquatics.org/event/stormtrident-2026/",
  },
  {
    id: "midlands-open-2026",
    name: "Midlands Open Championships 2026",
    location: "Birmingham Aquatics Centre",
    address: "Holliday Wharf, Birmingham, B1 1TT",
    blurb:
      "The prestigious Midlands Open Championships returns, bringing together the region's best competitive swimmers for a weekend of top-flight racing. Qualification times apply — speak to your coach for details.",
    date: "Saturday, 6 June 2026",
    time: "8:30am",
    link: "#",
  },
  {
    id: "summer-splash-2026",
    name: "Summer Splash Gala 2026",
    location: "Cannock Chase Leisure Centre",
    address: "Auctioneers Way, Cannock, WS11 1AB",
    blurb:
      "Our very own home gala — a fantastic day of racing for swimmers of all abilities. Open to club members and invited clubs, Summer Splash is always a highlight of the calendar and a brilliant atmosphere for newer competitive swimmers.",
    date: "Saturday, 18 July 2026",
    time: "10:00am",
    link: "#",
  },
];

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  body?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: "5",
    title: "Phoenix Swimmers Shine at County Championships",
    category: "Results",
    excerpt:
      "An exceptional weekend at the Staffordshire County Championships saw CPSC return home with 14 personal bests and three podium finishes — our best county result in five years.",
    date: "14 April 2026",
    image:
      "https://images.unsplash.com/photo-1766804627053-c8ca4dfb65af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMGNvbXBldGl0aW9uJTIwY2hhbXBpb25zaGlwJTIwcG9kaXVtfGVufDF8fHx8MTc3NzYzMDU5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    body: [
      "Cannock Phoenix Swimming Club had an outstanding weekend at the Staffordshire County Championships held at the Staffordshire County Aquatics Centre, returning home with fourteen personal best times and three podium finishes — the club's strongest collective county performance in five years.",
      "Gold medals went to Ellie Matthews in the Girls 13–14 100m Backstroke and to the Boys 15–16 4×50m Freestyle relay team, with a bronze following in the Girls 11–12 200m Medley. Head Coach praised the squad's composure: \"Every single swimmer raced with confidence and purpose. These results are the product of months of dedicated early-morning training.\"",
      "Six athletes also hit qualifying standards for the Midlands Open Championships in June, meaning Phoenix will have its largest-ever Midlands Open squad representation this summer.",
      "A special mention goes to the junior swimmers competing at county level for the first time, all of whom performed admirably. Full results are available in the Members area and on SwimManager.",
    ],
  },
  {
    id: "1",
    title: "Fantastic Results at the Spring Invitational",
    category: "Results",
    excerpt:
      "Our competitive squad delivered an incredible performance at last weekend's Spring Invitational, with 12 personal bests across the group. A huge well done to all swimmers and coaches involved.",
    date: "18 March 2026",
    image:
      "https://images.unsplash.com/photo-1686323955670-0bde6a3aba73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHJhY2UlMjBjb21wZXRpdGlvbiUyMGxhbmVzfGVufDF8fHx8MTc3NDQ2MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    body: [
      "Cannock Phoenix Swimming Club had an outstanding day at the Spring Invitational held at Sandwell Aquatics Centre last Saturday, with the squad recording twelve personal best times across the session — the best collective performance the club has seen at this particular meet.",
      "Stand-out swims came from across the age groups, with several younger swimmers dipping under key qualifying times for the first time. Head Coach confirmed that three athletes have now met the standard required for the Midlands Open Championships in June.",
      "The meet also served as a first competitive outing for four of our newer squad members, all of whom impressed with their composure and race execution. It was a reminder of the depth developing within the club at every level.",
      "A huge well done to every swimmer who competed, and a big thank you to the parents and volunteers who made the trip and helped with timekeeping on the day. Detailed results are available in the Members area.",
    ],
  },
  {
    id: "2",
    title: "Learn to Swim Programme — Summer Enrolment Now Open",
    category: "Learn to Swim",
    excerpt:
      "Places are filling fast for our popular summer Learn to Swim sessions. Whether your child is a complete beginner or working towards their first club badges, we have a class to suit them.",
    date: "10 March 2026",
    image:
      "https://images.unsplash.com/photo-1761589871820-b9cfbfb5d853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwdG8lMjBzd2ltJTIwcG9vbHxlbnwxfHx8fDE3NzQ0NjA5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body: [
      "Enrolment is now open for our Summer 2026 Learn to Swim programme, running from Monday 6 July through to Saturday 29 August at Cannock Chase Leisure Centre.",
      "We have spaces available across all four stages of our structured Swim England-aligned programme — from Stage 1 Water Confidence for complete beginners aged four and above, right through to Stage 4 Club Ready for older swimmers preparing to join the competitive squad.",
      "Our teaching team, led by Head Teacher Aidan Bolas, delivers small-group sessions of no more than eight children to ensure every pupil receives personalised attention. All teachers hold current Swim England qualifications and are DBS enhanced checked.",
      "Places are limited and the summer programme fills up quickly — particularly Stages 1 and 2. To secure your child's place or to discuss which stage is right for them, please use the Request a Trial form and we will be in touch within 48 hours.",
    ],
  },
  {
    id: "3",
    title: "Volunteer Spotlight: Thank You to Our Poolside Heroes",
    category: "Community",
    excerpt:
      "We shine the spotlight on the incredible volunteers who make race days possible — from timekeeping to fundraising, our club simply wouldn't function without you. Read their stories inside.",
    date: "2 March 2026",
    image:
      "https://images.unsplash.com/photo-1582263100578-bc933ae2397a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzd2ltbWluZyUyMHZvbHVudGVlcnMlMjBzcG9ydHxlbnwxfHx8fDE3NzQ0NjA5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body: [
      "Cannock Phoenix Swimming Club runs entirely on the goodwill and dedication of its volunteers — and ahead of National Volunteering Week, we wanted to shine a light on just a few of the people who make everything possible.",
      "From the parents who arrive an hour before a gala to set up lane ropes and timing equipment, to the committee members who spend evenings managing entries, updating SwimManager and chasing insurance renewals — the club would simply not exist without them.",
      "This month we sat down with three of our longest-serving volunteers: timekeeper and former swimmer Dave Humphries, who has been poolside at every home gala since 1998; fundraising coordinator Janet Price, who has raised over £8,000 for the club through sponsored events since 2019; and welfare officer Cath Bolas, whose calm presence makes every swimmer and parent feel safe and looked after.",
      "If you'd like to get involved — whether as a timekeeper, marshal, committee member, or fundraiser — please visit our Fundraising & Volunteering page or speak to any committee member at your next session.",
    ],
  },
  {
    id: "4",
    title: "Club AGM – Wednesday 15 April",
    category: "Club News",
    excerpt:
      "All members and parents are invited to attend the Cannock Phoenix AGM on Wednesday 15 April at 7pm. Agenda items include committee elections, pool slot updates and the 2026/27 subscription rates.",
    date: "25 February 2026",
    // no image — text-only announcement
    body: [
      "The Cannock Phoenix Annual General Meeting will be held on Wednesday 15 April 2026 at 7:00pm in the upstairs function room at Cannock Chase Leisure Centre. All members, parents, and guardians are warmly invited to attend.",
      "The agenda will include the presentation of the 2025–26 annual accounts, election of committee officers for 2026–27, an update on pool slot availability for the coming season, and the first reading of proposed 2026–27 subscription rates.",
      "The AGM is your opportunity to have a say in how the club is run, to ask questions of the committee, and to put yourself forward for any voluntary roles that are open. No experience is necessary — just enthusiasm and a willingness to help.",
      "A full agenda will be circulated to all registered members by email no later than 1 April. If you have items you wish to raise, please submit them to the Club Secretary no later than 8 April.",
    ],
  },
  {
    id: "6",
    title: "New Coaching Partnership with Staffordshire ASA",
    category: "Club News",
    excerpt:
      "We are delighted to announce a new formal partnership with Staffordshire ASA that will bring county-level coaching workshops and talent identification pathways directly to our squad.",
    date: "20 January 2026",
    // no image — text-only announcement
    body: [
      "Cannock Phoenix Swimming Club is proud to announce a new formal coaching partnership with Staffordshire Amateur Swimming Association, effective from February 2026. The partnership will provide our competitive squad with access to county-level coaching workshops, biomechanics analysis sessions, and a structured talent identification pathway.",
      "Under the agreement, a Staffordshire ASA performance coach will visit our training sessions four times per year to deliver specialist stroke clinics for our senior and development squads. We will also have first access to county CPD events for our own coaching team.",
      "Club Chair commented: \"This is a significant step forward for the club. We've always believed our swimmers have county and regional potential, and this partnership gives them a clearer pathway to reach it.\"",
      "The partnership will be formally introduced at a parent information evening in February — details to follow.",
    ],
  },
  {
    id: "7",
    title: "Christmas Gala: Records, Smiles and Mince Pies",
    category: "Community",
    excerpt:
      "Our annual Christmas Gala rounded off a brilliant 2025 in style, with three club records broken, a raffle raising over £400 for club funds, and the traditional post-race mince pie celebrations.",
    date: "6 December 2025",
    image:
      "https://images.unsplash.com/photo-1774599661131-9621f902d76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzcG9ydHMlMjBjbHViJTIwZ2F0aGVyaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc3NjMwNTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    body: [
      "The Cannock Phoenix Christmas Gala is always a highlight of the club calendar, and the 2025 edition did not disappoint. Over 80 swimmers took to the water at Cannock Chase Leisure Centre in front of a packed poolside crowd, with the atmosphere as festive as it was competitive.",
      "Three club records fell on the night: in the Girls 12 & Under 50m Butterfly, Girls 15 & Over 100m Backstroke, and the Mixed 4×50m Freestyle relay. Each record-breaking performance was met with enormous cheers from the stands.",
      "Off the water, the parent fundraising committee ran a raffle and tombola that raised £418 for the club's equipment fund — exceeding the target for the third consecutive year. A huge thank you to everyone who donated prizes and bought tickets.",
      "To every swimmer, parent, coach, and volunteer who made the evening possible: thank you, and Merry Christmas from everyone at Cannock Phoenix.",
    ],
  },
  {
    id: "8",
    title: "Autumn Qualifier: Eight Swimmers Earn Regional Spots",
    category: "Results",
    excerpt:
      "Eight Cannock Phoenix swimmers have qualified for the Midlands Regional Championships after a superb set of performances at last weekend's Autumn Qualifier in Wolverhampton.",
    date: "19 October 2025",
    image:
      "https://images.unsplash.com/photo-1750074167875-d69874232eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBhdXR1bW4lMjBzZWFzb24lMjB0cmFpbmluZ3xlbnwxfHx8fDE3Nzc2MzA1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    body: [
      "Eight Cannock Phoenix swimmers have secured places at the Midlands Regional Championships following an impressive set of performances at the Autumn Qualifier held at Wolverhampton Central Baths last weekend.",
      "The qualifying swims spanned six different events and four age groups, a testament to the breadth of talent developing across the squad. Several of the eight had been narrowly missing qualifying standards all season, making the breakthrough all the more rewarding.",
      "Head Coach said: \"We targeted this meet specifically because the conditions are fast and the competition level pushes our swimmers to dig deep. I'm incredibly proud of how every single athlete performed — including those who just missed out.\"",
      "The Midlands Regional Championships take place in January 2026. More details on preparation camps, travel arrangements and team kit requirements will be circulated to qualifying swimmers and their families shortly.",
    ],
  },
];