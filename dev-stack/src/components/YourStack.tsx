
import type { ITechnology } from "../types/technology";

interface YourStackProps {
  selectedStack: ITechnology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({
  selectedStack,
  handleRemove,
  handleRemoveAll,
}: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="brand-gradient text-white text-xs px-3 py-1 rounded-full">
          {selectedStack.length} Selected
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        {selectedStack.length} Technology Selected
      </p>

      {selectedStack.length === 0 ? (
        <div className="text-center py-14">
          <p className="text-4xl mb-3">📦</p>

          <h3 className="font-semibold text-gray-800">
            Your Stack is Empty
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Start adding technologies to build
            your ideal development stack.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 mt-6">
            {selectedStack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-9 h-9 object-contain"
                  />

                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-gray-900">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(technology.id)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="btn btn-outline border-red-300 text-red-500 w-full mt-5"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
