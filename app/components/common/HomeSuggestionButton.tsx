import Link from "next/link";

interface ButtonProps {
  icon: React.ReactNode;
  prompt: string;
}

const HomeSuggestionButton: React.FC<ButtonProps> = ({ icon, prompt }) => {
  return (
    <Link
      href={`/request?message=${encodeURIComponent(prompt)}`}
      target="_blank"
      rel="noreferrer"
    >
      <button className="relative flex w-40 flex-col gap-2 rounded-2xl border px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:token-surface-tertiary disabled:cursor-not-allowed">
        {icon}
        <div className="line-clamp-3 text-balance text-gray-600 dark:token-text-secondary break-word">
          {prompt}
        </div>
      </button>
    </Link>
  );
};

export default HomeSuggestionButton;
