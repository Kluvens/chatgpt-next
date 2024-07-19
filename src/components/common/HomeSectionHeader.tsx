interface HomeSectionHeaderText {
  text: string;
}

const HomeSectionHeader: React.FC<HomeSectionHeaderText> = ({ text }) => {
  return (
    <div className="max-w-[68rem] mx-auto grid grid-cols-12 mt-16 md:mt-20">
      <div className="md:col-span-8 md:col-start-3 col-span-12">
        <div className="flex flex-col relative items-center text-center">
          <h3 className="text-4xl leading-tight font-normal-tight font-normal text-balance">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionHeader;
