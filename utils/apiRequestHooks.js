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


export const useProjects = (params) => {
  const { data, error } = useSWR([URLS.LIST_PROJECTS,params], fetcher);
  return {
    projects: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const useGetProject = (params) => {
  const { data, error } = useSWR([URLS.GET_PROJECT ,params], fetcher);
  return {
    project: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const useTestimonials = (params) => {
  const { data, error } = useSWR([URLS.LIST_TESTIMONIALS,params], fetcher);
  return {
    testimonials: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const useTrips = (params) => {
  const { data, error } = useSWR([URLS.LIST_TRIPS,params], fetcher);
  return {
    trips: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const useGetTrip = (params) => {
  const { data, error } = useSWR([URLS.GET_TRIP ,params], fetcher);
  return {
    trip: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const useCreateApplication = (params) => {
  const { data, error } = useSWR([URLS.APPLY ,params], fetcher);
  return {
    application: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

