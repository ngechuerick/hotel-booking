import { useMutation } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const { mutate: updateuser, isLoading } = useMutation({
    mutationFn: userData => updateUserData(userData),
    onSuccess: () => {
      toast.success("updated user data successfully");
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { updateuser, isLoading };
}
