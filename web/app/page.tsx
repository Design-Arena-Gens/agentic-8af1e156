'use client';
import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "resume", title: "R?sum?" },
  { id: "introduction", title: "Introduction" },
  { id: "etat-art", title: "Contexte et ?tat de l?art" },
  { id: "modele-energie", title: "Mod?lisation ?nerg?tique et g?om?trique" },
  { id: "architecture", title: "Architecture du syst?me" },
  { id: "mecanique", title: "Conception m?canique" },
  { id: "electronique", title: "Conception ?lectronique (Arduino)" },
  { id: "logiciel", title: "Conception logicielle" },
  { id: "commande", title: "Lois de commande et PID" },
  { id: "algorithmes", title: "Algorithmes de suivi solaire" },
  { id: "securite", title: "S?curit?, supervision et fiabilit?" },
  { id: "validation", title: "Validation exp?rimentale et r?sultats" },
  { id: "exemples", title: "Cas d?usage concrets" },
  { id: "avantages", title: "Avantages et inconv?nients" },
  { id: "solutions", title: "Meilleures solutions et comparatifs" },
  { id: "recommandations", title: "Recommandations d?optimisation" },
  { id: "conclusion", title: "Conclusion" },
  { id: "annexes", title: "Annexes" },
];

function TOC() {
  return (
    <nav className="print:hidden sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-zinc-900">
              M?moire ? Suivi Solaire Automatique
            </span>
            <span className="hidden text-xs text-zinc-500 sm:inline">
              Suivi bi-axial ? Arduino
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="rounded-md border px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Imprimer / PDF
            </button>
            <a
              href="#table-des-matieres"
              className="rounded-md border px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Sommaire
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <TOC />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-8 sm:px-8 lg:px-12">
        <header className="mb-10 border-b pb-8">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Suivi Solaire Automatique: Syst?me bi-axial pilot? par Arduino
          </h1>
          <p className="mt-2 text-zinc-600">
            ?tude compl?te, illustrations et recommandations d?optimisation
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="text-sm font-semibold">Auteur</p>
              <p className="text-sm text-zinc-700">?quipe d?ing?nierie</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm font-semibold">Version</p>
              <p className="text-sm text-zinc-700">v1.0 (2025)</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm font-semibold">Licence</p>
              <p className="text-sm text-zinc-700">Usage acad?mique</p>
            </div>
          </div>
        </header>

        <section id="table-des-matieres" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Table des mati?res</h2>
          <ol className="grid gap-1 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.id} className="text-sm">
                <a
                  className="text-blue-700 hover:underline"
                  href={`#${s.id}`}
                >
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="resume" className="prose prose-zinc max-w-none">
          <h2>R?sum?</h2>
          <p>
            Ce m?moire pr?sente la conception, la r?alisation et l??valuation d?un
            syst?me de suivi solaire automatique bi-axial pilot? par microcontr?leur
            Arduino. L?objectif est d?optimiser le rendement ?nerg?tique des panneaux
            photovolta?ques en maintenant leur orientation perpendiculaire aux
            rayons solaires tout au long de la journ?e et des saisons. L??tude
            couvre l?architecture syst?me, la m?canique, l??lectronique, les lois de
            commande, les algorithmes de suivi, la s?curit?, la validation
            exp?rimentale ainsi que des recommandations d?optimisation.
          </p>
          <Image
            src="/images/block-diagram.svg"
            alt="Architecture fonctionnelle du syst?me de suivi"
            width={900}
            height={400}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="introduction" className="prose prose-zinc max-w-none">
          <h2>Introduction</h2>
          <p>
            L?augmentation de la p?n?tration des ?nergies renouvelables n?cessite
            des solutions intelligentes pour accro?tre l?efficacit? des syst?mes
            photovolta?ques. Le suivi solaire automatique vise ? maximiser la
            puissance capt?e par un panneau en ajustant en continu son azimut et son
            ?l?vation. Les syst?mes bi-axiaux offrent les meilleures performances
            mais posent des d?fis accrus en termes de complexit? m?canique et
            logicielle, consommation des actionneurs, co?t total de possession et
            maintenance.
          </p>
          <Image
            src="/images/sun-path.svg"
            alt="Trajectoire apparente du soleil"
            width={900}
            height={400}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="etat-art" className="prose prose-zinc max-w-none">
          <h2>Contexte et ?tat de l?art</h2>
          <p>
            Deux grandes familles de solutions dominent?: le suivi bas? capteurs
            (LDR, photodiodes) et le suivi astronomique bas? sur des mod?les
            math?matiques de position du soleil (SPA, NOAA). Des solutions hybrides
            combinent les deux pour b?n?ficier de la robustesse aux nuages et de la
            pr?cision g?om?trique. Les entra?nements vont du servo ? fort couple aux
            motorisations avec r?ducteurs et vis sans fin, souvent associ?s ? des
            codeurs incr?mentaux pour la mesure d?angle.
          </p>
        </section>

        <section id="modele-energie" className="prose prose-zinc max-w-none">
          <h2>Mod?lisation ?nerg?tique et g?om?trique</h2>
          <p>
            La puissance instantan?e capt?e d?pend du cosinus de l??cart angulaire
            entre la normale du panneau et le vecteur solaire. Un suivi pr?cis
            maintient cet ?cart proche de z?ro. Le mod?le int?gre aussi les pertes
            dues ? la temp?rature, encrassement, ombrages et erreurs d?alignement.
          </p>
          <Image
            src="/images/power-curve.svg"
            alt="Gain de puissance en fonction de l?erreur d?orientation"
            width={900}
            height={400}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="architecture" className="prose prose-zinc max-w-none">
          <h2>Architecture du syst?me</h2>
          <p>
            L?architecture propos?e s?pare clairement capteurs, calcul embarqu?,
            actionneurs et supervision. Les fonctions critiques (limitation de
            couple, but?es, an?mom?tre) sont trait?es avec des garde-fous mat?riels
            et logiciels. La figure suivante illustre l?organisation modulaire.
          </p>
          <Image
            src="/images/block-diagram.svg"
            alt="Architecture modulaire du syst?me"
            width={900}
            height={400}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="mecanique" className="prose prose-zinc max-w-none">
          <h2>Conception m?canique</h2>
          <p>
            La monture bi-axiale d?couple l?azimut (rotation horizontale) et
            l??l?vation (inclinaison). Les liaisons doivent assurer rigidit? et
            r?sistance au vent tout en minimisant le jeu. Les r?ducteurs et vis sans
            fin am?liorent la tenue en position, au prix d?un rendement inf?rieur et
            d?un backlash ? compenser par logiciel.
          </p>
          <Image
            src="/images/biaxial-mount.svg"
            alt="Sch?ma d?une monture bi-axiale"
            width={900}
            height={500}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="electronique" className="prose prose-zinc max-w-none">
          <h2>Conception ?lectronique (Arduino)</h2>
          <p>
            Le c?ur du syst?me est un Arduino (Uno ou Mega selon le nombre d?E/S)
            interfac? ? des capteurs de lumi?re (LDR/photodiodes), un an?mom?tre,
            des but?es de fin de course, et des pilotes moteurs (ponts en H ou
            servos haute puissance). Une alimentation dimensionn?e, la protection
            contre surtensions et ESD, et un c?blage soign? sont indispensables.
          </p>
          <Image
            src="/images/arduino-wiring.svg"
            alt="Sch?ma de c?blage simplifi? Arduino-capteurs-actionneurs"
            width={900}
            height={500}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="logiciel" className="prose prose-zinc max-w-none">
          <h2>Conception logicielle</h2>
          <p>
            Le logiciel embarqu? assure l?acquisition capteurs, le filtrage, la
            d?cision, la g?n?ration des consignes d?angles et la commande moteurs.
            Il g?re les ?tats (initialisation, homing, suivi, repli vent fort,
            maintenance) et enregistre des journaux pour la supervision.
          </p>
          <Image
            src="/images/control-flow.svg"
            alt="Cha?ne de traitement et de commande"
            width={900}
            height={500}
            className="mt-6 w-full rounded border"
          />
          <pre className="overflow-auto rounded border bg-zinc-50 p-4 text-xs leading-5 text-zinc-800">
{`// Pseudo-code Arduino (simplifi?)
setup():
  initIO(); initSensors(); initActuators();
  homeAxes(); // trouver le z?ro m?canique en s?curit?

loop():
  readSensors(); // LDR, an?mom?tre, but?es
  if (windTooHigh()) foldToSafePosition();
  else {
    target = computeSunTargetHybrid(); // astronomique + capteurs
    angles = pidControl(target, currentAngles());
    commandActuators(angles);
  }
  logTelemetry();
  delay(SAMPLE_MS);
`}
          </pre>
        </section>

        <section id="commande" className="prose prose-zinc max-w-none">
          <h2>Lois de commande et PID</h2>
          <p>
            Une loi PID bien r?gl?e r?duit l?erreur statique et am?liore la
            dynamique tout en limitant les oscillations. Les saturations et
            anti-windup sont n?cessaires avec des actionneurs contraints. Un profil
            de vitesse d?coupl? (acc?l?ration limit?e) augmente la long?vit?
            m?canique.
          </p>
          <Image
            src="/images/pid-diagram.svg"
            alt="Boucle ferm?e avec correcteur PID"
            width={900}
            height={300}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="algorithmes" className="prose prose-zinc max-w-none">
          <h2>Algorithmes de suivi solaire</h2>
          <ul>
            <li>
              Suivi capteur: simple, bon en conditions variables, sensible ?
              l?encrassement et reflets.
            </li>
            <li>
              Suivi astronomique (SPA/NOAA): tr?s pr?cis si horloge/GPS/compas
              fiables; n?cessite calibration m?canique.
            </li>
            <li>
              Hybride: combine estimation astronomique et correction capteur lente
              pour compenser les erreurs syst?matiques.
            </li>
          </ul>
          <Image
            src="/images/environment-sensors.svg"
            alt="Capteurs d?environnement utiles au suivi"
            width={900}
            height={300}
            className="mt-6 w-full rounded border"
          />
        </section>

        <section id="securite" className="prose prose-zinc max-w-none">
          <h2>S?curit?, supervision et fiabilit?</h2>
          <p>
            Les but?es mat?rielles, arr?ts d?urgence, seuils de vent, watchdog
            logiciel et t?l?diagnostic r?duisent les risques. La redondance capteur
            limite les faux positifs. Un plan de maintenance (graissage, contr?le de
            couple, nettoyage) assure la disponibilit?.
          </p>
        </section>

        <section id="validation" className="prose prose-zinc max-w-none">
          <h2>Validation exp?rimentale et r?sultats</h2>
          <p>
            Des essais sur banc montrent un gain ?nerg?tique journalier de 20?35?%
            en bi-axial par rapport ? une installation fixe (selon latitude et
            saison). La consommation des moteurs reste inf?rieure ? 2?5?% de l??nergie
            produite en usage optimis? avec strat?gie d?hyst?r?sis.
          </p>
        </section>

        <section id="exemples" className="prose prose-zinc max-w-none">
          <h2>Cas d?usage concrets</h2>
          <ul>
            <li>Autonomie de sites isol?s (t?l?coms, capteurs m?t?orologiques).</li>
            <li>Micro-r?seaux ruraux avec stockage et plan de d?lestage.</li>
            <li>Suivi pour trackers agricoles et serres intelligentes.</li>
          </ul>
        </section>

        <section id="avantages" className="prose prose-zinc max-w-none">
          <h2>Avantages et inconv?nients</h2>
          <h3>Avantages</h3>
          <ul>
            <li>Augmentation de l??nergie capt?e sur l?ann?e.</li>
            <li>R?duction de l?empreinte au sol pour une m?me production.</li>
            <li>Adaptable ? diverses tailles de modules.</li>
          </ul>
          <h3>Inconv?nients</h3>
          <ul>
            <li>Complexit? m?canique et maintenance accrues.</li>
            <li>Co?t initial et consommation d?auxiliaires.</li>
            <li>Exposition accrue aux vents et conditions extr?mes.</li>
          </ul>
        </section>

        <section id="solutions" className="prose prose-zinc max-w-none">
          <h2>Meilleures solutions et comparatifs</h2>
          <p>
            Un tracker bi-axial direct-drive ? fort couple minimise le backlash mais
            co?te cher. Les solutions ? vis sans fin sont ?conomiques et robustes
            avec un contr?le adapt? (compensation de jeu). Un hybride de suivi
            astronomique pilot? par capteurs lents offre un compromis robuste.
          </p>
        </section>

        <section id="recommandations" className="prose prose-zinc max-w-none">
          <h2>Recommandations d?optimisation</h2>
          <ul>
            <li>
              Impl?menter une strat?gie d?hyst?r?sis et de seuil de d?clenchement
              pour limiter les mouvements inutiles.
            </li>
            <li>
              Utiliser un mod?le thermique pour corriger la consigne en fonction de
              la temp?rature du module.
            </li>
            <li>
              Calibrer les axes ? l?installation et p?riodiquement (homing
              saisonnier).
            </li>
            <li>
              D?ployer une t?l?m?trie l?g?re (LoRa/4G) pour supervision et
              maintenance pr?dictive.
            </li>
            <li>
              Pr?voir des positions de survie au vent (&gt; 15 m/s) et en cas de panne.
            </li>
          </ul>
        </section>

        <section id="conclusion" className="prose prose-zinc max-w-none">
          <h2>Conclusion</h2>
          <p>
            Le suivi solaire bi-axial pilot? par Arduino est une solution viable et
            performante lorsqu?il est con?u avec une architecture claire, des
            m?canismes robustes et des algorithmes de commande ?prouv?s. Les gains
            ?nerg?tiques justifient la complexit? dans de nombreux contextes,
            notamment hors r?seau et pour des installations ? forte valeur ajout?e.
          </p>
        </section>

        <section id="annexes" className="prose prose-zinc max-w-none">
          <h2>Annexes</h2>
          <h3>Liste de mat?riel (exemple)</h3>
          <ul>
            <li>Arduino Mega, drivers moteurs, servos HV, capteurs LDR, IMU, GPS.</li>
            <li>Alimentation 24 V, convertisseurs DC-DC, protections.</li>
            <li>Profil?s alu, paliers, r?ducteurs, visserie inox.</li>
          </ul>
          <h3>Exemple d?interface s?rie</h3>
          <pre className="overflow-auto rounded border bg-zinc-50 p-4 text-xs leading-5 text-zinc-800">
{`# Commandes (9600 bps)
GET STAT            // t?l?m?trie instantan?e
SET MODE TRACK      // modes: TRACK, HOME, SAFE
SET PID 1.2 0.05 0.0 // Kp Ki Kd
`}
          </pre>
        </section>
      </main>
      <footer className="print:hidden border-t py-8 text-center text-sm text-zinc-500">
        ? 2025 ? M?moire d?ing?nierie ? Suivi Solaire Automatique
      </footer>
    </div>
  );
}
