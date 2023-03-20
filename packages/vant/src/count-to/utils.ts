export function isNumber(val: any) {
  return !isNaN(parseFloat(val));
}

export function formatNumber(
  num: number | string,
  separator: string,
  decimals: number
) {
  num = Number(num);
  num = num.toFixed(Number(decimals));
  num += '';
  const x = num.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  if (separator && !isNumber(separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + separator + '$2');
    }
  }
  return x1 + x2;
}
// 缓动函数
// t:timestamp,动画执行到当前帧所进过的时间
// b:begining,起始值
// c:change,需要变化的量
// d:duration，动画的总时间
export function easingFn(t: number, b: number, c: number, d: number) {
  return (c * (-(2 ** ((-10 * t) / d)) + 1) * 1024) / 1023 + b;
}
