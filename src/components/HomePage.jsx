import React, { useState } from "react";
import "./styles.css";
import bg from "./bg.jpeg";
import naturebg from "./assets/naturebg.mp4";
export default function HomePage() {
  const [start, setStart] = useState(1);
  const hideStart = () => {
    setStart(0);
    getRandomElement();
  };

  const [curr, setCurr] = useState("");

  const alphabets = [
    "அ",
    "ஆ",
    "இ",
    "ஈ",
    "உ",
    "ஊ",
    "எ",
    "ஏ",
    "ஐ",
    "ஒ",
    "ஓ",
    "ஔ",
    "க்",
    "க",
    "கா",
    "கி",
    "கீ",
    "கு",
    "கூ",
    "கெ",
    "கே",
    "கை",
    "கொ",
    "கோ",
    "கௌ",
    "ங்",
    "ங",
    "ஙா",
    "ஙி",
    "ஙீ",
    "ஙு",
    "ஙூ",
    "ஙெ",
    "ஙே",
    "ஙை",
    "ஙொ",
    "ஙோ",
    "ஙௌ",
    "ச்",
    "ச",
    "சா",
    "சி",
    "சீ",
    "சு",
    "சூ",
    "செ",
    "சே",
    "சை",
    "சொ",
    "சோ",
    "சௌ",
    "ஞ்",
    "ஞ",
    "ஞா",
    "ஞி",
    "ஞீ",
    "ஞு",
    "ஞூ",
    "ஞெ",
    "ஞே",
    "ஞை",
    "ஞொ",
    "ஞோ",
    "ஞௌ",
    "ட்",
    "ட",
    "டா",
    "டி",
    "டீ",
    "டு",
    "டூ",
    "டெ",
    "டே",
    "டை",
    "டொ",
    "டோ",
    "டௌ",
    "ண்",
    "ண",
    "ணா",
    "ணி",
    "ணீ",
    "ணு",
    "ணூ",
    "ணெ",
    "ணே",
    "ணை",
    "ணொ",
    "ணோ",
    "ணௌ",
    "த்",
    "த",
    "தா",
    "தி",
    "தீ",
    "து",
    "தூ",
    "தெ",
    "தே",
    "தை",
    "தொ",
    "தோ",
    "தௌ",
    "ந்",
    "ந",
    "நா",
    "நி",
    "நீ",
    "நு",
    "நூ",
    "நெ",
    "நே",
    "நை",
    "நொ",
    "நோ",
    "நௌ",
    "ப்",
    "ப",
    "பா",
    "பி",
    "பீ",
    "பு",
    "பூ",
    "பெ",
    "பே",
    "பை",
    "பொ",
    "போ",
    "பௌ",
    "ம்",
    "ம",
    "மா",
    "மி",
    "மீ",
    "மு",
    "மூ",
    "மெ",
    "மே",
    "மை",
    "மொ",
    "மோ",
    "மௌ",
    "ய்",
    "ய",
    "யா",
    "யி",
    "யீ",
    "யு",
    "யூ",
    "யெ",
    "யே",
    "யை",
    "யொ",
    "யோ",
    "யௌ",
    "ர்",
    "ர",
    "ரா",
    "ரி",
    "ரீ",
    "ரு",
    "ரூ",
    "ரெ",
    "ரே",
    "ரை",
    "ரொ",
    "ரோ",
    "ரௌ",
    "ல்",
    "ல",
    "லா",
    "லி",
    "லீ",
    "லு",
    "லூ",
    "லெ",
    "லே",
    "லை",
    "லொ",
    "லோ",
    "லௌ",
    "வ்",
    "வ",
    "வா",
    "வி",
    "வீ",
    "வு",
    "வூ",
    "வெ",
    "வே",
    "வை",
    "வொ",
    "வோ",
    "வௌ",
    "ழ்",
    "ழ",
    "ழா",
    "ழி",
    "ழீ",
    "ழு",
    "ழூ",
    "ழெ",
    "ழே",
    "ழை",
    "ழொ",
    "ழோ",
    "ழௌ",
    "ள்",
    "ள",
    "ளா",
    "ளி",
    "ளீ",
    "ளு",
    "ளூ",
    "ளெ",
    "ளே",
    "ளை",
    "ளொ",
    "ளோ",
    "ளௌ",
    "ற்",
    "ற",
    "றா",
    "றி",
    "றீ",
    "று",
    "றூ",
    "றெ",
    "றே",
    "றை",
    "றொ",
    "றோ",
    "றௌ",
    "ன்",
    "ன",
    "னா",
    "னி",
    "னீ",
    "னு",
    "னூ",
    "னெ",
    "னே",
    "னை",
    "னொ",
    "னோ",
    "னௌ",
  ];

  const getRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    setCurr(alphabets[randomIndex]);
  };
  return (
    <div id="bg">
      <div className="container">
        <div className="imgBlock">
          <img src={bg} />
        </div>
        <div className="content">
          {start ? (
            <button onClick={hideStart} className="startbtn">
              Start
            </button>
          ) : (
            <div>
              <div className="card">
                <div className="letter">
                  <h1>{curr}</h1>
                </div>
                <div>
                  <button className="nextbtn" onClick={getRandomElement}>
                    Next
                  </button>
                </div>
              </div>
              ;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
