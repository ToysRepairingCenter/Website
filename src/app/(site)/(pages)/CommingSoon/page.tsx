import React from "react";
import CommingSoon from "@/components/CommingSoon";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "TRC | Comming Soon",
  description: "TRC Toys Reparing Center Rewari",
  // other metadata
};

const CommingSoonPage = () => {
  return (
    <main>
      <CommingSoon />
    </main>
  );
};

export default CommingSoonPage;
