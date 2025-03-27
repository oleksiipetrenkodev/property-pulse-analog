import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse Analog",
  keywords: "real estate, rental, property",
  description: "Find the best real estate properties in your area",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
