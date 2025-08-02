import Link from "next/link";

const Tag = ({tag}) => {
  return (

    <>
       <Link key={tag} href={`/tags/${tag}`} className="bg-gray-200 text-[#02b985] p-1 rounded-md mr-2 text-xl">
         {tag}
       </Link>
    </>

  )
};

export default Tag;
