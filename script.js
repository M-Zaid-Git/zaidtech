
  
//   init();
//   animate();
  
//   const modal = document.getElementById('aboutModal');
//   const aboutBtn = document.querySelector('a[href="#about"]');
//   const closeBtn = document.querySelector('.close');
  
//   // Open modal when About Me button is clicked
//   aboutBtn.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     // Get button position for animation origin
//     const buttonRect = e.target.getBoundingClientRect();
//     const modalContent = document.querySelector('.modal-content');
    
//     // Set transform origin for the pop animation
//     modalContent.style.transformOrigin = `bottom ${buttonRect.any}px`;
    
//     modal.classList.add('show');
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  
//   // Close modal when X is clicked
//   closeBtn.addEventListener('click', () => {
//     modal.classList.remove('show');
//     document.body.style.overflow = 'auto'; // Restore scrolling
//   });
  
//   // Close modal when clicking outside of modal content
//   window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.classList.remove('show');
//       document.body.style.overflow = 'auto';
//     }
//   });
  
//   // Close modal with Escape key
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modal.classList.contains('show')) {
//       modal.classList.remove('show');
//       document.body.style.overflow = 'auto';
//     }
//   });
// });


// init();
// animate();

const modal = document.getElementById('aboutModal');
const aboutBtn = document.querySelector('a[href="#about"]');
const closeBtn = document.querySelector('.close');

// Open modal when About Me button is clicked
aboutBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get button position for animation origin
  const buttonRect = e.target.getBoundingClientRect();
  const modalContent = document.querySelector('.modal-content');

  // Set transform origin for the pop animation
  modalContent.style.transformOrigin = `bottom ${buttonRect.any}px`;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});