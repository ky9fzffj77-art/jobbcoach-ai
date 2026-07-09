"use client";

import { useState } from "react";

export default function Home() {
  const [namn, setNamn] = useState("");
  const [jobb, setJobb] = useState("");
  const [erfarenhet, setErfarenhet] = useState("");
  const [utbildning, setUtbildning] = useState("");
  const [resultat, setResultat] = useState("");

  function skapaAnsokan() {
    const text = `
PERSONLIGT BREV

Hej!

Jag heter ${namn} och söker tjänsten som ${jobb}.

Genom min erfarenhet av ${erfarenhet} har jag utvecklat goda kunskaper och en stark vilja att bidra. Min utbildning inom ${utbildning} har gett mig en bra grund för att lyckas i rollen.

Jag är engagerad, ansvarstagande och motiverad att utvecklas vidare. Jag ser fram emot möjligheten att berätta mer om hur jag kan bidra hos er.

Med vänliga hälsningar,
${namn}


CV-SAMMANFATTNING

Namn:
${namn}

Måltjänst:
${jobb}

Erfarenhet:
${erfarenhet}

Utbildning:
${utbildning}
`;

    setResultat(text);
  }

 return (
  <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">



      <div className="max-w-3xl mx-auto text-center py-10">

        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Skapa ett bättre CV och personligt brev på några minuter
        </h1>

        <p className="text-gray-600 mb-10">
          Fyll i några uppgifter och få hjälp att skapa en jobbansökan som lyfter fram dina styrkor.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-left">

        <h2 className="text-2xl font-bold mb-2">
          Skapa din jobbansökan
        </h2>

        <p className="text-gray-600 mb-6">
          Svara på några enkla frågor så hjälper AI Jobbcoach dig att skapa en professionell ansökan.
        </p>       <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Vilket jobb söker du?"
          value={jobb}
          onChange={(e) => setJobb(e.target.value)} />

        <textarea
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Berätta om din erfarenhet"
          value={erfarenhet}
          onChange={(e) => setErfarenhet(e.target.value)} />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Din utbildning"
          value={utbildning}
          onChange={(e) => setUtbildning(e.target.value)} />

        <button
          onClick={skapaAnsokan}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700"
        >
          Skapa min ansökan
        </button>

      </div>

      {resultat && (
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 text-left">
          <h2 className="text-2xl font-bold mb-4">
            Din ansökan
          </h2>

          <textarea
            className="w-full border p-3 rounded-lg h-72"
            value={resultat}
            readOnly />
        </div>
      )}

     <div className="mt-10 bg-blue-50 rounded-2xl p-6 text-center">

        <h2 className="text-2xl font-bold mb-2">
          Vill du få hjälp med din jobbansökan?
        </h2>

        <p className="text-gray-600 mb-4">
          Vi bygger vidare på AI Jobbcoach. Lämna din e-post för att få uppdateringar.
        </p>

        <input
          className="w-full border p-3 rounded-lg mb-3"
          placeholder="Din e-post" />

                      <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeqDk_9NqE2o85LitIvenkR8so3f735_BS0Lkh0IGibncUeKQ/viewform?usp=publish-editor"
          target="_blank"
          className="block w-full bg-green-600 text-white p-3 rounded-lg font-bold text-center"
        >
          Jag vill vara med
        </a>
            </div>

      </div>

    </main>
  );
}