import request from '../utils/request';

export function query(p) {
  console.log(p);
  return request('/backend/gets');
}
