import InputSection from "./InputSection";
import PreviewSection from "./PreviewSection";
import { useState } from 'react';
import { cvData } from './data';

export default function Main() {
  const [personalInfo, setPersonalInfo] = useState(cvData[0].personalInfo);
  const [educationList, setEducationList] = useState(cvData[0].education);

  return (
    <main>
      <InputSection personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} educationList={educationList} setEducationList={setEducationList} />
      <PreviewSection personalInfo={personalInfo} educationList={educationList} />
    </main>
  );
}