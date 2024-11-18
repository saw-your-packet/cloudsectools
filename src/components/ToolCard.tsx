import { Tool } from "../App";
import {
  SiJavascript,
  SiPython,
  SiGo,
  SiCplusplus,
  SiTypescript,
  SiRuby,
  SiPowershell,
  SiShell,
  SiTerraform,
  SiRust,
  SiPhp,
} from "react-icons/si";
import { FaCoffee, FaStar } from "react-icons/fa";

type ToolCardProps = {
  tool: Tool;
};

const languageIcons: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript className="text-yellow-500" />,
  Python: <SiPython className="text-blue-500" />,
  Go: <SiGo className="text-teal-500" />,
  "C++": <SiCplusplus className="text-red-500" />,
  Java: <FaCoffee className="text-amber-600" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  Ruby: <SiRuby className="text-red-400" />,
  PowerShell: <SiPowershell className="text-blue-300" />,
  Shell: <SiShell className="text-gray-500" />,
  HCL: <SiTerraform className="text-purple-500" />,
  Rust: <SiRust className="text-orange-500" />,
  PHP: <SiPhp className="text-violet-500" />,
};

// Helper function to calculate the text and color class for the update badge
function getUpdateBadge(date: string): { text: string; color: string } {
  const today = new Date();
  const updatedDate = new Date(date);
  const differenceInDays = Math.floor(
    (today.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays <= 7) return { text: "Updated this week", color: "bg-green-500 text-white" };
  if (differenceInDays <= 30) return { text: "Updated last month", color: "bg-green-300 text-gray-800" };
  if (differenceInDays <= 365) return { text: "Updated this year", color: "bg-yellow-300 text-gray-800" };
  if (differenceInDays <= 730) return { text: "Updated last year", color: "bg-yellow-500 text-gray-800" };
  if (differenceInDays <= 1095) return { text: "Updated 2 years ago", color: "bg-orange-500 text-gray-800" };
  if (differenceInDays <= 1460) return { text: "Updated 3 years ago", color: "bg-red-400 text-white" };
  if (differenceInDays <= 1825) return { text: "Updated 4 years ago", color: "bg-red-500 text-white" };
  return { text: "Updated 5+ years ago", color: "bg-red-600 text-white" };
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { text: badgeText, color: badgeColor } = getUpdateBadge(tool.last_commit);

  return (
    <a
      href={tool.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-gray-800 shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-6 w-full hover:bg-gray-50 transition-all duration-300 flex flex-col"
    >
      <h2 className="text-xl font-bold text-black">{tool.name}</h2>
      <div className="flex justify-between mt-2">
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-400" />
          <span className="text-gray-700">{tool.stars}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">{tool.language}</span>
          {languageIcons[tool.language] && <span>{languageIcons[tool.language]}</span>}
        </div>
      </div>
      {/* Badge for last updated */}
      <div className="flex items-center justify-start mt-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColor}`}
        >
          {badgeText}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-4 flex-grow">{tool.description}</p>
      <hr className="my-4 border-gray-300" />
      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-800 text-xs rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}