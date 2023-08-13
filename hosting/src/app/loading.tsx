export default function Loading() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-secondary">
      <div className="flex justify-center" aria-label="読み込み中">
        <div className="animate-ping h-2 w-2 bg-primary rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-primary rounded-full mx-4"></div>
        <div className="animate-ping h-2 w-2 bg-primary rounded-full"></div>
      </div>
    </main>
  );
}
