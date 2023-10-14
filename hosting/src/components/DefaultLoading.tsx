const DefaultLoading = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-white relative z-50">
      <div className="flex justify-center" aria-label="読み込み中">
        <div className="animate-ping h-2 w-2 bg-primary rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-primary rounded-full mx-4"></div>
        <div className="animate-ping h-2 w-2 bg-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default DefaultLoading;
