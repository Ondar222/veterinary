import { useRouter } from "next/router";
import Image from "next/image";
import myImageLoader from "../../loader";

export const PersonCard = (params) => {
    const router = useRouter()
    return (
        <div id="card"
            className="flex flex-col justify-between gap-5 w-12/12 min-w-5/12 h-88 border rounded-md
                          xs:w-full xs:items-center
                          sm:w-full
                          md:w-12/12
                          lg:w-12/12"
        >
            <div id="card-header"
                className="flex items-center bg-gray-100 p-5 text-xl font-semibold min-h-20 text-left
                            md:w-full md:items-center md:justify-start
                            xs:w-full xs:items-center xs:justify-center
                            sm:w-full sm:items-center sm:justify-start"
            >
                <h3 className="xs:text-md md:text-lg w-10/12">
                    {params.position}
                </h3>

            </div>
            <div
                id="card-body"
                className="   flex gap-5 px-5 w-full h-fit
                              xs:flex-col xs:justify-center xs:items-center
                              sm:flex-row sm:justify-start sm:items-left
                              md:flex-row md:justify-start md:items-left
                              lg:flex-row lg:justify-start lg:items-left"
            >
                <Image
                    loader={myImageLoader}
                    src={process.env.APIpath + params.avatar.url}
                    alt="some"
                    width={200}
                    height={200}
                    objectFit="cover"
                    className="w-40 h-40 rounded-full" />

                <div className="flex flex-col justify-between gap-5">
                    <div className="flex flex-col sm:text-lg md:text-2xl">
                        <p>{params.surname}</p>
                        <p>{params.name}</p>
                        <p>{params.patronymic}</p>
                    </div>

                    <div className="sm:text-sm md:text-xl">
                        <p>{params.phone}</p>
                        <p>{params.email}</p>
                    </div>
                </div>
            </div>
            <div
                id="footer"
                className=" flex justify-end bg-gray-100 p-5
                            xs:w-full xs:items-center xs:justify-center
                            lg:justify-end"
            >

                <p>Время приема: каждую неделю в четверг с 16:30 </p>
                {/*<button className="button dark:bg-gray-500" onClick={() => {*/}
                {/*    router.push(`/management/${params.id}`)*/}
                {/*}}>*/}
                {/*    Перейти в профиль*/}
                {/*</button>*/}
            </div>
        </div>
    )
}
