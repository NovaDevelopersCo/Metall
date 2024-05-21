
import { Footer } from '@/widgets/Footer';
import Breadcrumbs from '@/entities/BreadCrumbs/ui/Breadcrumbs';
import { Services } from '@/widgets/Services';

const Home = () => {
  return (
    <>
      {/* <Breadcrumbs breadcrumbs={[{ text: 'Услуги', href: '/services' }]} /> */}
      <Services />
      <Footer />
    </>
  );
};

export default Home;
