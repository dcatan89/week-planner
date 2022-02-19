var data = {
  view: 'Monday',
  entries: []
};
var $addEntryClick = document.querySelector('.add-button');
var $entryForm = document.querySelector('#entry-form');

function handleViewSwap(event) {
  $entryForm.classList.remove('hidden');
}

$addEntryClick.addEventListener('click', handleViewSwap);

/* Submit Form Function */
var $submitButton = document.querySelector('.submitButton');

function submitHandle(event) {
  event.preventDefault();
  var day = $entryForm.elements.dayOfTheWeek;
  var time = $entryForm.elements.time.value;
  var description = $entryForm.elements.notes.value;
  var entryValues = {
    day: day,
    time: time,
    description: description
  };
  data.entries.unshift(entryValues);
  $entryForm.reset();
  $entryForm.classList.add('hidden');
}
$submitButton.addEventListener('submit', submitHandle);

var $weekday = document.querySelector('.wDay');
var $daysBox = document.querySelector('.days');
var $h4 = document.querySelectorAll('h4');

function dayEntryHandle(event) {
  for (var i = 0; i < $daysBox.length; i++) {
    if (event.target.getAttribute('data-day') === $h4[i].textContent) {
      $weekday.textContent = event.target.getAttribute('data-day');
    }
  }
}

$daysBox.addEventListener('click', dayEntryHandle);
