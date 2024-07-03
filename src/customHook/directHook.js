import { useRouter } from "next/router";
import { useCallback } from "react";

const useDirect = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleDirect = useCallback(({ destination, query }) => {
    if (destination) {
      router.push({
        pathname: destination,
        query,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDirectToLearn = () => {
    handleDirect({
      destination: "/learn",
    });
  };

  return {
    handleBack,
    handleDirectToLearn,
  };
};

export default useDirect;
