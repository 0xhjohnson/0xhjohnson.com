(function() {
  var storageKey = 'darkMode';
  var classNameDark = 'dark';
  var classNameLight = 'light';

  function setClassOnDocumentHTML(darkMode) {
    document.querySelector('html').classList.add(darkMode ? classNameDark : classNameLight);
    document.querySelector('html').classList.remove(darkMode ? classNameLight : classNameDark);
  }
  
  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
  var localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentHTML(localStorageTheme);
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentHTML(mql.matches);
    localStorage.setItem(storageKey, mql.matches);
  } else {
    // source of truth from html document
    var isDarkMode = document.querySelector('html').classList.contains(classNameDark);
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
  }
})();
