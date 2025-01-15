import React from 'react';
import Carousel2 from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'


const ProductsCarousel: React.FC = () => {
    // const OPTIONS: EmblaOptionsType = { loop: true }

    const items= [
        {
            id: 1,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            title: 'First Slide',
            description: 'This is the first slide of the carousel.',
        },
        {
            id: 2,
            image: 'https://i.etsystatic.com/41376517/r/il/a37ff7/6112642672/il_fullxfull.6112642672_1e94.jpg',
            title: 'Second Slide',
            description: 'This is the second slide of the carousel.',
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/736x/b7/e1/09/b7e109764cfa34242f1d4b5b00baee91.jpg',
            title: 'Third Slide',
            description: 'This is the third slide of the carousel.',
        },
        {
            id: 4,
            image: 'https://i.etsystatic.com/41376517/r/il/a37ff7/6112642672/il_fullxfull.6112642672_1e94.jpg',
            title: 'Second Slide',
            description: 'This is the fourth slide of the carousel.',
        },
        {
            id: 5,
            image: 'https://i.pinimg.com/736x/b7/e1/09/b7e109764cfa34242f1d4b5b00baee91.jpg',
            title: 'Third Slide',
            description: 'This is the fifth slide of the carousel.',
        },
    ];

    return(
        <div className="feature-product-section">
            <div className="title">
                <h2>Featured Products</h2>
                <div className='underline' />
            </div>
            <Carousel2 slides={items}  />
            <style>
                {`
                    .feature-product-section {
                        padding: 3rem;
                        background: lavender;
                    }
                    .title {
                        padding-bottom: 10px;
                        text-align:center;
                    }
                    .underline {
                        width: 6rem;
                        height: .25rem;
                        background: grey;
                        margin-left: auto;
                        margin-right: auto;
                        margin-bottom: 20px;
                    }
                    h2 {
                        font-size: 2.5rem;
                    }
                `}
            </style>
        </div>
    );
};

export default ProductsCarousel;
