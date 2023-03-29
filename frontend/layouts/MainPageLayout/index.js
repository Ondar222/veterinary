import Footer from "../../components/Footer/Footer";

const MainPageLayout = ({ children }) => {

  return (
    <>
      <div className="container mx-auto text-black font-light min-h-[800px]">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default MainPageLayout