import { Editor as Novel } from "novel";
const Editor = ({ onUpdate }: { onUpdate: (html: string, json: string) => void }) => {
  return (
    <div className="flex flex-1">
      <Novel
        className="flex min-h-[600px] flex-1 overflow-hidden bg-[#fff]"
        autofocus={false}
        defaultValue={[]}
        onUpdate={(editor) =>
          onUpdate(JSON.stringify(editor?.getHTML()), JSON.stringify(editor?.getJSON()))
        }
      />
    </div>
  );
};

export default Editor;
