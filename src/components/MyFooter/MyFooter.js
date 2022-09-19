import React from 'react';
import {Link} from "react-router-dom";
import eyeImg from "../../assets/images/eye.png";
import vkImg from "../../assets/images/vk.png";
import instaImg from "../../assets/images/insta.png";
import './MyFooter.css';


const MyFooter = () => {
    return (
        <footer>
            <div className="footer__links">
                <ul>
                    <li><Link to="">©ООО "Практик-Д" <br/>
                        г. Тольятти, улица Офицерская, 35</Link></li>
                    <li><Link to=""><img src={vkImg} alt='vk'/>PRAKTIK "Вконтакте"</Link></li>
                    <li><Link to=""><img src={instaImg} alt='insta'/>PRAKTIK "Instagram"</Link></li>
                </ul>
                <ul>
                    <li><Link to="">Услуги стоматолога</Link></li>
                    <li><Link to="">Лечение зубов</Link></li>
                    <li><Link to="">Удаление зубов</Link></li>
                    <li><Link to="">Протезирование зубов</Link></li>
                </ul>
                <ul>
                    <li><Link to="">Ортодонтия</Link></li>
                    <li className="nowrap"><Link to="">Отбеливание зубов</Link><img src={eyeImg} alt="eye"/></li>
                    <li><Link to="">Имплантация зубов</Link></li>
                    <li><Link to="">Детская стоматология</Link></li>
                </ul>
                <ul>
                    <li><Link to="">Политика конфиденциальности</Link></li>
                    <li><Link to="">Карта сайта</Link></li>
                    <li><Link to="">Разработка сайта</Link></li>
                    <li><Link className="guild" to="">Tehnopolyus</Link></li>

                </ul>
            </div>

        </footer>
    );
};

export default MyFooter;