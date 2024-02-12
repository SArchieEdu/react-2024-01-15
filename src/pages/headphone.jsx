import { Headphone } from "../components/headphone/component";
import { ReviewForm } from "../components/review-form/component";
import { Layout } from "../components/layout/component";
import { Tabs } from "../components/tabs/component";
import { useState } from "react";

import { useGetHeadphonesQuery } from "../redux/services/api";

export const HeadphonePage = () => {
  const [currentHeadphoneId, setCurrentHeadphoneId] = useState();

  const { isLoading } = useGetHeadphonesQuery();

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Tabs onSelect={setCurrentHeadphoneId} />
          {currentHeadphoneId && (
            <>
              <Headphone headphoneId={currentHeadphoneId} />
              <ReviewForm headphoneId={currentHeadphoneId} />
            </>
          )}
        </>
      )}
    </Layout>
  );
};
