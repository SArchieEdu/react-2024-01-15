import { Headphone } from "../components/headphone/component";
import { ReviewForm } from "../components/review-form/component";
import { Layout } from "../components/layout/component";
import { Tabs } from "../components/tabs/component";
import { useState } from "react";

import { getHeadphones } from "../redux/entities/headphone/thunks/get-headphones";
import { useRequest } from "../hooks/use-request";
import { REQUEST_STATUS } from "../redux/ui/request/constants";

export const HeadphonePage = () => {
  const [currentHeadphoneId, setCurrentHeadphoneId] = useState();

  const requestStatus = useRequest(getHeadphones);

  return (
    <Layout>
      {requestStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <>
          <Tabs onSelect={setCurrentHeadphoneId} />
          {currentHeadphoneId && (
            <>
              <Headphone headphoneId={currentHeadphoneId} />
              <ReviewForm />
            </>
          )}
        </>
      )}
    </Layout>
  );
};
