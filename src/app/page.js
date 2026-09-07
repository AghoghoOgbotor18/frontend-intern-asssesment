import Hero from "./components/Hero";
import LearningManagementSystem from "./components/LearningManagementSystem";
import Management from "./components/Management";
import TrainingPrograms from "./components/training/TrainingProgram";
import Transformation from "./components/transformation/Transformation";

export default function Home (){
  return (
    <>
      <Hero />
      <LearningManagementSystem />
      <TrainingPrograms />
      <Management />
      <Transformation />
    </>
  )
}