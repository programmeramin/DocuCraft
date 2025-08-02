import Image from "next/image";
import { getDocument } from "@/lib/doc";
import Landing from "./components/Landing";


export default function Home() {

  const allDocuments = getDocument();
 
  return (
   <>
     <Landing/>
   </>
  );
}
   