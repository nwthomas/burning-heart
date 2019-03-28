const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex("charities")
    .del()
    .then(function() {
      return knex("charities").insert([
        {
          charityName: "Wounded Warriors",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Bill & Melinda Gates Foundation",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "United Way Worldwide",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Feeding America",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Americares Foundation",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Task Force for GLobal Health",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Salvation Army",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "St. Jude Children's Research Hospital",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Habitat for Humanity",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "YMCA of the USA",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Food for the Poor",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Goodwill Industries International",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Samaritan's Purse",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Lutheran Services in America",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "American Cancer Society",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "World Vision",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "American National Red Cross",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "American Heart Association",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Planned Parenthood Federation of America",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Doctor's Without Borders",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Museum of Modern Art",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "American Civil Liberties Union and Foundation",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "World Wildlife Fund",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Humane Society of the United States",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Scholarship America",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Mount Sinai Health Systems",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Save the Children Federation",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Mayo Clinic",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Feed the Children",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Make-A-Wish Foundation of America",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "Rotary Foundation of Rotary International",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        },
        {
          charityName: "American Kidney Fund",
          phone: faker.fake("{{phone.phoneNumber}}"),
          street1: faker.fake("{{address.streetAddress}}"),
          street2: faker.fake("{{address.secondaryAddress}}"),
          city: faker.fake("{{address.city}}"),
          state: faker.fake("{{address.state}}"),
          zip: faker.fake("{{address.zipCode}}")
        }
      ]);
    });
};
