import { Editor as Novel } from "novel";
const Editor = () => {
  return (
    <div className="flex flex-1">
      <Novel className="flex min-h-[600px] flex-1 overflow-hidden bg-[#fff]" autofocus={false} />
    </div>
  );
};

export default Editor;
