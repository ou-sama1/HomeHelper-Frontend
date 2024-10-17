import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useSignup = (authRequest) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: authenticateUser,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: authRequest,
    onSuccess: ({ data }) => {
      const { token, user } = data;
      queryClient.setQueryData(["user"], user);
      localStorage.setItem("ACCESS_TOKEN", token);
      navigate(0);
    },
  });

  return { authenticateUser, error, isPending, isError };
};

export default useSignup;
