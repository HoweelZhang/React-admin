// 只执行最后一次触发事件的规定时间之后执行回调
const debounce = (callBack, delay, ...args) => {
  let timer = null;
  return e => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callBack.apply(this, [e, ...args]);
      clearTimeout(timer);
      timer = null;
    }, delay || 0);
  };
};

// 在规定时间内执行最后一次触发事件
const throttle = (callBack, delay, ...args) => {
  let timer = null;
  return e => {
    if (!timer) {
      timer = setTimeout(() => {
        callBack.apply(this, [e, ...args]);
        clearTimeout(timer);
        timer = null;
      }, delay || 0);
    }
  };
};

// 4
/**
 * set:集合，存储唯一键值，可以遍历，通常用于过滤数组，很容易实现数组的交集、并集，类数组
 * map：字典，一般用于存储数据
 *
 * weakset:只能存储对象引用，不能遍历，成员容易被垃圾回收机制回收
 * weakmap:键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时是键名是无效的，不能遍历
 */
