const { Post } = require("../models");

const postData = [
  {
    title: "Javascript - Pros and Cons",
    content:
      "(From Wikipedia) JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)",
    user_id: 1,
  },
  {
    title: "DeCaffeinated Coding",
    content:
      "(From Wikipedia) Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.[1][2] It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic. Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process.",
    user_id: 1,
  },
  {
    title: "Storing Data Like Nuts For Winter",
    content:
      "(From Wikipedia) Structured Query Language (SQL) 'sequel' for historical reasons is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables. Introduced in the 1970s, SQL offered two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, i.e., with or without an index. Originally based upon relational algebra and tuple relational calculus, SQL consists of many types of statements,[6] which may be informally classed as sublanguages, commonly: Data query Language (DQL), Data Definition Language (DDL), Data Control Language (DCL), and Data Manipulation Language (DML).",
    user_id: 2,
  },
  {
    title: "2-Factor Authorization: Evil or just Annoying?",
    content:
      "(From Wikipedia) Multi-factor authentication (MFA; two-factor authentication, or 2FA, along with similar terms) is an electronic authentication method in which a user is granted access to a website or application only after successfully presenting two or more pieces of evidence (or factors) to an authentication mechanism. MFA protects personal data—which may include personal identification or financial assets—from being accessed by an unauthorized third party that may have been able to discover, for example, a single password. An increased use of MFA is helping organizations and individuals to have a secure data environment. However, there are numerous threats that consistently makes it hard to ensure MFA is entirely secure. Employee practices is also a source of concern that ought to ensure data is private and secure from unauthorized persons and bad actors. The problem is that most people do not want to remember complicated password thus going for easy passwords. Oftenly, people try to avoid the feeling of being frustrated in any case they forget their crucial passwords to specific sites. A third-party authenticator (TPA) app enables two-factor authentication, usually by showing a randomly generated and frequently changing code to use for authentication.",
    user_id: 2,
  },
  {
    title: "Handlebars are not just for bikes!",
    content:
      "(From Wikipedia) Mustache inspired numerous JavaScript template libraries which forked from the original simplicity to add certain functionality or use. Handlebars.js is self-described as: Handlebars.js is an extension to the Mustache templating language created by Chris Wanstrath. Handlebars.js and Mustache are both logicless templating languages that keep the view and the code separated like we all know they should be. Handlebars differs from its predecessor in that, within Block Expressions (similar to sections in Mustache), Helpers allow custom function through explicit user-written code for that block.",
    user_id: 3,
  },
  {
    title: "The Internet - Is It A Fad?",
    content:
      "(From Wikipedia) The Internet is the global system of interconnected computer networks that uses the Internet protocol suite to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the interlinked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing. The origins of the Internet date back to research to enable time-sharing of computer resources and the development of packet switching in the 1960s. The set of rules (communication protocols) to enable internetworking on the Internet arose from research and development commissioned in the 1970s by the Defense Advanced Research Projects Agency (DARPA) of the United States Department of Defense in collaboration with universities and researchers across the United States and in the United Kingdom and France.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
