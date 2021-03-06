const prevEventsData = [
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