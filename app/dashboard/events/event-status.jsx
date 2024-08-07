export const getStatus = (event) => {
  const now = new Date();
  const eventDate = new Date(event.date);
  const eventEndDate = new Date(event.endDate);

  if (eventDate > now) {
    return "upcoming";
  } else if (eventDate <= now && eventEndDate >= now) {
    return "ongoing";
  } else {
    return "finished";
  }
};
