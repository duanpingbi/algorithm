/**
 * 实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出
 */

const fetch = function (idx) {
    return new Promise(resolve => {
      console.log(`start request ${idx}`);
      const timeout = parseInt(Math.random() * 1e4);
      setTimeout(() => {
        console.log(`end request ${idx}`);
        resolve(idx)
      }, timeout)
    })
  };


function multiRequest(urls, maxNum) {
    const len = urls.length;
    if(len <= 0) {
        return;
    }

    const result = new Array(len).fill(false);
    let count = 0;
    return new Promise((resolve, reject) => {
        while(count < maxNum) {
            // 下一个请求
            nextRequest();
        }
        
        function nextRequest() {
            if(count >= len - 1 && !result.includes(false)) {
                resolve(result);
                return;
            }
            const url = urls[count];
            fetch(url).then(res => {
                result[count] = res;
                if(count < len) {
                    nextRequest();
                }
            }).catch(e => {
                result[count] = e;
                if(count < len) {
                    nextRequest();
                }
            });
            count++;
        }
    });
}

const ulrs = [0, 1, 2, 3, 4, 5, 6];
multiRequest(ulrs, 3);