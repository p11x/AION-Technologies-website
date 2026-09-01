import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Training from "./pages/Training";
import TrainingDetail from "./pages/TrainingDetail";
import Admissions from "./pages/Admissions";
import Internships from "./pages/Internships";
import IndustrialVisits from "./pages/IndustrialVisits";
import OtherServices from "./pages/OtherServices";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Placement from "./pages/Placement";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="training" element={<Training />} />
          <Route path="training/:slug" element={<TrainingDetail />} />
          <Route path="services/admissions" element={<Admissions />} />
          <Route path="services/internships" element={<Internships />} />
          <Route path="services/industrial-visits" element={<IndustrialVisits />} />
          <Route path="services/others" element={<OtherServices />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:slug" element={<CourseDetail />} />
          <Route path="placement" element={<Placement />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
