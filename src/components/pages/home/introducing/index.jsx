import './style.scss'
import bgImage from '../../../../assets/images/introducing_background.png'
import ginger from '../../../../assets/images/svg-icons/ginger.svg'
import nootris from '../../../../assets/images/svg-icons/nootris.svg'
import lemon from '../../../../assets/images/svg-icons/Lemon.svg'
export const Introducing = () => {
    return (
        <div className="L-introducing-wrapper " style={{backgroundImage: `url('${bgImage}')`}}>
            <div className="L-introducing-container G-container" >
                <div className='L-introducing-desc-cont'>
                    <h1 className='L-introducing-title'>АКТИВИРУЙ ИММУНИТЕТ!</h1>
                    <p className='L-title-desc'>Всего пять секунд в день помогут укрепить иммунитет
                        и повысить защитные силы организма</p>
                    <h4 className='L-product-title'>NOOTRIS ПОМОГАЕТ</h4>
                    <p className='L-product-title-desc'>Вашему организму во время пандемии
                        и сезонных простуд</p>
                </div>
                <div className='L-images-container'>
                    <div  className='L-ginger-cont G-background' style={{backgroundImage:`url('${ginger}')`}} />
                    <div className='L-nootris-cont G-background' style={{backgroundImage:`url('${nootris}')`}} />
                    <div className='L-lemon-cont G-background' style={{backgroundImage:`url('${lemon}')`}} />
                </div>
            </div>
        </div>
    )
}