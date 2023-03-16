var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
<<<<<<< HEAD
<<<<<<< HEAD

for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}

/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/
=======
=======
>>>>>>> 95e7e70c96a975bb4ca57a866a501a74c01fa1cc
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
<<<<<<< HEAD
selectTopic();
>>>>>>> 95e7e70c96a975bb4ca57a866a501a74c01fa1cc
=======
selectTopic();
>>>>>>> 95e7e70c96a975bb4ca57a866a501a74c01fa1cc
