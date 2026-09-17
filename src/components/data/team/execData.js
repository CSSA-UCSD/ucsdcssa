const execData = [ 
  {
    id: 3,
    name: "Emery Wang",
    position: "Secretary",
    year: "2027",
    major: "CogsSci & Economics",
    email: "emw017@ucsd.edu",
    img: "exec_2026_2027/emery.jpg",
    imgHover: "exec_2026_2027/emery.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 4,
    name: "Wesley Liu",
    position: "Treasurer",
    year: "2027",
    major: "Political Science & Chinese Studies",
    email: "cyl025@ucsd.edu",
    img: "exec_2026_2027/wesley.jpg",
    imgHover: "exec_2026_2027/wesley.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 5,
    name: "Sarah Atito",
    position: "Finance Associate",
    year: "2027",
    major: "CogSci (Neuroscience) & Economics",
    email: "satito@ucsd.edu",
    img: "exec_2026_2027/placeholder.png",
    imgHover: "exec_2026_2027/placeholder.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 6,
    name: "Nada Hendy",
    position: "Sponsorship Chair",
    year: "2027",
    major: "CogSci (ML) & Computer Science",
    email: "nhendy@ucsd.edu",
    img: "exec_2026_2027/nada.png",
    imgHover: "exec_2026_2027/nada.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 7,
    name: "Tse Sun",
    position: "Sponsorship Chair",
    year: "2027",
    major: "CogSci (Language) & Japanese/Statistics",
    email: "szc@ucsd.edu",
    img: "exec_2026_2027/tse.png",
    imgHover: "exec_2026_2027/tse.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 8,
    name: "Leeloo Chow",
    position: "Content & Media Associate",
    year: "2027",
    major: "Biochemistry",
    email: "lechow@ucsd.edu",
    img: "exec_2026_2027/leeloo.jpg",
    imgHover: "exec_2026_2027/leeloo.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 9,
    name: "Isabelle Wang",
    position: "Content & Media Associate",
    year: "2027",
    major: "CogSci (Design)",
    email: "i6wang@ucsd.edu",
    img: "exec_2026_2027/isabelle.jpg",
    imgHover: "exec_2026_2027/isabelle.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 10,
    name: "Ryan Tran",
    position: "Design & Web Associate",
    year: "2027",
    major: "CogSci (ML) & Computer Science",
    email: "ryt002@ucsd.edu",
    img: "exec_2026_2027/ryan.png",
    imgHover: "exec_2026_2027/ryan.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 11,
    name: "Skye Belsher",
    position: "Prof. Relations Lead",
    year: "2029",
    major: "CogSci (ML) & Data Science",
    email: "skbelcher@ucsd.edu",
    img: "exec_2026_2027/skye.jpg",
    imgHover: "exec_2026_2027/skye.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 12,
    name: "Joy Chien",
    position: "Prof. Relations Associate",
    year: "2029",
    major: "CogSci (ML) & Computer Science",
    email: "j4chien@ucsd.edu",
    img: "exec_2026_2027/joy.jpg",
    imgHover: "exec_2026_2027/joy.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 13,
    name: "Anusha Shinde",
    position: "Prof. Relations Associate",
    year: "2029",
    major: "CogSci (ML) & Data Science",
    email: "nhendy@ucsd.edu",
    img: "exec_2026_2027/anusha.png",
    imgHover: "exec_2026_2027/anusha.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 14,
    name: "Laurie Wu",
    position: "Prof. Relations Associate",
    year: "2028",
    major: "CogSci (ML) & Business Analytics",
    email: "yiw295@ucsd.edu",
    img: "exec_2026_2027/laurie.jpg",
    imgHover: "exec_2026_2027/laurie.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 15,
    name: "Takuhiro Nishimura",
    position: "Professional Relations Shadow",
    year: "2029",
    major: "CogSci (CBN) & Education Studies ",
    email: "tanishimura@ucsd.edu",
    img: "exec_2026_2027/taku.jpg",
    imgHover: "exec_2026_2027/taku.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 16,
    name: "Yash Date",
    position: "Community Chair",
    year: "2028",
    major: "CogSci & Data Science",
    email: "ydate@ucsd.edu",
    img: "exec_2026_2027/yash.jpg",
    imgHover: "exec_2026_2027/yash.jpg",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 17,
    name: "Tanya Bhat",
    position: "Programs Director",
    year: "2028",
    major: "CogSci (ML) & Computer Science",
    email: "tbhat@ucsd.edu",
    img: "exec_2026_2027/placeholder.png",
    imgHover: "exec_2026_2027/placeholder.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 18,
    name: "Tanmayi Kademani",
    position: "Content Writer",
    year: "2028",
    major: "CogSci (CBN) & Bio-Anthropology",
    email: "tkademani@ucsd.edu",
    img: "exec_2026_2027/tanmayi.png",
    imgHover: "exec_2026_2027/tanmayi.png",
    url: "https://www.facebook.com/webraincogsci"
  },
];

export default execData;