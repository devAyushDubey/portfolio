import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Ayush Dubey",
  description:
    "Nikhil Rajput is a proficient Full Stack Developer, skilled in seamlessly integrating front-end and back-end technologies while excelling in design.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
      </head>
      <body>
        <ScrollToTop/> {children}
      </body>
    </html>
  );
};

export default RootLayout;
