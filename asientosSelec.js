const seatMap = document.getElementById('seat-map');
const selectedSeatsDisplay = document.getElementById('selected-seats');

const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const cols = 10;
const occupiedSeats = ['B3', 'C5', 'D7'];

let selectedSeats = [];

rows.forEach(row => {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  const label = document.createElement('div');
  label.classList.add('row-label');
  label.textContent = row;
  rowDiv.appendChild(label);

  for (let i = 1; i <= cols; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    const seatId = `${row}${i}`;
    seat.dataset.seatId = seatId;

    if (occupiedSeats.includes(seatId)) {
      seat.classList.add('occupied');
    } else {
      seat.classList.add('available');
      seat.addEventListener('click', () => toggleSeat(seat, seatId));
    }

    rowDiv.appendChild(seat);
  }

  seatMap.appendChild(rowDiv);
});

function toggleSeat(seatElement, seatId) {
  const index = selectedSeats.indexOf(seatId);

  if (index >= 0) {
    selectedSeats.splice(index, 1);
    seatElement.classList.remove('selected');
  } else {
    selectedSeats.push(seatId);
    seatElement.classList.add('selected');
  }

  updateSelectedSeats();
}

function updateSelectedSeats() {
  if (selectedSeats.length === 0) {
    selectedSeatsDisplay.textContent = "Asientos seleccionados: ninguno";
  } else {
    selectedSeatsDisplay.textContent = `Asientos seleccionados: ${selectedSeats.join(', ')}`;
  }
}
