import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
        <ScrollToTop />
        <Router />
    </ThemeProvider>
  );
}

