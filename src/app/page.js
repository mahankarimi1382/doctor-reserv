import Navbar from "@/components/Navbar";
import PhoneMenu from "@/components/PhoneMenu";
import BannersSection from "@/container/Home/BannersSection";
import DoctorsSection from "@/container/Home/DoctorsSection";
import Footer from "@/components/Footer";
import FullBanerSection from "@/container/Home/FullBanerSection";
import HospitalsSection from "@/container/Home/HospitalsSection";
import MagezineSection from "@/container/Home/MagezineSection";
import MatabSection from "@/container/Home/MatabSection";
import QuestionsSection from "@/container/Home/QuestionsSection";
import SamaneSection from "@/container/Home/SamaneSection";
import SpecialtiesSection from "@/container/Home/SpecialtiesSection";
import UserOpinions from "@/container/Home/UserOpinions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainSearchBar from "@/components/MainSearchBar";
import SupportModal from "@/components/modals/SupportModal";
export default function Home() {
  return (
    <div dir="rtl">
      <div className=" lg:rounded-bl-[300px] rounded-bl-[80px] w-full h-[291px] md:h-[400px] lg:h-[600px]  flex flex-col justify-start gap-20  bg-[#C2E2FF]">
        <Navbar />
        <MainSearchBar />
      </div>
      <SpecialtiesSection />
      <DoctorsSection />
      <BannersSection />
      <HospitalsSection />
      <FullBanerSection />
      <MatabSection />
      <QuestionsSection />
      <SamaneSection />
      <UserOpinions />
      <MagezineSection />
      <Footer />
      <PhoneMenu />
      <ToastContainer />
      <SupportModal />
    </div>
  );
}
