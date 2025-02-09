import { AxiosError } from 'axios';
import Http from './http';
import { TestI } from './types';

const landingApi = {
  getTest: async () => {
    try {
      const instance = Http.Public();
      const response = await instance.get<TestI>('/collections/test', {
        params: {
          sort: 'position',
          perPage: 200,
        },
      });

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const currentError = error as AxiosError

      return {
        success: false,
        message: currentError.message,
      };
    }
  }
};

export default landingApi;
