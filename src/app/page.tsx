import AboutusPage from "./homepage/about/page";
import LandingPage from "./homepage/landing/page";

export default function AllPages() {
  return (
    <div className="flex min-h-screen flex-col  p-24">
      <h1>SOLEKTRA TELECOM</h1>
      <LandingPage />
      <AboutusPage />
    </div>
  );
}
