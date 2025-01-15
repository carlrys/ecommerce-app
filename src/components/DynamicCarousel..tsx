import React from 'react';
import Carousel2 from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'



const DynamicCarousel: React.FC = () => {
    const OPTIONS: EmblaOptionsType = { loop: true }

    const items= [
        {
            id: 0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE96rJyJpn7nZ2GsXv-ByNZNfprXtt6cgX5Fu4nhNWsf6QoxkQ4B74N-wQT2UTr5hxzbU&usqp=CAU',
            title: 'First Slide',
            description: 'This is the first slide of the carousel.',
        },
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLMs-RLjhDnbh_NohjpGJyQ7RKFt2dfkA04mQDkX0W7QhcaYG8X4IrgKH6AFn7wiRl6s&usqp=CAU',
            title: 'Second Slide',
            description: 'This is the second slide of the carousel.',
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0df7v0akFHBYdLFMFMqyIlPfQXtT0g62vjg&s',
            title: 'Third Slide',
            description: 'This is the third slide of the carousel.',
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCcZmn4k58wZ6GdhR4hDB5YVcdw5UmcKlEQ&s',
            title: 'Third Slide',
            description: 'This is the third slide of the carousel.',
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmXUZhXutEPWY4BOhA01D2t5z2ibfRAQpqw&s',
            title: 'Third Slide',
            description: 'This is the third slide of the carousel.',
        },
    ];

    return(
        <div>
            <Carousel2 slides={items} isCustomCarousel={true} options={OPTIONS}/>
            <style>
            </style>
        </div>
    );
};

export default DynamicCarousel;
