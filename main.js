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
  console.log(day);
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
