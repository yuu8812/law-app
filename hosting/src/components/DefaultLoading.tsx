import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DefaultLoading = () => {
  return (
    <section className="relative z-50 flex flex-1 flex-col items-center justify-center">
      <div className="animate-spin">
        <AiOutlineLoading3Quarters />
      </div>
    </section>
  );
};

export default DefaultLoading;
