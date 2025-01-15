import React, { useState, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

// Define the slide type
interface Slide {
    id: number
    image: string
    title: string
    description: string
}

// Define the prop type
type PropType = {
    slides: Slide[]
    options?: EmblaOptionsType
    isCustomCarousel?: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, isCustomCarousel } = props
    const autoplayOptions = { delay: 1500 };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
        emblaApi.on('select', () => {
            setActiveIndex(emblaApi.selectedScrollSnap());
        });
        }
    }, [emblaApi]);

    return (
        <div>
        <section className="embla">
            <div className="embla__viewport" ref={isCustomCarousel ? emblaRef: null}>
            <div className="embla__container">
                {slides.map((slide) => (
                <div
                    key={slide.id}
                    className={`embla__slide
                        ${isCustomCarousel ? 'custom' : ''}
                        ${slide.id === activeIndex ? 'active' : 'adjacent'}
                        `}
                >
                    <img src={slide.image} alt={slide.title} className="embla__slide__img" />
                    {!isCustomCarousel &&
                        <div
                            className="embla__slide__content"
                        >
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        </div>
                    }
                </div>
                ))}
            </div>
            </div>
        </section>
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
                    transform: translate3d(0, 0, 0);
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
                    transform: scale(1);
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
            `}
        </style>
        </div>
    )
}

export default EmblaCarousel
