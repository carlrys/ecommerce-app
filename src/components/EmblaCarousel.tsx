import React, { useState, useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

interface Slide {
    id: number;
    image: string;
    title: string;
    description: string;
}

type PropType = {
    slides: Slide[];
    options?: EmblaOptionsType;
    isCustomCarousel?: boolean;
};

const EmblaCarousel: React.FC<PropType> = ({
    slides,
    options,
    isCustomCarousel = false,
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        options,
        isCustomCarousel ?  [Autoplay({ delay: 1500 })] :[]
    );
    const [activeIndex, setActiveIndex] = useState(0);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setActiveIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => emblaApi.destroy();
    }, [emblaApi]);

    const getSlideClass = (index: number) => {
        if (!isCustomCarousel) return 'embla__slide';

        return `embla__slide custom ${
            index === activeIndex ? 'active' : 'adjacent'
        }`;
    };

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(({ id, image, title, description }, index) => (
                        <div key={id} className={getSlideClass(index)}>
                            <img src={image} alt={title} className="embla__slide__img" />
                            {!isCustomCarousel && (
                                <div className="embla__slide__content">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {!isCustomCarousel && (
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            )}

            <style>
                {`
                    .embla {
                        max-width: 90rem;
                        margin: auto;
                        --slide-height: 19rem;
                        --slide-spacing: 1rem;
                        --slide-size: 41%;
                    }
                    .embla__viewport {
                        overflow: hidden;
                    }
                    .embla__container {
                        display: flex;
                        touch-action: pan-y pinch-zoom;
                        margin-left: calc(var(--slide-spacing) * -1);
                    }
                    .embla__slide {
                        flex: 0 0 var(--slide-size);
                        min-width: 0;
                        padding-left: var(--slide-spacing);
                    }
                    .embla__slide__img {
                        width: 100%;
                        height: var(--slide-height);
                        object-fit: scale-down;
                        border-radius: 10px;
                    }
                    .embla__slide__content {
                        position: absolute;
                        bottom: 1rem;
                        left: 1rem;
                        background: rgba(0, 0, 0, 0.6);
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: 5px;
                    }
                    .embla__slide.custom.active {
                        transform: scale(1.5) !important;
                        filter: none;
                    }

                    .embla__slide.custom.adjacent {
                        transform: scale(0.9);
                        filter: blur(5px);
                        transform: translateY(15px); /* Lowered position for adjacent images */
                    }

                    .custom .embla__slide img {
                        transition: transform 0.3s ease, filter 0.3s ease;
                    }
                    .embla__buttons {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 83rem;
                        align-items: center;
                    }
                    .embla__button {
                        appearance: none;
                        background-color: transparent;
                        touch-action: manipulation;
                        display: inline-flex;
                        text-decoration: none;
                        cursor: pointer;
                        border: 0;
                        padding: 0;
                        margin: 0;
                        box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
                        width: 3.6rem;
                        height: 3.6rem;
                        z-index: 1;
                        border-radius: 50%;
                        color: var(--text-body);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .embla__button:disabled {
                        color: var(--detail-high-contrast);
                    }
                    .embla__button__svg {
                        width: 35%;
                        height: 35%;
                    }
                `}
            </style>
        </section>
    );
};

export default EmblaCarousel;
