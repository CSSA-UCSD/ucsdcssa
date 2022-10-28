const prevEventsData = [
    {
        id: 13,
        name: "Cog Sci Trivia Night",
        date: "10/18/2022",
        img: "fall2022/trivia_night.png",
        url: ""
    },
    {
        id: 12,
        name: "U Can Seriously Design",
        date: "Mon, 10/10/2022 | 5PM-6PM",
        img: "fall2022/Workshop1_IG.png",
        url: "https://www.facebook.com/events/870919060960068/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22group_featured_unit%22%2C%22surface%22%3A%22group%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
        slides: "https://www.canva.com/design/DAFOmerwNNE/QbKCijcM1Hjtc8pczTu2GQ/edit?utm_content=DAFOmerwNNE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
        id: 11,
        name: "Fall GBM",
        date: "Fri, 10/7/2022 | 5PM-6PM",
        img: "fall2022/GBM1_IG.jpg",
        url: "https://www.facebook.com/events/780928833183516/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22group_featured_unit%22%2C%22surface%22%3A%22group%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
        slides: "https://docs.google.com/presentation/d/14iJPHMS7TV04gffheryqJlKZGIaHPn7K2U270IJPYs8/edit?usp=sharing"
    },
    {
        id: 10,
        name: "Yogurt World Fundraiser",
        date: "Mon, 5/23/2022 | 11AM-9PM",
        img: "spring2022/Yogurt_World_Fundraiser_IG.png",
        url: "https://fb.me/e/1VTlDrnpQ"
    },
    {
        id: 9,
        name: "Todd Braver Round Table",
        date: "Mon, 5/16/2022 | 5pm",
        img: "spring2022/Braver_Roundtable_IG.png",
        url: "https://fb.me/e/1LS0cx9gc"
    },
    {
        id: 8,
        name: "Workshop 6: Find Your Summer Success",
        date: "Tues, 5/10/2022 | 5pm",
        img: "spring2022/Workshop6_IG.png",
        url: "https://fb.me/e/1no15zeee",
        slides: "https://docs.google.com/presentation/d/15cplMYvig9d9ZZ7r1axzAEkoucog31I-t74bnzYL5Q4/edit#slide=id.g1271a6c41dd_0_3182"
    },
    {
        id: 7,
        name: "2022-2023 Exec Board Applications",
        date: "DUE Wed, 5/4/2022",
        img: "spring2022/Board_Apps_IG.png",
        url: "https://tinyurl.com/cssaboard22-23",
    },
    {
        id: 4,
        name: "Conference Day 1",
        date: "Tues, 4/26/2022 | 5pm",
        img: "spring2022/4_Day1_Schedule_IG.png",
        url: "https://fb.me/e/2Dxi4P4ij"
    },
    {
        id: 5,
        name: "Conference Day 2",
        date: "Wed, 4/27/2022 | 5pm",
        img: "spring2022/5_Day2_Schedule_IG.png",
        url: "https://fb.me/e/2Dxi4P4ij"
    },
    {
        id: 6,
        name: "Conference Day 3",
        date: "Thur, 4/28/2022 | 5pm",
        img: "spring2022/Day3_Schedule_IG.png",
        url: "https://fb.me/e/2Dxi4P4ij"
    },
    {
        id: 2,
        name: "Workshop 5: Cognitive Science Careers",
        date: "Thur, 4/14/2022 | 5pm",
        img: "spring2022/Workshop5_IG.png",
        url: "https://fb.me/e/64pe5tyjg",
        zoom: "https://ucsd.zoom.us/j/97354999363"
    },
    {
        id: 2,
        name: "BJ's Fundraiser",
        date: "Mon, 4/11/2022 | 11am-11pm",
        img: "spring2022/BJs_Fundraiser_IG_page 1.png",
        url: "https://tinyurl.com/cssabjs-sp22"
    },
    {
        id: 1,
        name: "Spring Quarter Intro GBM",
        date: "Tues, 4/5/2022 | 5pm",
        img: "spring2022/Spring_GBM_IG.png",
        url: "https://fb.me/e/3do0Sh1l6"
    },
    {
        id: 32,
        name: "Networking Workshop",
        date: "Thur, 2/24/2022 | 5pm",
        img: "winter2022/Workshop4_IG.png",
        zoom: "https://ucsd.zoom.us/j/97092185220",
        url: ""
    },
    {
        id: 31,
        name: "Talk Series: Design",
        date: "Thurs, 2/17/2022 | 5pm",
        img: "winter2022/Talk_Series_3_IG.png",
        url: "https://fb.me/e/4926oYGd2",
    },
    {
        id: 30,
        name: "Talk Series: Neuroscience",
        date: "Wed, 2/9/2022 | 4pm",
        img: "winter2022/Talk_Series_2_IG.png",
        url: "https://fb.me/e/52lQPbWwA"
    },
    {
        id: 29,
        name: "Talk Series: Machine Learning",
        date: "Tues, 2/2/2022 | 1pm",
        url: "https://fb.me/e/2ctw5UXRF",
        img: "winter2022/Talk_Series_1_IG.png"
    },
    {
        id: 28,
        name: "Chipotle Fundraiser",
        img: "winter2022/Chipotle_Fundraiser_IG_page1.png",
        imgHover: "winter2022/Chipotle_Fundraiser_IG_page2.png",
        date: "Mon, 1/24/2022 | 4-8pm",
        url: "https://fb.me/e/1pHwtnlaK"
    },
    {
        id: 27,
        name: "Web Dev Committee",
        img: "winter2022/WebDev_Committee_IG.png",
        url: "https://tinyurl.com/CSSAWebDev2022",
        date: "DUE Fri, 1/21/2022"
    },
    {
        id: 26,
        name: "Brainstorming & Ideation Workshop",
        img: "winter2022/Workshop3_IG.png",
        date: "Wed, 1/19/2022 | 5-6pm",
        slides: "https://docs.google.com/presentation/d/1L913tK0uwIxqIUmHhBrQI5Kz7_D-ttrgZKgfyebnQ1A/edit?usp=sharing"
    },
    {
        id: 25,
        name: "GBM #1",
        date: "Tues, 1/11/2022 | 6-7pm",
        img: "winter2022/Winter_GBM_IG.png",
        url: "https://www.facebook.com/events/265023225698381/",
        slides: "https://docs.google.com/presentation/d/1VaGGh7B2NcDNXq-OCgyl1sc_GfcrW94TPvYq7aJEhh8/edit?usp=sharing",
    },
    {
        id: 24,
        name: "Study Jam",
        date: "Tues, 11/30/2021 | 5-9pm | Geisel 721",
        img: "fall2021/StudyJam_IG.png",
        url: "",
    },
    {
        id: 23,
        name: "Ace the Behavioral Interview",
        date: "Tues, 11/16/2021 | 6pm | Bear Room",
        img: "fall2021/Workshop2_IG.png",
        url: "https://fb.me/e/1eUI4bGmY",
    },
    {
        id: 22,
        name: "Lab Open House",
        date: "Tues, 11/9/2021 | 5PM | PC West Ballroom",
        img: "fall2021/LOH_IG.png",
        // url: "https://fb.me/e/16UezzAN9",
        url: "https://fb.watch/an56Fe_alh/"
    },
    {
        id: 21,
        name: "Welcome Banquet",
        date: "Tues, 11/2/2021 | 6pm | PC West Ballroom",
        img: "fall2021/Banquet_IG.png",
        url: "https://fb.me/e/7fFAFhF3F",
    },
    {
        id: 20,
        name: "Personal Website Tutorial",
        date: "Tues, 10/19/2021 | 6-7pm",
        img: "fall2021/Workshop1_IG.png",
        url: "https://fb.me/e/22QwS1dZR",
        zoom: "https://urldefense.proofpoint.com/v2/url?u=https-3A__ucsd.zoom.us_rec_share_dFmrYH5shm56mh5Mh5R-5Fmyns5Y3UeQNUupcWMpLYmAeNzrXtMmodOEHbwncRfSMs.BiOaO1-2Dlp52-2Dmgf-2D&d=DwQFAg&c=-35OiAkTchMrZOngvJPOeA&r=vtzudLtkCgXHdLQW3KJk-A&m=hNsp-4axoJr4dsx2292W2iyVo9KPBnyqN4Ft62MenVc&s=PP92nMLNfs0D5AAhLIZYF_eVz8Wmz26XfF2LqCq5SfM&e=",
    },
    {
        id: 19,
        name: "Social #1",
        description: "",
        date: "Tues, 10/12/2021 | 5pm",
        img: "fall2021/Social1_IG.png",
        url: "",
    },
    {
        id: 18,
        name: "GBM #1",
        description: "",
        date: "Tues, 10/5/2021 | 6-7pm",
        img: "fall2021/GBM1_IG.png",
        url: "https://www.facebook.com/events/4611675402217002/?ti=ls",
        slides: "https://docs.google.com/presentation/d/1bMrU6Y-WEFJd2TzvXV92lcrkJHY-iwDL5KKUCpvF5Y4/edit?usp=sharing"
    },
    {
        id: 17,
        name: "Mock Interviews",
        description: "",
        date: "Wed, 5/19/2021 | 5pm",
        img: "spring2021/MockInterviewWorkshop.png",
        url: "https://fb.me/e/QtSFsbcI",
    },
    {
        id: 16,
        name: "2021 - 2022 Executive Board Applications",
        description: "",
        date: "Apply by Fri, 4/30/2021",
        img: "spring2021/ExecApps.png",
        url: "https://www.facebook.com/groups/ucsdbrains/permalink/4214111275279473/",
    },
    {
        id: 15,
        name: "Making the Most of This Summer",
        description: "",
        date: "Wed, 5/05/2021 | 5pm",
        img: "spring2021/SummerWorkshop.png",
        url: "https://fb.me/e/hSZcRLU4s"
    },
    {
        id: 14,
        name: "2021 National Cognitive Science Conference",
        description: "",
        date: "Mon-Wed 4/5 - 4/7/2021 | 5pm",
        img: "spring2021/Conference.png",
        url: "https://cssa-ucsd.github.io/conference2021//#/",
        zoom: "https://cssa-ucsd.github.io/conference2021//#/schedule"
    },
    {
        id: 13,
        name: "Talk Series #4: Clinical Aspects + Language and Culture",
        description: "",
        date: "Wed 2/17/2021 | 5pm",
        img: "winter2021/TalkSeries_Lang.png",
        url: "https://fb.me/e/8xVEHDo7V",
        zoom: "https://drive.google.com/file/d/1SQVnixgOIeBns1Y1oEwD083i5K37uxPa/view"
    },
    {
        id: 12,
        name: "Talk Series #3: Design + Interaction",
        description: "",
        date: "Wed 2/10/2021 | 5pm",
        img: "winter2021/TalkSeries_DI.png",
        url: "https://fb.me/e/24QWpmWSg",
        zoom: "https://drive.google.com/file/d/1mxhekSU7bw4T5SP-rcB9gapyYPcklJbi/view?usp=sharing"
    },
    {
        id: 11,
        name: "Talk Series #2: Machine Learning",
        description: "",
        date: "Wed 2/3/2021 | 5pm",
        img: "winter2021/TalkSeries_ML.png",
        url: "https://www.facebook.com/groups/ucsdbrains/permalink/3988608454496424/",
        zoom: "https://drive.google.com/file/d/1hbjr-OAZSkDFKOhK76crwhbaRSVEP44i/view"
    },
    {
        id: 10,
        name: "Talk Series #1: Neuroscience + CBN",
        description: "",
        date: "Wed 1/27/2021 | 5PM",
        img: "winter2021/TalkSeries_Neuro.png",
        url: "https://fb.me/e/2gLAxHDPd",
        zoom: "https://drive.google.com/file/d/1mLthE6tpFuQ3oGNys_trAOqerOg9dTb-/view?fbclid=IwAR3vBq5Qbh_LePm5aAOZZyEB-fvl8WU8NFFlXmrQX0Saj4Pdl_xtYxyRuc4"
    },
    {
        id: 9,
        name: "Winter Quarter Game Night",
        description: "",
        date: "Fri 1/22/2021 | 5PM PT",
        img: "winter2021/WinterSocial.png",
        url: "https://fb.me/e/1UJMgxfvO",
    },
    {
        id: 8,
        name: "Introduction to Data Analytics with Python",
        description: "",
        date: "Wed 1/13/2021 | 5PM PT",
        img: "winter2021/IntroToDataAnalytics.png",
        slides: "https://cssa-ucsd.github.io/wi2021-data-analytics-python/#/",
        zoom: "https://drive.google.com/file/d/1t4kpRnk6lNTjYiyeRjbrrAbRNDmgZkO8/view?usp=sharing_",
    },
    {
        id: 7,
        name: "Portfolio Review",
        description: "",
        date: "Wed 12/2/2020 | 5PM PT",
        img: "fall2020/PortfolioReview.png",
        url: "https://fb.me/e/3UQnDvWsn",
        slides: "https://docs.google.com/presentation/d/1FuxrrVrrdhMHjK863Iju4vjEsk3FXB2R85jKtDB6wkg/edit?usp=sharing"
    },
    {
        id: 6,
        name: "Lab Open House",
        description: "",
        date: "Wed 11/18/2020 | 5PM PT",
        img: "fall2020/LabOpenHouse.png",
        url: "https://fb.me/e/1M1a694Ez",
    },
    {
        id: 5,
        name: "Cross Campus Mixer",
        description: "",
        date: "Sat 11/14/2020 | 5PM PT",
        img: "fall2020/CrossCampus.png",
        imgHover: "fall2020/CrossCampusSchedule.png",
        url: "https://fb.me/e/3avRebqph",
    },
    {
        id: 4,
        name: "Lab Tips and Prep",
        description: "",
        date: "Wed 10/28/2020 | 5PM",
        img: "fall2020/LabTipsWorkshop.png",
        slides: "https://docs.google.com/presentation/d/1O59qzQAtZuaz650pGVJIF2Mi2erplJonw9Bctja9dOM/edit?fbclid=IwAR0KqZtMet4McepvB-hQatSVIM97AVOaB0JlUeU_QN8G21MBnX-9KymsFA0#slide=id.p",
        zoom: "https://fb.watch/1p_AaMcjns/"
    },
    {
        id: 3,
        name: "UX Resume Workshop + Networking Event",
        description: "",
        date: "Wed 10/21/2020 | 5PM",
        img: "fall2020/GeekGirl.png",
        url: "https://fb.me/e/aVnorNqcm",
        zoom: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1kfHbbc-oLv2EUZE52DG80Rom2dRhctpO%3Fusp%3Dsharing%26fbclid%3DIwAR226iehmJge32ShnTZrT2-LZqvGXdyIV0Yd5fU2xukAIh0aPWv4VdEK1ow&h=AT34QUYlyeCTaBawvjkagHhLZlzwoUDGzv0jni7fwbwycs1VzxdnxAlXL431zIgP9QuFmYpQ1PLv34YelHZsE7ptEWH_ZvCzbptir8Uxp-rIxIXRE5jx35fKrlgyr079nsgHvVKW5j_mMYa1St3eSAhsrg&__tn__=-UK-R&c[0]=AT0DDjo5YfZh-c0cElGBk4wxfQJ7wUC8P9UhGSsNXdf4O8pKIhJJ9jDhERAz8T9Ry0z726EcxZbHO8_gO2Uzod9DKhPM4aiaBaLnwCzA0lzNNEKq0PuWP_OdqbTWrBPPNQkwY8oXb_x2fptKPjZhqAIrzJjnt7HRL68lQRIGd8xVxO6BzT9mBaWpHPG0Dg8j5dcAxPbrRXpTEQ"
    },
    {
        id: 2,
        name: "Scavenger Hunt Social",
        description: "",
        date: "Fri 10/16/2020 | 5PM",
        img: "fall2020/Social1.gif",
    },
    {
        id: 1,
        name: "General Body Meeting #1",
        description: "",
        date: "Wed 10/07/2020 | 6-7:30PM",
        img: "fall2020/GBM1.png",
        slides: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fpresentation%2Fd%2F1UfAxS4aEHDWLigYNBzOBXff1c0VxfAFAXs7exsl0Xe8%2Fedit%3Fusp%3Dsharing%26fbclid%3DIwAR2kGuKHFlyaEgq8QJq2IJkumKxuVLyjGJhmXKVHyNySrFP2nlUWrFh2eAs&h=AT1l_iOHwhSEbQ4J-Axy5q9oy906vzeshnhmilD5GiHyr_3PRdAP7R8gYIY_EGsgwxh6HSa99jdPaZceI_BLs-vd23ZMqa8ib8dfe1fGslOV8yiOm6oEI2jVYearrAnV-PvKSbQbp1q_E1dnnMVc1WMbgA&__tn__=-UK-R&c[0]=AT3IHqQEm4GGpAvHpkXKTznF64pBqg_ZYQW_CU0mmu__DZWfWLI8Rk-S8EIWEOw4jP2gf9Y5nZoq7pyFr4bVnBoJN8F-5PCi7OxOux2zILNox4HCEOPHRdDZkh_W02wvUE3b_ORKs7TtRd3VnvGPfsKqmPE2lyHFIVcedI4f-oTcTwV9Ci8D_jAr7d8ENIM",
        zoom: "https://www.facebook.com/watch/?v=1277467062590805"
    }
]

export default prevEventsData;