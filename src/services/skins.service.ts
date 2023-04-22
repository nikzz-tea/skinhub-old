import axios from 'axios';
import { ItemType } from '../models';

export const skinsService = {
  async getAll() {
    const { data } = await axios.get<ItemType[]>(
      'https://6354195ee64783fa827f4417.mockapi.io/skins?sortBy=name',
    );
    return data;
  },
};
