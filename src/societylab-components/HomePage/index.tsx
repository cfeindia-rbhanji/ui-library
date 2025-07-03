import { useState } from "react";
import React from "react";
import { WelcomeUser } from "./WelcomeUser";
import Page from "./Page";
import KPISection from "./KPISection";
import KPIDashboard from "./KPIDashboard";
import LandingSkeleton from "./LandingSkeleton";
import RefreshButton from "./RefreshButton";

const DeveloperScreen: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [isLoadingOverlay, setIsLoadingOverlay] = useState(true);
  return (
    <Page>
      <div>
        <h2>Developer Screen</h2>
        <WelcomeUser
          name="Prachi"
          designation="Frontend Engineer"
          company="Gaply"
        />
        <KPISection
          title="Example KPI Section"
          description="This is a description for the KPI section."
          footerContent={<div>Footer content here</div>}
          className="mt-6"
        >
          <p>This is the content inside the KPISection component.</p>
        </KPISection>
        <KPIDashboard></KPIDashboard>
        <RefreshButton
          isSpinning={isSpinning}
          isLoadingOverlay={isLoadingOverlay}
          position="bottom-6 right-6"
        />
        <LandingSkeleton></LandingSkeleton>
      </div>
    </Page>
  );
};

export default DeveloperScreen;
