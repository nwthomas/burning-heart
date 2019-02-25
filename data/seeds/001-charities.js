exports.seed = function(knex, Promise) {
  return knex("charities")
    .truncate()
    .then(function() {
      return knex("charities").insert([
        { name: "Wounded Warriors" },
        { name: "Bill & Melinda Gates Foundation" },
        { name: "United Way Worldwide" },
        { name: "Feeding America" },
        { name: "Americares Foundation" },
        { name: "Task Force for GLobal Health" },
        { name: "Salvation Army" },
        { name: "St. Jude Children's Research Hospital" },
        { name: "Habitat for Humanity" },
        { name: "YMCA of the USA" },
        { name: "Food for the Poor" },
        { name: "Goodwill Industries International" },
        { name: "Samaritan's Purse" },
        { name: "Lutheran Services in America" },
        { name: "American Cancer Society" },
        { name: "World Vision" },
        { name: "American National Red Cross" },
        { name: "American Heart Association" },
        { name: "Planned Parenthood Federation of America" },
        { name: "Doctor's Without Borders" },
        { name: "Museum of Modern Art" },
        { name: "American Civil Liberties Union and Foundation" },
        { name: "World Wildlife Fund" },
        { name: "Humane Society of the United States" },
        { name: "Scholarship America" },
        { name: "Mount Sinai Health Systems" },
        { name: "Save the Children Federation" },
        { name: "Mayo Clinic" },
        { name: "Feed the Children" },
        { name: "Make-A-Wish Foundation of America" },
        { name: "Rotary Foundation of Rotary International" },
        { name: "American Kidney Fund" }
      ]);
    });
};
