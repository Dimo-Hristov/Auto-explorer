import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import profilePageStyles from './profilePage.module.css';

export const ProfilePage = () => {
    return (
        <section className={profilePageStyles.profile}>


            <swiper-container
                slides-per-view={3}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                }}
            >
                ...
            </swiper-container>

        </section>
    )
}