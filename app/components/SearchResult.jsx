import Link from "next/link"



const SearchResult = ({results, term}) => {
  return (
    <>
      
      <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
        <p className="!text-lg">
           showing results for
           <span className="font-semibold">"{term}:"</span>
        </p>
        <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
            {
                results.map((result) =>(
                   <>
                    <li key={result.id}>
                        <Link href={`/docs/${result.id}`} className="transition-all hover:text-emerald-500">
                           {result.title}
                        </Link>

                    </li>
                   </>
                ))
            }
        </ul>
      </div>
    </>
  )
}

export default SearchResult
