module.exports = {
  makeGraphData
};

const yearDonations = [
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 },
  { x: "", y: 0 }
];
const year = {
  Jan: 0,
  Feb: 0,
  Mar: 0,
  Apr: 0,
  May: 0,
  June: 0,
  July: 0,
  Aug: 0,
  Sept: 0,
  Oct: 0,
  Nov: 0,
  Dec: 0
};
const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};

function makeGraphData(donations) {
  // Get current month
  let month = new Date().getMonth() + 1;

  // Dynamically sets months including current one in yearDonations
  const newYearDonations = yearDonations.map(donation => {
    const newDonation = {
      ...donation,
      x: months[month]
    };
    month === 12 ? (month = 1) : month++;
    return newDonation;
  });

  // Totals up the number of donations in each month
  donations.forEach(donation => {
    const month = donation.updated_at.toString().split(" ")[1];
    year[month] = year[month] + 1;
  });

  // Finally, maps over donations and increases yearDonations array of objects if appropriate
  return newYearDonations
    .map(info => {
      return {
        ...info,
        y: year[info.x]
      };
    })
    .reverse();
}
