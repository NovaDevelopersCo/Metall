// import Image from "next/image";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import Contacts from "@/widgets/Contacts/ui/Contacts";
// import MapLocation from "@/widgets/Contacts/ui/MapLocation/MapLocation";
// import Feedback from "@/widgets/Contacts/ui/RadioInput/RadioInput";
import Fittings from "@/widgets/Fittings/Fittings";


// const breadcrumbsData: BreadcrumbItem[] = [
//   { text: 'Главная', href: '/' },
//   { text: 'Контакты', href: '/contacts' },
// ];

export default function Home() {
  return (
    <>
      <Fittings/>
      {/* <Breadcrumbs items={breadcrumbsData} /> */}
    </>
  );
}
