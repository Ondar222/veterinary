import { useRouter } from "next/router"
import { GrDocumentPdf } from "react-icons/gr"

const DocumentLink = (params) => {

  const router = useRouter()

  return (
    <div className="grid grid-rows-1 xs:grid-cols-none md:grid-cols-[30px_1fr] items-center gap-3"
      onClick={() => router.push(`${process.env.APIpath}${params.url}`)}>
      <div className="xs:hidden md:block min-w-8 min-h-8 w-8 h-8 max-w-8 max-h-8 cursor-pointer">
        <GrDocumentPdf className="min-w-full min-h-full w-full h-full max-w-10 max-h-10" />
      </div>

      <div className="hover:text-blue-900 cursor-pointer">
        <p>{params.filename}</p>
      </div>
    </div>
  )
}

export default DocumentLink