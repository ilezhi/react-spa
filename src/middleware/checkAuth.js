'use strict';

export default store => next => action => {
  console.log('检查权限');
  let result = next(action);
  console.log('结束检查权限');
  return result;
}
