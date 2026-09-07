import Hero from "./components/Hero";
import LearningManagementSystem from "./components/LearningManagementSystem";
import TrainingPrograms from "./components/training/TrainingProgram";

export default function Home (){
  return (
    <>
      <Hero />
      <LearningManagementSystem />
      <TrainingPrograms />
    </>
  )
}