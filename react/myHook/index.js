/**
 * update 的数据结构
 * const update = {
 *  action,   更新执行函数
 * next: null, 指向下一个hook
 * }
 */


// App组件对应的fiber对象
const fiber = {
    // 保存该FunctionComponent对应的Hooks链表
    memoizedState: null,
    // 指向App函数
    stateNode: App
  };

  hook = {
    // 保存update的queue，即上文介绍的queue
    queue: {
      pending: null
    },
    // 保存hook对应的state
    memoizedState: initialState,
    // 与下一个Hook连接形成单向无环链表
    next: null
  }


  function useState(initialState) {
    let hook;
  
    if (isMount) {
      hook = {
        queue: {
          pending: null
        },
        memoizedState: initialState,
        next: null
      }
      if (!fiber.memoizedState) {
        fiber.memoizedState = hook;
      } else {
        workInProgressHook.next = hook;
      }
      workInProgressHook = hook;
    } else {
      hook = workInProgressHook;
      workInProgressHook = workInProgressHook.next;
    }
  
    let baseState = hook.memoizedState;
    if (hook.queue.pending) {
      let firstUpdate = hook.queue.pending.next;
  
      do {
        const action = firstUpdate.action;
        baseState = action(baseState);
        firstUpdate = firstUpdate.next;
      } while (firstUpdate !== hook.queue.pending.next)
  
      hook.queue.pending = null;
    }
    hook.memoizedState = baseState;
  
    return [baseState, dispatchAction.bind(null, hook.queue)];
  }
