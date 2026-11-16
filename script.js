const cases = {
  myntra: {
    kicker: 'Myntra HackerRamp 2026 · Top 5 finalist', title: 'Reel-to-Cart',
    summary: 'A product strategy for helping shoppers move from short-form inspiration to confident purchase.',
    stats: [['10K+', 'sessions analyzed'], ['75%+', 'cart abandonment'], ['18%', 'simulated conversion lift']],
    body: `<h3>The opportunity</h3><p>Session analysis surfaced a large gap between product discovery and purchase. The work estimated ₹75L+ in potential revenue leakage and used that evidence to focus the product conversation.</p><h3>The product direction</h3><p>MynLens turns a fashion Reel into a personalized, shoppable cart. A video and vision pipeline identifies garments, audio cues, text overlays, and style signals, then matches products to Myntra’s catalog and the shopper’s profile.</p><h3>Prototype film</h3><div class="reel-film-grid"><div class="reel-film"><div class="reel-film-label">01 · MYNLENS DEMO</div><iframe title="MynLens demo" src="https://drive.google.com/file/d/1u01HY8ynZT72AyUvMCcrLBIAkP3cNx_E/preview" loading="lazy"></iframe></div><div class="reel-film"><div class="reel-film-label">02 · MYNTRA IMAGE SEARCH</div><iframe title="Myntra image search demo" src="https://drive.google.com/file/d/1__Uv1AHY3qdNKNGuqpYKmzLcYt_sOl1p/preview" loading="lazy"></iframe></div></div><h3>Expected impact</h3><p>The team projected a 2–2.5× increase in social-to-cart conversion and ₹516–702 Cr in annual incremental GMV. These are modeled estimates from the hackathon deck, not measured launch results.</p>`,
    actions: [{label:'Open MynLens slides', href:'assets/mynlens-slides.pptx'},{label:'Open demo video', href:'https://drive.google.com/file/d/1u01HY8ynZT72AyUvMCcrLBIAkP3cNx_E/view'},{label:'Open image search video', href:'https://drive.google.com/file/d/1__Uv1AHY3qdNKNGuqpYKmzLcYt_sOl1p/view'}]
  },
  sharechat: {
    kicker: 'Product strategy & prototype lead · Oct–Nov 2026', title: 'ShareChat Circles',
    summary: 'A hyperlocal video community designed to help young people find belonging in a new city without compromising safety.',
    stats: [['15', 'student interviews'], ['18% → 40%', 'female participation'], ['47%', '7-day return rate']],
    body: `<h3>The problem</h3><p>Interviews across Tier-2 Indian hubs pointed to isolation, low trust, and a lack of local context in mainstream social experiences.</p><h3>The product direction</h3><p>We shaped a “digital nukkad” around city-based Circles, short video introductions, and peer discovery. The “Zero Stranger DMs” safety architecture made the experience more approachable for women.</p><h3>What we learned</h3><p>Across three prototype versions and 32 target-student usability sessions, Circle discovery reached an 84% completion rate, with 3.2 meaningful replies per intro post.</p><div class="prototype-stage sharechat-film-stage"><div class="prototype-toolbar"><span><i></i>Recorded prototype walkthrough</span><span>Apne Sheher, Apne Log</span></div><video class="sharechat-film" src="assets/sharechat-circles-walkthrough.mp4" controls playsinline preload="metadata" aria-label="Recorded ShareChat Circles prototype walkthrough"></video></div><p class="demo-invite">Want to explore the full flow yourself? Open the live prototype below.</p>`,
    actions: [{label:'Open live demo', href:'https://apnon-ka-sheher.lovable.app/'},{label:'Open slides', href:'assets/sharechat-circles-slides.pdf'},{label:'GitHub project', href:'https://github.com/users/samridhigaur10-spec/projects/1'}]
  },
  airline: {
    kicker: 'Engineering optimization · Group 37 · BITS Pilani', title: 'Airline Revenue Optimization',
    summary: 'A multi-layer model for allocating perishable seats while balancing demand, queue load, and overbooking risk.',
    stats: [['7%', 'simulated revenue lift'], ['20%', 'inefficiency reduction'], ['4×', 'high-fare speedup']],
    body: `<h3>The model</h3><p>The project extended a baseline linear program with stochastic Poisson demand, M/M/1 queueing, Markov Decision Process admission control, priority processing, and cancellation/no-show probabilities.</p><h3>The result</h3><p>The overbooking scenario increased simulated revenue from $13,000 to $15,700 while expected boarders remained near capacity. Priority processing reduced high-fare confirmation wait time from about 8 minutes to 2 minutes, with the total system load preserved.</p><h3>Why it matters for product</h3><p>This project sharpened my comfort with constrained decisions, opportunity cost, and the difference between a static answer and a policy that adapts as the state changes.</p><div class="product-lab airline-lab"><div class="lab-heading"><div><span class="lab-kicker">Interactive playground</span><h3>Test the booking policy</h3></div><span class="lab-status"><i></i>Live model</span></div><div class="airline-grid"><div class="lab-controls"><label for="capacity-range">Seat capacity <output data-airline-capacity>100</output></label><input id="capacity-range" data-airline-input="capacity" type="range" min="60" max="160" value="100"><label for="high-demand-range">High-fare demand <output data-airline-high-demand>30</output></label><input id="high-demand-range" data-airline-input="highDemand" type="range" min="10" max="60" value="30"><label for="low-demand-range">Low-fare demand <output data-airline-low-demand>90</output></label><input id="low-demand-range" data-airline-input="lowDemand" type="range" min="20" max="120" value="90"><label class="toggle-line"><input data-airline-input="priority" type="checkbox" checked><span>Protect high-fare seats first</span></label></div><div class="airline-result"><div class="result-top"><span>Projected revenue</span><strong data-airline-revenue>$13,000</strong></div><div class="allocation-track" aria-label="Seat allocation"><span class="seat-segment seat-segment--high" data-airline-high-bar></span><span class="seat-segment seat-segment--low" data-airline-low-bar></span></div><div class="allocation-legend"><span><i class="legend-dot legend-dot--high"></i>High fare <b data-airline-high-allocation>30</b></span><span><i class="legend-dot legend-dot--low"></i>Low fare <b data-airline-low-allocation>70</b></span></div><p class="airline-note" data-airline-note>With 100 seats, the model protects high-fare demand and uses the remaining capacity for lower fares.</p></div></div></div>`,
    actions: [{label:'Open paper', href:'assets/airline-seat-allocation-paper.pdf'},{label:'Open slides', href:'assets/airline-seat-allocation-slides.pptx'}]
  },
  campusflow: {
    kicker: 'Campus mobility · BITS Hyderabad', title: 'CampusFlow',
    summary: 'An AI-assisted campus mobility platform that helps students choose reliable routes when transit information goes stale.',
    stats: [['25', 'student responses'], ['115 sec', 'route decisions'], ['87.5%', 'journey completion']],
    body: `<h3>The problem</h3><p>Student research showed that stale transit information was behind 84% of route failures. I used 25 student responses to define the product opportunity and roadmap.</p><h3>The product</h3><p>CampusFlow is a mobile-first mobility platform with live routes and fallback options. Its time-decayed evidence engine weighs how recent route information is, helping students make a route decision without relying on hardware GPS.</p><h3>What I evaluated</h3><p>Across 24 journeys, route decisions took 115 seconds and 87.5% of journeys were completed. The project board has the discovery, roadmap, and implementation details.</p>`,
    actions: [{label:'Open interactive prototype', href:'assets/campusflow-prototype.html'},{label:'Open CampusFlow project board', href:'https://github.com/users/samridhigaur10-spec/projects/1'}]
  },
};

