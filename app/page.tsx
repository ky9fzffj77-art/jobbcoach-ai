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

Jag har erfarenhet av ${erfarenhet} och har utbildning inom ${utbildning}. 
Jag är en engagerad person som tycker om att utvecklas och bidra med mina kunskaper.

Jag hoppas få möjligheten att berätta mer om mig själv vid en intervju.

Med vänliga hälsningar,
${namn}


CV-SAMMANFATTNING

Namn: ${namn}

Söker:
${jobb}

Erfarenhet:
${erfarenhet}

Utbildning:
${utbildning}
`;

    setResultat(text);
  }

  function kopiera() {
    navigator.clipboard.writeText(resultat);
    alert("Texten är kopierad!");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">

        <h1 className="text-4xl font-bold text-center mb-4">
          AI Jobbcoach
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Skapa ett CV och personligt brev på några minuter.
        </p>

        <input
          className="w-full border p-3 rounded-lg mb-3"
          placeholder="Ditt namn"
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded-lg mb-3"
          placeholder="Vilket jobb söker du?"
          value={jobb}
          onChange={(e) => setJobb(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded-lg mb-3"
          placeholder="Din erfarenhet"
          value={erfarenhet}
          onChange={(e) => setErfarenhet(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded-lg mb-3"
          placeholder="Din utbildning"
          value={utbildning}
          onChange={(e) => setUtbildning(e.target.value)}
        />

        <button
          onClick={skapaAnsokan}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
        >
          Skapa min ansökan
        </button>

        {resultat && (
          <div className="mt-6">
            <textarea
              className="w-full border p-3 rounded-lg h-64"
              value={resultat}
              readOnly
            />

            <button
              onClick={kopiera}
              className="w-full bg-green-600 text-white p-3 rounded-lg mt-3 font-bold"
            >
              Kopiera text
            </button>
          </div>
        )}

      </div>
    </main>
  );
}