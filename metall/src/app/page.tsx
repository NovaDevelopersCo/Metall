import MetallBlock from "@/components/metallBlock";
import { MetaInfo } from "@/components/metallBlock/metaInfo";

export default function Home() {
  return (
    <div  className="grid grid-cols-3 gap-4">
      {MetaInfo.map((metall) => (
        <MetallBlock key={metall.title} metallInfo={metall} />
      ))}
    </div>
  );
}