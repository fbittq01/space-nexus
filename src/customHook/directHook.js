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

  const handleDirectToBuild = () => {
    handleDirect({
      destination: "/build",
    });
  };

  const handleDirectToTermsOfServices = () => {
    handleDirect({
      destination: "/terms-of-service",
    });
  };

  const handleDirectToPolicy = () => {
    handleDirect({
      destination: "/privacy-policy",
    });
  };

  const handleDirectToHome = () => {
    handleDirect({
      destination: "/home",
    });
  }

  const handleDirectToComunity = () => {
    handleDirect({
      destination: "/comunity",
    });
  }

  const handleDirectToNetwork = () => {
    handleDirect({
      destination: "/network",
    });
  }

  const handleDirectToServiceAndTool = () => {
    handleDirect({
      destination: "/services-and-tools",
    });
  }

  const handleDirectToInterConect = () => {
    handleDirect({
      destination: "/interconnect",
    });
  }

  return {
    handleBack,
    handleDirectToLearn,
    handleDirectToBuild,
    handleDirectToTermsOfServices,
    handleDirectToPolicy,
    handleDirectToHome,
    handleDirectToComunity,
    handleDirectToNetwork,
    handleDirectToServiceAndTool,
    handleDirectToInterConect
  };
};

export default useDirect;
