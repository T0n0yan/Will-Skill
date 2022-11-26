import './style.scss'
import ginger from '../../../../assets/images/svg-icons/ginger.svg'
import nootris from '../../../../assets/images/svg-icons/nootris.svg'
import virus from '../../../../assets/images/svg-icons/virus.svg'


export const ProductsList = () => {
    return (
        <div className='L-products-wrapper'>
            <div className="L-products-container G-container">
                <div className='L-product-title-cont'>
                    <h3>
                        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                    </h3>
                    <h3>
                        СО СКИДКОЙ -15% ПЕРВЫМ!
                    </h3>
                </div>
                <div className='L-discount-price  G-justify-center G-align-center'>
                    <p>750₽</p>
                    <p>690₽</p>
                </div>

                <div className='L-item-container  G-justify-between G-align-start '>
                    <div className='L-item-box    G-justify-center G-align-center G-flex-column'>
                        <img src={ginger} alt="ginger" style={{width: '200px', height: '200px'}}/>
                        <div className='L-item-description'>
                            <p>Содержит</p>
                            <p>имбирь</p>
                        </div>
                    </div>
                    <div className='L-item-box-offer  G-justify-between G-align-center G-flex-column'>
                        <div className='L-offer-img'>
                            <img src={nootris} alt="nootrus"/>
                        </div>
                        <div className='L-delivery-offer-desc'>
                            <p>Бесплатная доставка</p>
                            <p>Специальная цена</p>
                        </div>


                        <div className='L-button-cont'>
                            <button>Оформить заказ!</button>
                        </div>
                    </div>


                    <div className='L-item-box  G-justify-center G-align-center G-flex-column '>
                        <img src={virus} alt="virus" style={{width: '200px', height: '200px'}}/>
                        <div className='L-item-description'>
                            <p>Нейтрализует</p>
                            <p>вирусы</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}