const dialog = document.querySelector('.case-dialog');
const closeButton = document.querySelector('.dialog-close');
const seatMap = document.querySelector('#cover-seat-map');
if (seatMap) {
  Array.from({ length: 48 }, (_, index) => {
    const seat = document.createElement('i');
    seat.className = `mini-seat ${index < 12 ? 'mini-seat--premium' : 'mini-seat--standard'}${index % 7 === 2 ? ' mini-seat--open' : ''}`;
    seatMap.append(seat);
  });
}
const openCase = (key) => {
  const item = cases[key];
  if (!item) return;
  document.querySelector('#case-kicker').textContent = item.kicker;
  document.querySelector('#case-title').textContent = item.title;
  document.querySelector('#case-summary').textContent = item.summary;
  document.querySelector('#case-stats').innerHTML = item.stats.map(([value, label]) => `<div class="case-stat"><strong>${value}</strong><span>${label}</span></div>`).join('');
  document.querySelector('#case-body').innerHTML = item.body;
  document.querySelector('#case-actions').innerHTML = item.actions.map(action => `<a href="${action.href}" target="_blank" rel="noreferrer">${action.label} ↗</a>`).join('');
  setupCaseInteractions();
  dialog.showModal();
};

function setupCaseInteractions() {
  const airline = document.querySelector('.airline-lab');
  if (airline) {
    const state = { capacity: 100, highDemand: 30, lowDemand: 90, priority: true };
    const inputs = airline.querySelectorAll('[data-airline-input]');
    const renderAirline = () => {
      inputs.forEach(input => { if (input.type === 'checkbox') state[input.dataset.airlineInput] = input.checked; else state[input.dataset.airlineInput] = Number(input.value); });
      const high = state.priority ? Math.min(state.highDemand, state.capacity) : Math.min(state.highDemand, Math.floor(state.capacity * .5));
      const low = Math.min(state.lowDemand, Math.max(0, state.capacity - high));
      const revenue = high * 200 + low * 100;
      airline.querySelector('[data-airline-capacity]').value = state.capacity;
      airline.querySelector('[data-airline-high-demand]').value = state.highDemand;
      airline.querySelector('[data-airline-low-demand]').value = state.lowDemand;
      airline.querySelector('[data-airline-high-allocation]').textContent = high;
      airline.querySelector('[data-airline-low-allocation]').textContent = low;
      airline.querySelector('[data-airline-revenue]').textContent = `$${revenue.toLocaleString()}`;
      airline.querySelector('[data-airline-high-bar]').style.width = `${(high / state.capacity) * 100}%`;
      airline.querySelector('[data-airline-low-bar]').style.width = `${(low / state.capacity) * 100}%`;
      airline.querySelector('[data-airline-note]').textContent = state.priority ? `With ${state.capacity} seats, the model protects high-fare demand and uses the remaining capacity for lower fares.` : `Without priority protection, the policy reserves only half the inventory for high-fare demand before filling lower-fare seats.`;
    };
    inputs.forEach(input => input.addEventListener('input', renderAirline));
    renderAirline();
  }
  const sharechat = document.querySelector('.sharechat-lab');
  if (sharechat) {
    const tabs = sharechat.querySelectorAll('[data-share-tab]');
    const screens = sharechat.querySelectorAll('[data-share-screen]');
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const target = tab.dataset.shareTab;
      tabs.forEach(item => item.classList.toggle('is-active', item === tab));
      screens.forEach(screen => { screen.hidden = screen.dataset.shareScreen !== target; });
    }));
  }
}

document.querySelectorAll('[data-case]').forEach(card => card.addEventListener('click', (event) => {
  if (event.target.closest('button')) openCase(card.dataset.case);
}));
document.querySelectorAll('[data-open-case]').forEach(card => card.addEventListener('click', (event) => {
  if (event.target.closest('video')) return;
  event.preventDefault();
  openCase(card.dataset.openCase);
}));
document.querySelectorAll('.hero-product[data-open-case]').forEach(card => card.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openCase(card.dataset.openCase); }
}));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
