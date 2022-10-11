import { postRequest } from '@/utils/requests';

const api = {
    screen: '/screen/nat/statistics/getDate',
};

export const getScreen = () => {
    return postRequest(api.screen);
};
