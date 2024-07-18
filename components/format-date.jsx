function FormatDate(date) {
  const now = new Date();
  const givenDate = new Date(date.date);

  const diffInMs = now - givenDate;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays === 1) {
    return "yesterday";
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInWeeks === 1) {
    return "a week ago";
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} weeks ago`;
  } else if (diffInMonths === 1) {
    return "a month ago";
  } else if (diffInMonths < 12) {
    return `${diffInMonths} months ago`;
  } else if (diffInYears === 1) {
    return "a year ago";
  } else {
    return `${diffInYears} years ago`;
  }
}

export default FormatDate;
