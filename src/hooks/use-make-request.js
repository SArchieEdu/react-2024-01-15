import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../redux/ui/request";

import { useDispatch } from "react-redux";
import { useCallback } from "react";

export function useMakeRequest(thunk) {
  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state) =>
    selectStatus(state, request.requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(
    (...params) => {
      setRequest(dispatch(thunk(...params)));
    },
    [dispatch, thunk]
  );

  return [requestStatus, makeRequest];
}
