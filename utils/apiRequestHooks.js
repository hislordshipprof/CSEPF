import useSWR from 'swr';
import { APICall } from './apiCall';
import URLS from './urls';

const fetcher = async (params) => {
  let res = await APICall(params[0], params[1]);
  return res;
};

export const useFellows = (params) => {
  const { data, error } = useSWR([URLS.LIST_FELLOWS, params], fetcher);
  return {
    fellows: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getFellows = (params) => {
  const { data, error } = useSWR([URLS.GET_FELLOW , params], fetcher);
  return {
    fellows: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useStaff = (params) => {
  const { data, error } = useSWR([URLS.LIST_STAFF,params], fetcher);
  return {
    staff: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const useGetStaff = (params) => {
  const { data, error } = useSWR([URLS.GET_STAFF ,params], fetcher);
  return {
    staffData: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const usePastSpeakers = (params) => {
  const { data, error } = useSWR([URLS.LIST_PAST_SPEAKERS,params], fetcher);
  return {
    pastSpeakers: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};