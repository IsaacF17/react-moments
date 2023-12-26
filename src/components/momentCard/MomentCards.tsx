import * as React from 'react';
import './MomentCard.scss'

const MomentCard: React.FC = () => {
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='phrase'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non iaculis justo. Donec in ipsum eu nisi pretium ultrices in sit amet justo</span>
                </div>
                <div className='icon-rating'>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-face-smile-beam"></i>
                    <i className="fa-regular fa-face-frown"></i>
                    <i className="fa-regular fa-face-angry"></i>
                    <i className="fa-regular fa-face-meh"></i>
                    <i className="fa-regular fa-lightbulb"></i>
                </div>
            </div>
        </div>
    )
}

export default MomentCard;