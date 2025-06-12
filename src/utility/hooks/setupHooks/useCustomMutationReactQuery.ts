/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getErrorHandlerData } from "utility/requestHelper/requestHelper";


const useCustomMutationReactQuery = (
  onFetch:any,
  options:any = { isStartOnInit: false, onError: () => {} }
) => {
  const { isStartOnInit, onError } = options;

  const [decryptedData, setDecryptedData] = useState(null);
  const [isShortLoading, setIsShortLoading] = useState(false); // minimal loading time become 0,5s

  const result = useMutation({
    mutationFn: onFetch,
    // onError: (err) => {
    //   const erroData = getErrorHandlerData(err);
    //   onError(erroData);
    // },
    // onSuccess: (data) => {
    //   setDecryptedData(data);
    // },
    // ...options,
  });
  const { mutate, data: response, isPending } = result;

  const startFetch = async (param:any = null, onSuccess:any = () => {}) => {
    setIsShortLoading(true);
    setTimeout(() => {
      setIsShortLoading(false);
    }, 500);

    mutate(param, {
      onError: (err) => {
        const erroData = getErrorHandlerData(err);
        onError(erroData);
      },
      onSuccess: (data) => onSuccess(data),
    });
  };

  useEffect(() => {
    if (!isStartOnInit) return;

    startFetch();
  }, []);

  useEffect(() => {
    if (response == null) return;
    setDecryptedData(response);
  }, [response]);

  return {
    ...result,
    isLoading: isPending || isShortLoading,
    decryptedData,
    startFetch,
  };
};

export default useCustomMutationReactQuery