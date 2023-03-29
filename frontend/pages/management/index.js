import { PersonCard } from "../../components/Person/PersonCard";
import { PageName } from "../../components/PageName/PageName";
import MainPageLayout from "../../layouts/MainPageLayout";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";
import StandartLayout from "../../layouts/StandartLayout";

export const getServerSideProps = async () => {
  const staff = await fetch(`${process.env.APIpath}/api/management-page?populate[0]=management.avatar`, {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  })
    .then((res) => res.json())
    .then((res) => res.data.management)

  return {
    props: {
      staff
    }
  }
}

export default function Management({ staff }) {
  return (
    <StandartLayout>
      <PageName title='Руководство Государственного комитета по охране объектов животного мира республики тыва' />
      <AboutPageLayout>
        <div className="flex flex-wrap gap-4 justify-between">
          {staff.map((item) => {
            return (
              <span key={item.id} className="w-full">
                <PersonCard
                  id={item.id}
                  key={item.id}
                  surname={item.surname}
                  name={item.name}
                  patronymic={item.patronymic}
                  position={item.position}
                  email={item.email}
                  phone={item.phone}
                  avatar={item.avatar}
                />
              </span>
            )
          })}
        </div>
      </AboutPageLayout>
    </StandartLayout>
  )
}