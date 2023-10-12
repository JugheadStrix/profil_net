import "./globals.css";
import "../assets/mdi/css/materialdesignicons.min.css"; // icons
import TestContextProvider from "@/lib/context/TestContext";
import ReduxProvider from "@/lib/redux/Redux.provider";

export const metadata = {
  title: "Profil",
  description: `Application web & mobile de mise en relation permettant aux entrepreneurs débordés d’entrer en contact avec des assistantes virtuelles en vue de déléguer les tâches chronophages ou non pour son business.
  Alors, que ce soit un entrepreneur ambitieux avec des projets plein la tête ou que ce soit un(e) étudiant(e) ou travailleur(e) autonome/Freelancer souhaitant rentabiliser son temps libre, Yuppie Hub est la solution la plus simple et rapide. 
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ReduxProvider>
          <TestContextProvider>{children}</TestContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
