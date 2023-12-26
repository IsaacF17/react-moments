import React, { useState } from 'react';
import MomentCard from '../momentCard';
import './MomentsCards.scss'

interface TTagsStatus {
    'newest': boolean;
    'most-recent': boolean;
    'older-entries': boolean;
}

const MomentsCards: React.FC = () => {

    const initialStatusState = {
        'newest': false,
        'most-recent': false,
        'older-entries': false,
    }

    const [tagsStatus, setTagStatus] = useState<TTagsStatus>(initialStatusState)

    const handleTagClick = (id: 'newest' | 'most-recent' | 'older-entries') => {
        setTagStatus({...initialStatusState, [id]: !tagsStatus[id] })
    }

    return (
        <div className='search-container'>
            <h1 id='subtitle'>Find Moments</h1>
            <div className='filter-tags'>
                <div onClick={() => handleTagClick('newest')} className={`${tagsStatus['newest'] ? 'active' : ''}`}><span>Newest</span></div>
                <div onClick={() => handleTagClick('most-recent')} className={`${tagsStatus['most-recent'] ? 'active' : ''}`}><span>Most Reacted</span></div>
                <div onClick={() => handleTagClick('older-entries')} className={`${tagsStatus['older-entries'] ? 'active' : ''}`}><span>Older Entries</span></div>
            </div>
            <MomentCard />
        </div>
    )
}

export default MomentsCards;