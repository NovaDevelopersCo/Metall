
import Breadcrumbs from '@/entities/BreadCrumbs/ui/Breadcrumbs';
import { Services } from '@/widgets/Services';
import { Footer } from '@/widgets/Footer';

const Home = () => {
  return (
    <>
      <Breadcrumbs />
      <Services />
      <Footer />
    </>
  );
};

export default Home;