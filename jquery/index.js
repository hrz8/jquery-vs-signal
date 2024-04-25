import './node_modules/jquery/dist/jquery.js';

const price = 4600;
const initialQty = 0;

$('#price').text(price);
$('#qty').text(initialQty);
$('#grand-total').text(price * initialQty);

const getCurrentQty = () => {
  const _current = $('#qty').text();
  const current = Number(_current);

  return current;
}

const getGrandTotal = () => {
  return getCurrentQty() * price;
}

$('#minus').on('click', function() {
  const current = getCurrentQty();
  $('#qty').text(current - 1);
  const grand = getGrandTotal();
  $('#grand-total').text(grand);
});

$('#plus').on('click', function() {
  const current = getCurrentQty();
  $('#qty').text(current + 1);
  const grand = getGrandTotal();
  $('#grand-total').text(grand);
});
