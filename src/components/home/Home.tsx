import * as React from 'react';
import SearchBar from '../searchbar';
import './Home.scss'
import { useQuery } from '@apollo/client';
import { GET_ONE_MOMENT } from '../../database/queries/moments';

const Home: React.FC = () => {

    const { data, loading } = useQuery(GET_ONE_MOMENT);

    if (loading) return <>...loading</>

    console.log(data);

    return (
        <div className='container'>
            <div className='home-container'>
                <div className='main-block'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non iaculis justo. Donec in ipsum eu nisi pretium ultrices in sit amet justo.</span>
                    <div className='icon-rating'>
                        <i className="fa-solid fa-heart">10</i>
                        <i className="fa-solid fa-face-smile-beam">10</i>
                        <i className="fa-solid fa-face-frown">8</i>
                        <i className="fa-solid fa-face-angry">5</i>
                        <i className="fa-solid fa-face-meh">3</i>
                        <i className="fa-solid fa-lightbulb">2</i>
                    </div>
                </div>
                <SearchBar />
            </div>
        </div>
    )
}

export default Home;