(function() {
  loadFromWebsiteDaft();
})();

const SELECTORS = {
  daft: '#daft-total',
  myhome: '#myhome-total'
}

async function loadFromWebsiteDaft(){
  const daftResponse = await fetch('./data/daft.json');
  const daftData = await daftResponse.json();

  document.querySelector(SELECTORS.daft).innerHTML = daftData.length;
}