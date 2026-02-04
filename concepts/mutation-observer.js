let button;
let buttonClicked;
const startTime = Date.now().toLocaleString('en-US', { hours: '2-digit', minutes: '2-digit', seconds: '2-digit' });
console.log('Script started at:', startTime);
const observer = new MutationObserver((mutationsList, observer) => {
  console.log('Mutation observed:', mutationsList);
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      button = document.getElementById('btn');
      if (button) {
        console.log('Mutation detected: Button added to the DOM');
        buttonClicked = () => {
          alert('Button Clicked');
        };
        button.addEventListener('click', buttonClicked);
        // Once we have added the event listener, we can stop observing
        observer.disconnect();
      }
    }
  }
});

observer.observe(document.getElementById('container'), { childList: true, subtree: true });

// Simulate adding a button to the DOM after 3 seconds
setTimeout(() => {
  console.log('Adding button to the DOM');
  const buttonElement = document.createElement('button');
  buttonElement.id = 'btn';
  buttonElement.textContent = 'Click Me';
  document.getElementById('container').appendChild(buttonElement);
  console.log(
    'Button added to the DOM',
    Date.now().toLocaleString('en-US', { hours: '2-digit', minutes: '2-digit', seconds: '2-digit' }),
  );
}, 3000);

setTimeout(() => {
  // we need to remove event listener before removing button from DOM
  if (button && buttonClicked) {
    button.removeEventListener('click', buttonClicked);
    button.remove();
    console.log('Event listener removed from button', Date.now().toLocaleString());
  }
}, 10000);
