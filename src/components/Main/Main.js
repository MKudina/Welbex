function Main () {
    return (
        <main className='content'>
            <section className='content__section-title'>
                <h1 className='content__title'>Зарабатывайте больше <br/> <span className='content__title-welbex'>с WELBEX</span></h1>
                <p className='content__title-text'>Развиваем и контролируем продажи за вас</p>
            </section>
            <section className='content__section-consultation'>
                <h2 className='content__consultation'>Вместе с <span className='content__consultation-free'>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
                <ul className='content__consultation-list'>
                    <li>
                        <h2 className='content__consultation-list-subtitle'>Виджеты</h2>
                        <p className='content__consultation-list-paragraf'>30 готовых решений</p>
                    </li>
                    <li>
                        <h2 className='content__consultation-list-subtitle'>Dashboard</h2>
                        <p className='content__consultation-list-paragraf'>с показателями вашего бизнеса</p>
                    </li>
                    <li>
                        <h2 className='content__consultation-list-subtitle'>Skype Аудит</h2>
                        <p className='content__consultation-list-paragraf'>отдела продаж и CRM системы</p>
                    </li>
                    <li>
                        <h2 className='content__consultation-list-subtitle'>35 дней</h2>
                        <p className='content__consultation-list-paragraf'>использования CRM</p>
                    </li>
                </ul>
                <ul className='content__consultation-list-mobile'>
                    <li className='content__consultation-list-paragraf'>
                        <div className='content__consultation-list-line'></div>
                        SKYPE АУДИТ
                    </li>
                    <li className='content__consultation-list-paragraf'>
                        <div className='content__consultation-list-line'></div>
                        30 ВИДЖЕТОВ
                    </li>
                    <li className='content__consultation-list-paragraf'>
                        <div className='content__consultation-list-line'></div>
                        DASHBOARD
                    </li>
                    <li className='content__consultation-list-paragraf'>
                        <div className='content__consultation-list-line'></div>
                        МЕСЯЦ AMOCRM
                    </li>
                </ul>
                <button className='content__button'>Получить консультацию</button>
            </section>
        </main>
    )
}

export default Main;