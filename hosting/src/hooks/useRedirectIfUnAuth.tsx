import { useSignUpModal } from "@/hooks/useSignupModal";
import { useUser } from "@/hooks/useUser";

const useRedirectIfUnAuth = () => {
  const { state } = useUser();
  const { openModal } = useSignUpModal();
  const redirect = () => {
    if (!state?.id) {
      openModal();
      throw new Error("unauthorized");
    }
  };
  return { redirect };
};

export default useRedirectIfUnAuth;
