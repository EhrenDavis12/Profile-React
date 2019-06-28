export function setTimer(timer, additionalPrams) {
  // clear any existing timer
  if (timer != null) {
    clearTimeout(timer);
  }

  const { onHideChildrenAction, onClearTimerAction } = { ...additionalPrams };

  // hide after `delay` milliseconds
  const newTimer = setTimeout(() => {
    onHideChildrenAction();
    onClearTimerAction();
  }, additionalPrams.delay);

  return newTimer;
}

export function clearTimer(timer) {
  if (timer != null) {
    clearTimeout(timer);
  }
  return true;
}
