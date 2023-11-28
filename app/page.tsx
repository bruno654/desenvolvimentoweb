import Banner  from "./components/Banner";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const revalidate=0
export default function Home() {
  return (
  
      <div>
          
      <Header />
      <Banner />
      <Courses />
      <Footer />

    
    </div>
  

  )
}
