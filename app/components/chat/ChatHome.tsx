import HomeSuggestionButton from "../common/HomeSuggestionButton";
import {
  ChatGptIcon,
  FlightIcon,
  HatIcon,
  PenIcon,
  TravelIcon,
} from "../icons/Icons";
import Header from "../layout/Header";
import QuestionButton from "../question/QuestionButton";

const promptSuggestions = [
  { icon: <HatIcon />, prompt: "Quiz me on world capitals" },
  { icon: <PenIcon />, prompt: "Thank my interviewer" },
  { icon: <FlightIcon />, prompt: "Experience Seoul like a local" },
  { icon: <TravelIcon />, prompt: "Pick outfit to look good on camera" },
];

const ChatHome = () => {
  return (
    <div className="relative token-surface-primary h-full text-sm md:pb-9">
      {/* Model Selection */}
      <Header />

      {/* Home Page */}
      <div className="flex h-full flex-col items-center justify-center token-text-primary">
        <ChatGptIcon />

        <div className="mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4 grid grid-cols-2 lg:grid-cols-4">
          {promptSuggestions.map((suggestion, index) => (
            <HomeSuggestionButton
              key={index}
              icon={suggestion.icon}
              prompt={suggestion.prompt}
            />
          ))}
        </div>
      </div>
      <QuestionButton />
    </div>
  );
};

export default ChatHome;
