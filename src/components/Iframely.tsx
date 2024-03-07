import { useEffect, useState } from "react";

const KEY = "68063e22eafae5a975fc1dad78e3b903";

declare global {
  interface Window {
    iframely: {
      load: () => void;
    };
  }
}

export default function Iframely({ url }: { url: string }) {
  const [error, setError] = useState<{ code: number; message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [html, setHtml] = useState({
    __html: "<a />",
  });

  useEffect(() => {
    if (url) {
      fetch(
        `https://cdn.iframe.ly/api/iframely?url=${encodeURIComponent(url)}&key=${KEY}&iframe=1&omit_script=1`,
      )
        .then((res) => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            if (res.html) {
              setHtml({ __html: res.html });
            } else if (res.error) {
              setError({ code: res.error, message: res.message });
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          },
        );
    } else {
      setError({ code: 400, message: "Provide url attribute for the element" });
    }
  }, [url]);

  useEffect(() => {
    window.iframely && window.iframely.load();
  });

  console.log(html);

  if (error) {
    return (
      <div>
        Error: {error.code} - {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading…</div>;
  } else {
    return <div dangerouslySetInnerHTML={html} />;
  }
}
