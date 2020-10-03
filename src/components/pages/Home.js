import React from "react";
import HomeInitial from "../components/home/HomeInitial";
import Sidebar from "../components/home/Sidebar";
import Logo from "../../img/logos/logo-text.svg";
import AOS from "aos";

class Home extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        return (

            <div>
                <div className="animation">
                <svg 
                 width="100%" viewBox="0 0 1440 880" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g> 
                    <circle opacity="0.5" cx="1264.11" cy="747.115" r="30" transform="rotate(-0.220059 1264.11 747.115)" fill="#FD643D"/>
                    <circle opacity="0.5" cx="962.794" cy="431.575" r="30" transform="rotate(-165.449 962.794 431.575)" fill="#FEC44A" fillOpacity="0.5"/>
                    <circle opacity="0.5" cx="496.115" cy="68.115" r="30" transform="rotate(-0.220059 496.115 68.115)" fill="#133B51"/>
                    <circle opacity="0.5" cx="1321.3" cy="79.8139" r="30" transform="rotate(-0.220059 1321.3 79.8139)" fill="#92F9F3"/>
                    <circle opacity="0.5" cx="1344.44" cy="636.729" r="30" transform="rotate(-0.220059 1344.44 636.729)" fill="#92F9F3"/>
                    <path className="path" d="M1381.5 368.784L1100.54 368.784C1077.53 368.784 1063.09 393.615 1074.46 413.614L1110.71 477.349" stroke="#133B51" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1294.34 514.182L1192.96 657.7" stroke="#FEC44A" strokeOpacity="0.5" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M820.97 -5.26511L878.3 69.5016C884.002 76.938 892.851 81.2828 902.222 81.2468L1314.04 79.6651" stroke="#92F9F3" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M994.17 192.108L1274.66 191.03C1284.84 190.991 1294.34 196.116 1299.9 204.642L1348.36 278.948" stroke="#133B51" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1372.57 149.618L1535.5 391.994" stroke="#FEC44A" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="1110.85" cy="484.423" r="21.1258" transform="rotate(-0.220059 1110.85 484.423)" fill="#133B51"/>
                    <circle cx="1192.15" cy="658.251" r="21.1258" transform="rotate(-0.220059 1192.15 658.251)" fill="#FEC44A" fillOpacity="0.5"/>
                    <circle cx="649.207" cy="126.207" r="21.1258" transform="rotate(-0.220059 649.207 126.207)" fill="#FD643D"/>
                    <circle cx="741.207" cy="186.207" r="21.1258" transform="rotate(-0.220059 741.207 186.207)" fill="#FEC44A"/>
                    <circle cx="214.207" cy="180.207" r="21.1258" transform="rotate(-0.220059 214.207 180.207)" fill="#FEC44A"/>
                    <path className="path" d="M1341.82 636.531L1443.36 487.024C1452.77 473.179 1448.94 454.307 1434.89 445.218V445.218C1430.03 442.077 1424.36 440.416 1418.57 440.438L1262.68 441.037" stroke="#92F9F3" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="1345.12" cy="635.995" r="21.1258" transform="rotate(119.243 1345.12 635.995)" fill="#92F9F3"/>
                    <circle cx="1321.6" cy="79.9386" r="21.1258" transform="rotate(-0.220059 1321.6 79.9386)" fill="#92F9F3"/>
                    <circle cx="1348.21" cy="284.207" r="21.1258" transform="rotate(-0.220059 1348.21 284.207)" fill="#133B51"/>
                    <path className="path" d="M1115.72 554.926L1116.35 719.81C1116.42 736.378 1129.9 749.758 1146.47 749.694L1261.9 749.251" stroke="#FD643D" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="1263.84" cy="746.751" r="21.1258" transform="rotate(-0.220059 1263.84 746.751)" fill="#FD643D"/>
                    <circle r="21.1258" transform="matrix(-0.999993 -0.00384075 -0.00384075 0.999993 482.793 684.707)" fill="#92F9F3"/>
                    <path className="path" d="M1355.88 348.996L1126.06 349.879C1102.58 349.969 1087.89 375.329 1099.5 395.744L1135.27 458.646" stroke="#92F9F3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1293.05 465.925L1191.67 609.443" stroke="#92F9F3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M933.49 147L851.66 263.133C845.91 271.293 836.552 276.147 826.57 276.147L659.111 276.147C651.031 276.147 643.277 272.962 637.532 267.281L571.5 202" stroke="#92F9F3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M771 -22.1075L828.12 52.3866C833.954 59.9948 843.008 64.4399 852.595 64.4031L1264.07 62.8227" stroke="#FD643D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1008.64 168.941L1237.49 169.411C1247.65 169.432 1257.14 174.48 1262.84 182.893L1312.63 256.413" stroke="#92F9F3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1336.5 138.756L1501.44 383.124" stroke="#FD643D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1305.75 618.492L1407.29 468.986C1416.7 455.14 1412.87 436.268 1398.82 427.18V427.18C1393.96 424.038 1388.29 422.377 1382.51 422.4L1226.61 422.998" stroke="#133B51" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M1084.03 524.833L1084.66 689.024C1084.72 705.975 1098.52 719.664 1115.47 719.599L1230.21 719.158" stroke="#92F9F3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path className="path" d="M671 -20.543L775.132 105.785C784.13 116.7 784.279 132.418 775.491 143.504L745.5 181.334" stroke="#FEC44A" strokeOpacity="0.5" strokeWidth="15"/>
                    <path className="path" d="M714 -11.543L817.935 114.546C827.022 125.569 827.074 141.472 818.061 152.555L768.5 213.5" stroke="#133B51" strokeWidth="5"/>
                    <path className="path" d="M213.885 181.137L401.851 181.083L571.707 181.083C579.584 181.083 587.146 184.181 592.758 189.709L647.242 243.371C652.854 248.899 660.416 251.997 668.293 251.997L870.562 251.997C880.25 251.997 889.342 247.319 894.973 239.435L971 133" stroke="#FEC44A" strokeOpacity="0.5" strokeWidth="15"/>
                    <path className="path" d="M644.5 125H199.349C189.711 125 180.659 120.369 175.02 112.552L83 -15" stroke="#FD643D" strokeWidth="15"/>
                    <path className="path" d="M608.5 105H157.349C147.711 105 138.659 100.369 133.02 92.552L41 -35" stroke="#133B51" strokeWidth="5"/>
                    <path className="path" d="M137 183.5V654.5C137 671.069 150.431 684.5 167 684.5H483" stroke="#92F9F3" strokeWidth="15"/>
                    <path className="path" d="M169 266.5V689C169 705.569 182.431 719 199 719H440" stroke="#FD643D" strokeWidth="5"/>
                    <path className="path" d="M498 68H603.978C629.738 68 643.519 37.6723 626.576 18.2683L580.5 -34.5" stroke="#133B51" strokeWidth="15"/>
                    <path className="path" d="M867 814.936L913.974 636.788C915.748 630.06 919.806 624.157 925.452 620.091L1003.44 563.935C1015.29 555.403 1019.28 539.578 1012.88 526.451L967.584 433.474" stroke="#FEC44A" strokeOpacity="0.5" strokeWidth="15"/>
                    <path className="path" d="M911 738L950.542 580.989C952.423 573.522 957.103 567.064 963.613 562.952L1033.55 518.775C1047.08 510.232 1051.52 492.58 1043.65 478.653L998.47 398.7" stroke="#133B51" strokeWidth="5"/>
                    <circle cx="962.874" cy="431.803" r="21.1258" transform="rotate(-165.449 962.874 431.803)" fill="#FEC44A" fillOpacity="0.5"/>
                    <circle cx="495.98" cy="67.9154" r="21.1258" transform="rotate(-0.220059 495.98 67.9154)" fill="#133B51"/>
                    <path className="path" d="M536 53H561.145C586.959 53 600.72 22.5629 583.668 3.18292L569.429 -13" stroke="#FD643D" strokeWidth="5"/>
                    <circle cx="74.6797" cy="124.876" r="21.1258" transform="rotate(-44.6463 74.6797 124.876)" fill="#FEC44A"/>
                    <path className="path" d="M73.7994 116.201L76.8126 614.83" stroke="#FEC44A" strokeWidth="15"/>
                    <path className="path" d="M49.03 163.856L47.4414 650.345" stroke="#133B51" strokeWidth="5"/>
                    <text transform="matrix(1 0 0 1 207.6813 332.1233)"><tspan x="0" y="0" className="st9 st25 st26">Cognitive Science Student Association</tspan><tspan x="0" y="72" className="st9 st25 st26">at UC San Diego</tspan></text>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="1440" height="880" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

            </div>

            <div className="container">
                < HomeInitial/>
                <div className="row py-5" id="learn-more">
                    <div className="col-sm-8 order-sm-2">
                        <div className="home-section" data-aos="fade-up">
                            <img className="pb-3" src={Logo} alt="CSSA @ UCSD"></img>
                        </div>
                        <div className="home-section" data-aos="fade-up">
                            <p>Dynamic. Professional. Honest.</p>
                        </div>
                        <div className="home-section" data-aos="fade-up">
                            <p>CSSA is a professional, academic and social organization for students 
                                interested in exploring the interdisciplinary field of Cognitive Science. </p>
                        </div>
                        <div className="home-section" data-aos="fade-up">
                            <p>Our mission is to equip students with the practical skills required to 
                                succeed in the various career paths that a cognitive science degree offers. 
                                We aim to encourage growth and opportunity by building an integrated 
                                community of students with similar goals and interests.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 order-sm-1">
                        < Sidebar/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;