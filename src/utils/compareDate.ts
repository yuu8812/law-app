export const compareDate = (lastLoginBonusTimestamp: string | null | undefined): boolean => {
  if (!lastLoginBonusTimestamp) return true;
  const currentTime = new Date();
  const todayMidnight = new Date(currentTime);
  todayMidnight.setHours(0, 0, 0, 0);
  const lastLoginBonus = new Date(lastLoginBonusTimestamp);
  lastLoginBonus.setHours(24, 0, 0, 0);
  const isReceived = todayMidnight.getTime().valueOf() >= lastLoginBonus.getTime().valueOf();
  return isReceived;
};
