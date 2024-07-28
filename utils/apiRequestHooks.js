import { APICall } from "./apiCall";
import URLS from "./urls";
import useSWR from 'swr';


const fetcher = async(data) => {
    let res  =  await APICall(data[0], data[1]);
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