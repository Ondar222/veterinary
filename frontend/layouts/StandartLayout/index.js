import { observer } from "mobx-react-lite";
import Footer from '../../components/Footer/Footer';

const StandartLayout = observer(({ children }) => {
  return (
    <>
      <main className="min-h-fit text-md">
        {children}
      </main>
      <Footer />
    </>

  )
})

export default StandartLayout