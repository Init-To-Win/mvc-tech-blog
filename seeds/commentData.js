const { Comment } = require("../models");

const commentData = [
  {
    content: "Very informative.",
    user_id: 2,
    post_id: 1,
  },
  {
    content:
      "Completely disagree, and also several derogatory remarks about your mother.",
    user_id: 3,
    post_id: 1,
  },
  {
    content: "Why would you say something so controversial, yet so true?",
    user_id: 2,
    post_id: 2,
  },
  {
    content: "This blog post deserves a pulitzer - nay! - a Nobel prize.",
    user_id: 3,
    post_id: 2,
  },
  {
    content:
      "Why do we keep storing all the data? LET THE DATA RUN FREE! FREE THE DATA!",
    user_id: 1,
    post_id: 3,
  },
  {
    content: "Off topic, but you sort of look like a llama.",
    user_id: 3,
    post_id: 3,
  },
  {
    content:
      "2-Factor Authorization is fine, if it's just a push notification on your phone. Having to log into an app to log into another app is clearly a Skynet plot against humanity.",
    user_id: 1,
    post_id: 4,
  },
  {
    content:
      "Two factors aren't nearly enough! People should need a retina scan, fingerprints, fifteen random two-digit numbers, and one perfectly executed interpretive dance to access your website!",
    user_id: 3,
    post_id: 4,
  },
  {
    content: "But what if I like bikes better?",
    user_id: 1,
    post_id: 5,
  },
  {
    content:
      "On a personal note, I am very jealous of your majestic moustache.",
    user_id: 2,
    post_id: 5,
  },
  {
    content:
      "I think the internet is just a fad, and it'll fall out of fashion any day now.",
    user_id: 1,
    post_id: 6,
  },
  {
    content:
      "If the internet is just a series of tubes, can we send ghosts through the wires? Ghosts can be very small, you know.",
    user_id: 2,
    post_id: 6,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
