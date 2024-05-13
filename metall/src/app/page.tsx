import { MetaInfo } from "@/json/metaInfo";
import { MetallBlock } from "@/widgets";

export default function Home() {
  return (
    <div  className="grid grid-cols-3 gap-4">
        <MetallBlock metallInfo={MetaInfo}/>
    </div>
  );
}