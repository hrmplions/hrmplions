const mapUrl = 'maps.google.com/maps?daddr=32.950362,-105.844607&amp;ll=';

function mapsSelector() {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf('iPhone') != -1 ||
    navigator.platform.indexOf('iPad') != -1 ||
    navigator.platform.indexOf('iPod') != -1
  )
    window.open('maps://' + mapUrl);
  /* else use Google */ else window.open('https://' + mapUrl);
}

const festivalDiv = document.getElementById('next-festival');

function nextFestival() {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();

  // Find the next second full weekend in June
  for (y = currentYear; y <= currentYear + 1; y++) {
    for (i = 1; i < 14; i++) {
      var nextCherryFest = new Date(y, 5, i);
      if (nextCherryFest.getDay() === 6) {
        nextCherryFest.setDate(nextCherryFest.getDate() + 7);
        break;
      }
    }
    let festivalEnd = new Date(y, 5, nextCherryFest.getDate() + 1);
    if (festivalEnd > myDate) break;
  }

  // Find the next fourth full weekend in September
  for (y = currentYear; y <= currentYear + 1; y++) {
    for (i = 1; i < 21; i++) {
      var nextAppleFest = new Date(y, 8, i);
      if (nextAppleFest.getDay() === 6) {
        nextAppleFest.setDate(nextAppleFest.getDate() + 21);
        break;
      }
    }
    let festivalEnd = new Date(y, 8, nextAppleFest.getDate() + 1);
    if (festivalEnd > myDate) break;
  }

  // If the apple festival is next
  if (nextCherryFest > nextAppleFest)
    festivalDiv.innerHTML =
      'Apple Festival: Sept ' +
      nextAppleFest.getDate() +
      '-' +
      (nextAppleFest.getDate() + 1) +
      ', ' +
      nextAppleFest.getFullYear();
  // Otherwise the cherry festival is next
  else
    festivalDiv.innerHTML =
      'Cherry Festival: Jun ' +
      nextCherryFest.getDate() +
      '-' +
      (nextCherryFest.getDate() + 1) +
      ', ' +
      nextCherryFest.getFullYear();
}

nextFestival();
