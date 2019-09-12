// 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
// 例如`1100 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000`，
// 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
// 也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
// 时间区间被选中，例如`1100 1000 0000000000000000000000000000000000000000`，
// 表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 
// 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
// 示例输入：`"110010000000000000000000000000000000000000000000"`
// 示例输出：`["00:00~01:00", "02:00~02:30"]`
function format(start, end) {
    let endHour = (end / 2).toFixed(1);
    let startHour = (start / 2).toFixed(1);
    let reg = /(\d+)\.(\d+)/;
    const endRes = endHour.match(reg);
    const startRes = startHour.match(reg);
    return (
        addZero(startRes[1]) +
        ':' +
        addZero(startRes[2]) +
        '~' +
        addZero(endRes[1]) +
        ':' +
        addZero(endRes[2])
    );
}
function addZero(num) {
    num = num === '5' ? '30' : num;
    return num.length > 1 ? num : '0' + num;
}

function timeBitmapToRanges(timeBitmap) {
    let timeArr = timeBitmap.split('').map(v => +v);
    const res = [];
    let range = {};
    let start = 0;
    for (let i = 0; i <= timeArr.length; i++) {
        if (timeArr[i]) {
            start++;
        }
        if (!timeArr[i] && timeArr[i - 1]) {
            range[i] = start;
            start = 0;
        }
    }
    for (let j in range) {
        res.push(format(parseInt(j - range[j]), parseInt(j)));
    }
    return res;
}
 
console.log(
    timeBitmapToRanges('110010000000000000001110000000000000000000000111')
);