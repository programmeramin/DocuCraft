import ContentDisplay  from "@/app/components/ContentDisplay"
import { getDocumentByTag } from "@/utils/doc-utils"
import { getDocument } from "@/lib/doc"

const TagPage = ({params : {name}}) => {

  const docs = getDocument();
  const matchedDocument = getDocumentByTag(docs, name);



  return (
    <>
      
    <ContentDisplay id={matchedDocument[0].id}/>

    </>
  )
}

export default TagPage