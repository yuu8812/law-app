export const useUploadImage = () => {
  const uploadImage = async (file: File, type: "createWorld" | "createLaw" | "editor") => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`/api/upload?type=${type}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.url;
  };
  return { uploadImage };
};
