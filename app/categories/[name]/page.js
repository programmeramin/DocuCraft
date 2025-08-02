import { getDocument } from "@/lib/doc"
import { getDocumentByCategory } from "@/utils/doc-utils";

import ContentDisplay from "@/app/components/ContentDisplay";


const CategoryPage = ({params : {name}}) => {

  const docs = getDocument();
  const matchedDocument = getDocumentByCategory(docs, name);


  return (
    
   <ContentDisplay id={matchedDocument[0].id}/>

  )
}

export default CategoryPage