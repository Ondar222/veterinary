import { PageName } from "../../components/PageName/PageName";
import Head from 'next/head'
import MainPageLayout from "../../layouts/MainPageLayout";
import AppealPageNotice from "../../components/SendAppeal/AppealPageNotice";
import DocumentLink from "../../components/Document/DocumentLink";
import AppealsSlice from "../../store/appealsSlice";
import { observer } from "mobx-react-lite";

const SendRequest = observer(() => {
    return (
        <>
            <Head>
                <title>Прием обращений</title>
            </Head>
            <MainPageLayout>
                <PageName title='Прием обращений' />
                <AppealPageNotice />
                <form className="w-fit py-3">
                    <div className="flex flex-col gap-3">
                        <input value={AppealsSlice.surname} onChange={(e) => AppealsSlice.setSurname(e.target.value)} placeholder="Фамилия"
                            maxLength={20} required
                            className="border border-black rounded py-2 px-3" />
                        <input value={AppealsSlice.name} onChange={(e) => AppealsSlice.setName(e.target.value)} placeholder="Имя"
                            maxLength={20} required
                            className="border border-black rounded py-2 px-3" />
                        <input value={AppealsSlice.patronymic} onChange={(e) => AppealsSlice.setPatronymic(e.target.value)} placeholder="Отчество"
                            maxLength={20}
                            className="border border-black rounded py-2 px-3" />
                        <input value={AppealsSlice.phone} onChange={(e) => AppealsSlice.setPhone(e.target.value)} placeholder="Номер телефона"
                            maxLength={12} required
                            className="border border-black rounded py-2 px-3" />
                        <input value={AppealsSlice.email} onChange={(e) => AppealsSlice.setEmail(e.target.value)} placeholder="Адрес электронной почты"
                            maxLength={30} required
                            className="border border-black rounded py-2 px-3" />
                        <textarea value={AppealsSlice.body} onChange={e => AppealsSlice.setBody(e.target.value)} rows={7}
                            placeholder="Введите ваше сообщение"
                            required
                            maxLength={1500}
                            className="w-full border border-black rounded py-3 px-3 resize-none" />
                        <>
                            <p>
                                В случае необходимости в подтверждение своих доводов гражданин вправе приложить к обращению
                                необходимые документы и материалы в электронной форме, воспользовавшись функцией «Прикрепить
                                файл».</p>
                            <p>Обращаем внимание, что прикрепляемые в предложенном на сайте формате документы и материалы
                                служат лишь подтверждением доводов автора обращения, изложенных в тексте обращения.</p>
                            <p>Приложить необходимые документы и материалы в электронной форме можно в любой последовательности
                                двумя самостоятельными вложениями файла без архивирования (файл вложения) по одному из двух
                                разных типов допустимых форматов:</p>
                            <p>текстового (графического) формата: txt, doc, docx, rtf, xls, xlsx, pps, ppt, odt, ods, odp, pub,
                                pdf, jpg, jpeg, bmp, png, tif, gif, pcx;</p>
                            <p>аудио- (видео-) формата: mp3, wma, avi, mp4, mkv, wmv, mov, flv.</p>
                            <p>Иные форматы не обрабатываются.</p>
                            <p>При подключении оборудования пользователя к сети «Интернет» по выделенным каналам связи с
                                использованием технологий ADSL, 3G, 4G, WiFi и иных технологий, обеспечивающих аналогичные
                                скорости передачи данных в сети «Интернет», передача и обработка файла(ов) с суммарным размером:
                                - до 5 Мб осуществляется, как правило, без задержки во времени;
                                - от 5 Мб до 10 Мб может осуществляться с задержкой во времени;
                                - свыше 10 Мб может быть не осуществлена.</p>
                            <p>Для приложения к обращению необходимых документов и материалов в электронной форме нажмите
                                кнопку «Выберите файл».</p>
                        </>

                        <input
                            type="file"
                            onChange={(e) => {
                                try {
                                    AppealsSlice.setFiles(e.target.files)
                                }
                                catch (e) {
                                    console.error(e)
                                }
                               
                            }}
                            multiple={true} />
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            id="custom-switch"
                            checked={AppealsSlice.offerCheck}
                            onChange={() => {
                                AppealsSlice.offerCheck === false ? AppealsSlice.setOfferCheck(true) : AppealsSlice.setOfferCheck(false)
                            }}
                        />
                        <div className="flex items-center gap-2">
                            <p>Я принимаю</p>
                            <DocumentLink
                                filename="Политику обработки персональных данных"
                                url={`/uploads/politika_obrabotki_personalnyh_dannyh_e79f438d7a.pdf?updated_at=2022-11-24T03:08:46.185Z`} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!AppealsSlice.offerCheck}
                        onClick={AppealsSlice.uploadToServer}
                        className={AppealsSlice.offerCheck ? "activated" : "disabled"}>
                        Отправить
                    </button>
                </form>
            </MainPageLayout>
        </>
    )
})

export default SendRequest