import { Driver, Person } from "./person_types";

export function handleScheduleRide(driver: Person) {

    const message = `נסיעה של ${driver.first_name} ${driver.last_name} 
    מ${driver.address} 
    ל${driver.destination_address}
    ב ${driver.date} שעה: ${driver.time}
    נסגרה`;
    
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    modal.setAttribute('dir', 'rtl');
  
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  modal.innerHTML = message;
  modal.appendChild(closeButton);

  document.body.appendChild(modal);
}