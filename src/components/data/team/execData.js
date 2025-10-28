const execData = [ 
  {
    id: 3,
    name: "Phoebe Ng",
    position: "Secretary",
    year: "2027",
    major: "CogsSci (Design)",
    email: "p3ng@ucsd.edu",
    img: "exec_2025_2026/phoebe.png",
    imgHover: "exec_2025_2026/phoebe_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 4,
    name: "Shamei Lu",
    position: "Treasurer",
    year: "2027",
    major: "CogsSci (ML) & Neurobiology",
    email: "shl148@ucsd.edu",
    img: "exec_2025_2026/shamei.png",
    imgHover: "exec_2025_2026/shamei_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 5,
    name: "Yash Date",
    position: "Sponsorship Chair",
    year: "2028",
    major: "CogsSci (Design) & Data Science",
    email: "ydate@ucsd.edu",
    img: "exec_2025_2026/yash.png",
    imgHover: "exec_2025_2026/yash_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 6,
    name: "Jiayi Li",
    position: "Design Lead",
    year: "2026",
    major: "CogsSci (Design)",
    email: "jil318@ucsd.edu",
    img: "exec_2025_2026/jiayi.png",
    imgHover: "exec_2025_2026/jiayi_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 7,
    name: "Verina Ko",
    position: "Design",
    major: "CogsSci (Design)",
    email: "veko@ucsd.edu",
    year: "2027",
    img: "exec_2025_2026/verina.png",
    imgHover: "exec_2025_2026/verina_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 8,
    name: "Alela Rathsasombath",
    position: "Design",
    major: "CogsSci (Design)",
    email: "arathsasombath@ucsd.edu",
    year: "2026",
    img: "exec_2025_2026/alela.png",
    imgHover: "exec_2025_2026/alela_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 9,
    name: "Evan Chen",
    position: "Design",
    year: "2028",
    major: "CogsSci (Design) & Business Econ",
    email: "evc009@ucsd.edu",
    img: "exec_2025_2026/evan.png",
    imgHover: "exec_2025_2026/evan_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 10,
    name: "Cindy Zhou",
    position: "Design",
    year: "2026",
    major: "CogsSci (Design) & ICAM",
    email: "cizhou@ucsd.edu",
    img: "exec_2025_2026/cindy.png",
    imgHover: "exec_2025_2026/cindy_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 11,
    name: "Jihu Lee",
    position: "Marketing Lead",
    year: "2026",
    major: "CogsSci (Language) & Linguistics (Speech & LS)",
    email: "jil337@ucsd.edu",
    img: "exec_2025_2026/jihu.png",
    imgHover: "exec_2025_2026/jihu_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 12,
    name: "Amita Rahman",
    position: "Marketing",
    year: "2027",
    major: "CogsSci (CBN)",
    email: "a3rahman@ucsd.edu",
    img: "exec_2025_2026/amita.png",
    imgHover: "exec_2025_2026/amita_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 13,
    name: "Keerat Kaur",
    position: "Marketing",
    year: "2026",
    major: "CogsSci (ML)",
    email: "ktuteja@ucsd.edu",
    img: "exec_2025_2026/keerat.png",
    imgHover: "exec_2025_2026/keerat_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 14,
    name: "Rayleen Marquez",
    position: "Marketing",
    year: "2026",
    major: "CogsSci (Design) & Business Econ",
    email: "r3marquez@ucsd.edu",
    img: "exec_2025_2026/rayleen.png",
    imgHover: "exec_2025_2026/rayleen_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 15,
    name: "Philip Ea",
    position: "Marketing",
    year: "2028",
    major: "CogsSci (Design)",
    email: "pea@ucsd.edu",
    img: "exec_2025_2026/philip.png",
    imgHover: "exec_2025_2026/philip_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 16,
    name: "Rohan Chopra",
    position: "Marketing",
    year: "2028",
    major: "CogsSci (Design)",
    email: "rochopra@ucsd.edu",
    img: "exec_2025_2026/rohan.png",
    imgHover: "exec_2025_2026/rohan_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 17,
    name: "Tommy Tran",
    position: "Web Dev",
    year: "2026",
    major: "CogsSci (ML) & Math-CS",
    email: "tot006@ucsd.edu",
    img: "exec_2025_2026/tommy.png",
    imgHover: "exec_2025_2026/tommy_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 18,
    name: "Rollan Nguyen",
    position: "Web Dev",
    year: "2027",
    major: "CogsSci (ML)",
    email: "ron004@ucsd.edu",
    img: "exec_2025_2026/rollan.png",
    imgHover: "exec_2025_2026/rollan_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 19,
    name: "Melody Lin",
    position: "Professional Relations Lead",
    year: "2027",
    major: "CogsSci (ML)",
    email: "yil263@ucsd.edu",
    img: "exec_2025_2026/melody.png",
    imgHover: "exec_2025_2026/melody_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 20,
    name: "Siddhant Bhardwaj",
    position: "Professional Relations",
    year: "2027",
    major: "CogsSci (ML)",
    email: "sibhardwaj@ucsd.edu",
    img: "exec_2025_2026/sidd.png",
    imgHover: "exec_2025_2026/sidd_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  // {
  //   id: 21,
  //   name: "Harini Muralidharan",
  //   position: "Professional Relations",
  //   year: "2026",
  //   major: "CogsSci (CBN)",
  //   email: "hmuralidharan@ucsd.edu",
  //   img: "exec_2024_2025/harini.png",
  //   imgHover: "exec_2024_2025/harini.png",
  //   url: "https://www.facebook.com/webraincogsci"
  // },
  {
    id: 23,
    name: "Yuvika Satapathy",
    position: "Membership Coordinator",
    year: "2027",
    major: "CogsSci (ML)",
    email: "ysatapathy1031@gmail.com",
    img: "exec_2025_2026/yuvika.png",
    imgHover: "exec_2025_2026/yuvika_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 24,
    name: "Nada Hendy",
    position: "Community",
    year: "2027",
    major: "CogsSci (ML)",
    email: "nadahendy26@yahoo.com",
    img: "exec_2025_2026/nada.png",
    imgHover: "exec_2025_2026/nada_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 25,
    name: "Anaya Gundy",
    position: "Programs Co-Director",
    year: "2026",
    major: "CogsSci (CBN)",
    email: "agundy@ucsd.edu",
    img: "exec_2025_2026/anaya.png",
    imgHover: "exec_2025_2026/anaya_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 26,
    name: "Aatyanth Thimma Udayakumar",
    position: "Programs Co-Director",
    year: "2027",
    major: "CogsSci (ML)",
    email: "athimmaudayakumar@ucsd.edu",
    img: "exec_2025_2026/aatyanth.png",
    imgHover: "exec_2025_2026/aatyanth_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 27,
    name: "Nicole Chen",
    position: "Content Writer",
    year: "2027",
    major: "CogsSci (ML)",
    email: "nic004@ucsd.edu",
    img: "exec_2025_2026/nicole.png",
    imgHover: "exec_2025_2026/nicole_s.png",
    url: "https://www.facebook.com/webraincogsci"
  },
  {
    id: 28,
    name: "Tanmayi Kademani",
    position: "Content Writer",
    year: "2028",
    major: "CogsSci (CBN)",
    email: "tkademani@ucsd.edu",
    img: "exec_2025_2026/tanmayi.png",
    imgHover: "exec_2025_2026/tanmayi_s.png",
    url: "https://www.facebook.com/webraincogsci"
  }
];

export default execData;
