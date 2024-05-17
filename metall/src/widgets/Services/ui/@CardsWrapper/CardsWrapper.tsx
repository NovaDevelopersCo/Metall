import Valve1 from '@/public/icon/Valve1.png';
import Card from '../@Card/Card';
import ArrowUp from '@/shared/ui/socials/ArrowUp';
const CardsWrapper = () => {
    return (
        <div>
            <Card number='number' img={Valve1.src} title="Title 1" text1="Text 1" text2='Text 2' highlightedText='highlightedText' />
        </div>
    );
};

export default CardsWrapper;