const DefaultLoading = () => {
  return (
    <section className="relative z-50 flex flex-1 flex-col items-center justify-center">
      <div className="relative z-50 flex justify-center" aria-label="読み込み中">
        <div className="bg-primary h-1 w-1 animate-ping rounded-full bg-blue"></div>
        <div className="bg-primary mx-4 h-1 w-1 animate-ping rounded-full bg-blue"></div>
        <div className="bg-primary h-1 w-1 animate-ping rounded-full bg-blue"></div>
      </div>
    </section>
  );
};

export default DefaultLoading;
