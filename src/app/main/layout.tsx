import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      
              <NavBar />
        <Toaster />
        {children}
        <Footer />

    </section>
  );
}