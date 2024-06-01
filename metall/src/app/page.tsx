// import Image from "next/image";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import Contacts from "@/widgets/Contacts/ui/Contacts";
// import MapLocation from "@/widgets/Contacts/ui/MapLocation/MapLocation";
// import Feedback from "@/widgets/Contacts/ui/RadioInput/RadioInput";
import Main from "@/widgets/Main/ui/Main"


// const breadcrumbsData: BreadcrumbItem[] = [
//   { text: 'Главная', href: '/' },
//   { text: 'Контакты', href: '/contacts' },
// ];

export default function Home() {
  return (
    <>
      {/* <Breadcrumbs items={breadcrumbsData} /> */}
      <Main/>
    </>
  );
};


