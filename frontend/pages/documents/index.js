import { PageName } from "../../components/PageName/PageName";
import { DocumentCard } from "../../components/Document/Document";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import documentSlice from "../../store/documentSlice";

const dateString = () => {
    const date = new Date()
    const today = date.toLocaleDateString(date, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        
    })
    return today
}
const Docs = observer(() => {
    const [filterString, setFilterString] = useState("")
    const [startDate, setStartDate] = useState("1991-05-24")
    const [endDate, setEndDate] = useState(String(new Date().toLocaleDateString('en-CA')))
    const [filteredData, setFilteredData] = useState()

    useEffect(() => {
        documentSlice.getAll()
    }, [])

    useEffect(() => {

    }, [])

    return (
        <MainPageLayout>
            <PageName title='Банк документов' />
            <div className="flex xs:flex-col gap-5">

                <div className="flex flex-row justify-between gap-5 md:w-10/12">
                    <input
                        defaultValue={filterString}
                        placeholder="Поиск по заголовку"
                        value={filterString}
                        onChange={(e) => setFilterString(e.target.value)}
                        className='w-6/12 border rounded outline-0 px-2 py-3'
                    />
                    <p>Дата подписания</p>
                    <div>
                        <p>от</p>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div>
                        <p>до</p>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button
                        className="button"
                        onClick={() => {
                            documentSlice.filterDocuments(filterString, startDate, endDate)

                        }}>
                        Поиск
                    </button>

                </div>

                <div className="flex flex-col gap-4 xs:w-full min-h-[25vh] md:w-10/12">
                    {
                        documentSlice.result.map((item) => <DocumentCard
                            key={item.document.id}
                            id={item.document.id}
                            name={item.document.title}
                            date={item.document.signing_date}
                            url={item.document.file.url}
                        />)
                    }
                </div>
            </div>
        </MainPageLayout>
    );
})

export default Docs