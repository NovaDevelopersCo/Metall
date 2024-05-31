
import styles from './MapLocation.module.scss'

const MapLocation: React.FC = () => {
    return (
        <section className={styles.MapContainer}>
           <iframe className={styles.MapIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577343.9845137314!2d36.72620264522804!3d55.58025707094451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1716811930788!5m2!1sru!2s" loading="lazy"></iframe>
        </section>
    )
}

export default MapLocation;

