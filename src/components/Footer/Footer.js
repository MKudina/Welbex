function Footer (){
    return (
        <footer className='footer'>
            <ul className='footer__company'>
                <li className='footer__list-title'>О компании</li>
                <li><a className='footer__list-link' href='/'>Партнёрская программа</a></li>
                <li><a className='footer__list-link' href='/'>Вакансии</a></li>
            </ul>
            <ul className='footer__menu'>
                <li className='footer__menu-box footer__list-title'>Меню</li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Расчёт стоимости</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Кейсы</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Услуги</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>
                    {window.innerWidth <= 320 ? ('Благодарсть клиентов') : ('Благодарственные письма')}</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Виджеты</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Сертификаты</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Интеграции</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Блог на Youtube</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Наши клиенты</a></li>
                <li className='footer__menu-box'><a className='footer__list-link' href='/'>Вопрос / Ответ</a></li>
            </ul>
            <ul className='footer__contacts'>
                <li className='footer__list-title'>Контакты</li>
                <li className='footer__list-number'>+7 555 555-55-55</li>
                <li className='footer__social'>
                    <a href='/'><div className='footer__contacts-link_telegram'></div></a>
                    <a href='/'><div className='footer__contacts-link_viber'></div></a>
                    <a href='/'><div className='footer__contacts-link_whatsapp'></div></a>
                </li>
                <li className='footer__list-text'>Москва, Путевой проезд 3с1, к 902</li>
                <li className='footer__list-copyright'>©WELBEX 2022. Все права защищены.<br/>политика конфиденциальности</li>
            </ul>
        </footer>
    )
}

export default Footer;