import Hero from "./components/Hero";
import LearningManagementSystem from "./components/LearningManagementSystem";
import Management from "./components/Management";
import TrainingPrograms from "./components/training/TrainingProgram";

export default function Home (){
  return (
    <>
      <Hero />
      <LearningManagementSystem />
      <TrainingPrograms />
      <Management />
    </>
  )
}