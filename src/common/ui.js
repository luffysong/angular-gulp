export function paddingContent() {
  // 因为动画原因，不能使用width检测宽度；
  const NARROW_WIDTH = 50;
  const WIDEN_WIDTH = 140;
  const width = $('#sidebarNav.narrow')[0] ? NARROW_WIDTH : WIDEN_WIDTH;
  $('.content-wrapper').css('padding-left', `${width}px`);
}

