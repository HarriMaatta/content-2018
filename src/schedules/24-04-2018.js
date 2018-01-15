const date = "24-04-2018";

module.exports = {
  date,
  intervals: [
    {
      begin: "09:00",
      end: "13:00",
      sessions: [
        require("../workshops/andrey-and-artem"),
        require("../workshops/david-khourshid"),
        require("../workshops/gant-laborde"),
        require("../workshops/juho-vepsalainen"),
        require("../workshops/patrick-and-nik"),
        require("../workshops/sara-vieira"),
        require("../workshops/sia-karamalegos"),
        require("../workshops/sven-sauleau"),
      ],
    },
    {
      begin: "14:00",
      end: "18:00",
      sessions: [
        require("../workshops/andrey-and-artem"),
        require("../workshops/david-khourshid"),
        require("../workshops/gant-laborde"),
        require("../workshops/juho-vepsalainen"),
        require("../workshops/patrick-and-nik"),
        require("../workshops/rotem-mizrachi-meidan"),
        require("../workshops/sia-karamalegos"),
        require("../workshops/sven-sauleau"),
      ],
    },
    {
      begin: "09:00",
      end: "18:00",
      sessions: [require("../workshops/michel-weststrate")],
    },
  ],
};
