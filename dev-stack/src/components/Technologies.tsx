import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologies: ITechnology[];
  selectedStack: ITechnology[];
  handleAddToStack: (technology: ITechnology) => void;
}

const Technologies = ({
  technologies,
  selectedStack,
  handleAddToStack,
}: TechnologiesProps) => {
  return (
    <section
      id="technologies"
      className="max-w-7xl mx-auto px-5 py-16"
    >
      <h2 className="text-3xl font-bold text-gray-900">
        Explore the{" "}
        <span className="brand-gradient-text">
          Technologies
        </span>
      </h2>

      <p className="text-gray-500 mt-2 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleAddToStack={handleAddToStack}
            isAdded={selectedStack.some(
              (item) => item.id === technology.id
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;