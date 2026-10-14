import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  handleAddToStack: (technology: ITechnology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  handleAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="card bg-white border border-gray-100 rounded-xl shadow-sm p-5">

      <div className="flex justify-between items-center">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10"
        />

        <span className="badge badge-soft badge-info">
          {technology.badge}
        </span>
      </div>

      <h2 className="text-xl font-bold mt-5 text-gray-900">
        {technology.name}
      </h2>

      <p className="text-sm text-gray-500 mt-2 min-h-16">
        {technology.description}
      </p>

      <div className="flex justify-between items-center text-xs mt-4">
        <span className="badge badge-ghost">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-gray-600">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
  onClick={() => handleAddToStack(technology)}
  disabled={isAdded}
  className={`btn mt-5 w-full ${
    isAdded
      ? "bg-gray-200 text-gray-500"
      : "bg-gray-950 text-white"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
    </div>
  );
};

export default TechnologyCard;