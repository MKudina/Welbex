function Header () {
    return (
        <header className='header'>
            <nav className='header__menu'>
                <ul className='header__list'>
                    <li className='header__logo'>
                        <div className='header__logo-image'></div>
                        <p className='header__logo-title'>крупный интегратор CRM <br/>в Росcии и ещё 8 странах</p>
                    </li>
                    <li className='header__item'>
                        <a className='header__item-link' href='/'>Услуги</a>
                        <a className='header__item-link' href='/'>Виджеты</a>
                        <a className='header__item-link' href='/'>Интеграции</a>
                        <a className='header__item-link' href='/'>Кейсы</a>
                        <a className='header__item-link' href='/'>Сертификаты</a>
                    </li>
                    <li className='header__contacts'>
                        <p className='header__contacts-number'>+7 555 555-55-55</p>
                        <a href='/'><div className='header__contacts-link_telegram'></div></a>
                        <a href='/'><div className='header__contacts-link_viber'></div></a>
                        <a href='/'><div className='header__contacts-link_whatsapp'></div></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;