
import { Footer } from '@/widgets/Footer';
import Breadcrumbs from '@/entities/BreadCrumbs/ui/Breadcrumbs';
const Home = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ text: 'Услуги', href: '/services' }]} />
      <Footer />
    </>
  );
};

export default Home;
