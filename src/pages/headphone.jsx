import { Headphone } from "../components/headphone/component";
import { ReviewForm } from "../components/review-form/component";
import { Layout } from "../components/layout/component";
import { Tabs } from "../components/tabs/component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHeadphones } from "../redux/entities/headphone/thunks/get-headphones";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/ui/request";

export const HeadphonePage = () => {
  const [currentHeadphoneId, setCurrentHeadphoneId] = useState();

  const [requestId, setRequestId] = useState();
  const isLoading = useSelector(
    (state) => requestId && selectIsLoading(state, requestId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getHeadphones()).requestId);
  }, [dispatch]);

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
              <ReviewForm />
            </>
          )}
        </>
      )}
    </Layout>
  );
};
