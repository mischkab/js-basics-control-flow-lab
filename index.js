function scuberGreetingForFeet(distance){
  // Write your code here! 
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2500) {
    return 'No can do.';
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  return destination === 'NYC' ? ('Ok, sounds good.') : ('No go.');
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch (amount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}