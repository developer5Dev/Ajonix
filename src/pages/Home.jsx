import '../../src/styles/home.scss';

//imgStart
import ii from '../../src/assets/images/insta-log.png';
//imgEnd

//iconsStart
import { FaSquareInstagram } from "react-icons/fa6";
import {FaTiktok} from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

//iconsEnd



function Home() {
    return (
        <div id="home">
            <div className="container">
                <div className="home">
                    <div className="webs">
                        <div className="line-one">

                            {/*1. INSTAGRAM*/}
                            <div className="instagram">
                                <div className="button">
                                    <button>
                                        <a href="https://www.instagram.com/aj0n1x?exln=aGdtbzA5dGQ2Y2Rr" target="_blank">
                                            <FaSquareInstagram className="icon-one" />
                                            <h1>aj0n1x</h1>
                                            <p>ajonix <img src={ii} alt=""/></p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>0 публикации</p>
                                        <p>222 подписчики</p>
                                        <p>Личный блог</p>
                                    </div>
                                </div>
                            </div>

                            {/*2. TIK-TOK*/}
                            <div className="tik-tok">
                                <div className="button">
                                    <button>
                                        <a href="https://www.tiktok.com/@aj0n1x?_r=1&_t=ZS-9BOLDZJYVgC" target="_blank">
                                            {/*<AiFillTikTok className="icon-two" />*/}
                                            <FaTiktok className="icon-two" />

                                            <h1>Ajonix</h1>
                                            <p>@aj0n1x</p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>2 Публикации</p>
                                        <p>4 Подписчики</p>
                                        <p>18 Лайки</p>
                                    </div>
                                </div>
                            </div>

                            {/*3. TELEGRAM*/}
                            <div className="telegram">
                                <div className="button">
                                    <button>
                                        <a href="https://t.me/AjonixDev" target="_blank">
                                            {/*<FaSquareInstagram className="icon-one" />*/}
                                            <BsTelegram className="icon-three" />
                                            <h1>Ajonix</h1>
                                            <p>@AjonixDev</p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>Ajonix / Frontend 💻</p>
                                        <p>Архив историй: 4</p>
                                        <p>***</p>
                                    </div>
                                </div>
                            </div>

                            {/*4. WHATSAPP*/}
                            <div className="whatsapp">
                                <div className="button">
                                    <button>
                                        <a href="https://wa.me/996709846666" target="_blank">
                                            {/*<AiFillTikTok className="icon-two" />*/}
                                            <FaWhatsappSquare className="icon-four" />
                                            <h1>aj0n1x</h1>
                                            <p>AjonixWeb</p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>@aj0n1x</p>
                                        <p>***</p>
                                        <p>***</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="line-two">
                            {/*1. YOUTUBE*/}
                            <div className="youtube">
                                <div className="button">
                                    <button>
                                        <a href="https://www.youtube.com/@AjonixDev" target="_blank">
                                            <FaYoutube className="icon-one" />

                                            <h1>aj0n1x</h1>
                                            <p>@AjonixDev</p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>2 подписчика</p>
                                        <p>0 опубликованные</p>
                                        <p>0 запланированные</p>
                                    </div>
                                </div>
                            </div>

                            {/*1. TWITCH*/}
                            <div className="twitch">
                                <div className="button">
                                    <button>
                                        <a href="https://www.twitch.tv/ajonix5" target="_blank">
                                            <FaTwitch className="icon-two" />

                                            <h1>ajonix5</h1>
                                            <p>ajonix5</p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>0 подписчика</p>
                                        <p>Ajonix</p>
                                        <p>***</p>
                                    </div>
                                </div>
                            </div>

                            {/*1. GITHUB*/}
                            <div className="github">
                                <div className="button">
                                    <button>
                                        <a href="https://github.com/developer5Dev" target="_blank">
                                            <IoLogoGithub className="icon-three" />

                                            <h1>Ajonix</h1>
                                            <p>developer5Dev</p>
                                        </a>
                                    </button>
                                    <div className="info">
                                        <p>3 Репозитории</p>
                                        <p>***</p>
                                        <p>***</p>
                                    </div>
                                </div>
                            </div>

                            {/*1. TWITCH*/}
                            {/*<div className="light">*/}
                            {/*    <div className="button">*/}
                            {/*        <button>*/}
                            {/*            <a href="https://www.youtube.com/@AjonixDev" target="_blank">*/}
                            {/*                <FaYoutube className="icon-one" />*/}

                            {/*                <h1>aj0n1x</h1>*/}
                            {/*                <p>@AjonixDev</p>*/}
                            {/*            </a>*/}
                            {/*        </button>*/}
                            {/*        <div className="info">*/}
                            {/*            <p>2 подписчика</p>*/}
                            {/*            <p>0 опубликованные</p>*/}
                            {/*            <p>0 запланированные</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                    {/*<h1>Скоро !</h1>*/}
                    {/*<p>Frontend Developer</p>*/}
                </div>
            </div>
        </div>
    );
}

export default Home;