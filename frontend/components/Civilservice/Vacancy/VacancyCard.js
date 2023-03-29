import parser from "html-react-parser";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const VacancyCard = (params) =>
    <div className={"border rounded p-3"}>

        <div className="flex items-center h-20 text-2xl">
            <h3>{params.title}</h3>
        </div>

        <details className="">
            <summary className="flex items-center gap-3 text-xl
            cursor-pointer list-none">
                <BsFillArrowDownCircleFill className="animate-bounce" />
                Описание вакансии
            </summary>
            <div>
                {parser(params.description)}
            </div>
        </details>

    </div>

export default VacancyCard