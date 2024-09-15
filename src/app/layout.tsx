import "@fortawesome/fontawesome-free/css/all.min.css"
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Footer from "./_Components/Footer/Footer";
import NavBar from "./_Components/NavBar/NavBar";
export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
      <NavBar />
        <div className="container">
        {children}
        </div>
        <Footer />
      </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
