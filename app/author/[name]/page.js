import { getDocument } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-utils";
import ContentDisplay from "@/app/components/ContentDisplay";

const AuthorPage = ({ params: { name } }) => {

  const docs = getDocument();
  const matchedDocs = getDocumentByAuthor(docs, name)

  return(

    <ContentDisplay id={matchedDocs[0].id}/>
    
  )
};

export default AuthorPage;

   