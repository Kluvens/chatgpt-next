import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../app/components/ui/accordion";
import { getQnAData } from "../../lib/qna";

export interface QnAItem {
  question: string;
  answer: string;
}

const qa = () => {
  const qnaData: QnAItem[] = getQnAData();

  return (
    <div className="flex token-surface-primary shrink-0 grow basis-auto justify-center px-5 sm:px-10">
      <div className="w-96">
        <div className="mb-5">
          <div
            id="collection-icon-3742473"
            className="flex items-center rounded-card bg-cover stroke-collection-card-color text-collection-card-color justify-start"
            data-testid="collection-photo"
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10">
              {/* <Image
                src="https://p0hbqsdgsd9gt3kh.public.blob.vercel-storage.com/utilityImgs/chat_bubble.svg"
                alt="Chat icon"
                layout="fill"
                objectFit="contain"
                priority
              /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="mb-1 font-primary text-2xl font-bold leading-10 text-body-primary-color">
            ChatGPT
          </header>
          <div className="text-md font-normal leading-normal text-body-primary-color">
            <p>All things about ChatGPT</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex">
            <span className="line-clamp-1 flex text-base text-body-secondary-color">
              {qnaData.length} articles
            </span>
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {qnaData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default qa;
