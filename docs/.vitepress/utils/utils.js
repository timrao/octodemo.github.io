/**
 * 判断是否是移动端
 * @returns 
 */
export const isMobile = () => {
  const USER_AGENT = window.navigator.userAgent || "";
  return !!USER_AGENT.match(/iPhone|iPad|iPod|Android|AliApp|Yunos|cyclone/i);
};
