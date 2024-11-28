import InputSection from "./InputSection";
import PreviewSection from "./PreviewSection";
import { useState } from 'react';
import { cvData } from './data';

export default function Main() {
  const [personalInfo, setPersonalInfo] = useState(cvData[0].personalInfo);

  return (
    <main>
      <InputSection personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <PreviewSection personalInfo={personalInfo} />
    </main>
  );
}