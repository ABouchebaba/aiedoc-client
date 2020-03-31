const dateDifference = d => {
  let current = new Date();
  let date = new Date(d.replace(" ", "T"));
  return timeAgoString(current - date);
};

const timeAgoString = milis => {
  let hours = Math.floor(milis / 1000 / 60 / 60);
  let days = Math.floor(hours / 24);
  if (days > 0) {
    hours = hours % 24;
    return `${days} days and ${hours} hours ago`;
  }
  return `${hours} hours ago`;
};

export default dateDifference;
