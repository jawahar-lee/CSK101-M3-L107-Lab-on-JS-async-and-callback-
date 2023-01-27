const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout()
function getCookies() {
  setTimeout(() => {
    let output = '';
    cookies.forEach((cookie) => {
      output += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//Progression 3: Create a function to creat cookies

function createCookie(newCookie, callCreate) {
  setTimeout(() => {
    cookies.push(newCookie);
    callCreate();
  }, 2000);
}

// Progression 5: calling function
createCookie(newCookie, getCookies);
