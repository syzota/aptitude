/* ============================================================
   app.js — Tes Minat Karier UPA BK UNMUL
   ============================================================
   Struktur:
     1. DATA      — SECTIONS & COMBO_NAMES
     2. STATE     — variabel aktif
     3. UI        — fungsi render & display
     4. LOGIC     — event handlers & kalkulasi
   ============================================================ */


/* ================================================================
   1. DATA
   ================================================================ */

const SECTIONS = [
  {
    key: 'R', name: 'Realistic', label: 'Bagian A', color: '#e8534c',
    questions: [
      'Memperbaiki mesin atau peralatan elektronik',
      'Merakit model atau membuat kerajinan tangan',
      'Bekerja di luar ruangan (lapangan, kebun, konstruksi)',
      'Mengoperasikan alat berat, komputer, atau mesin industri',
      'Membangun atau merenovasi furnitur',
      'Berkebun, bercocok tanam, atau memelihara hewan',
      'Menggambar teknik atau membaca cetak biru',
      'Menyetir kendaraan atau mengendarai alat transportasi',
      'Bekerja dengan peralatan listrik atau perkakas tangan',
      'Memecahkan masalah teknis secara praktis',
    ],
    desc: 'Kamu suka pekerjaan yang konkret, nyata, dan praktis. Kamu lebih nyaman bekerja dengan alat, mesin, atau di lingkungan fisik daripada berinteraksi intensif dengan orang atau ide abstrak.',
    careers: ['Teknik Sipil', 'Teknik Mesin', 'Pertanian', 'Arsitektur', 'Elektronika', 'Pilot / Transportasi'],
  },
  {
    key: 'I', name: 'Investigative', label: 'Bagian B', color: '#4c8eb5',
    questions: [
      'Melakukan eksperimen di laboratorium',
      'Mempelajari teori ilmiah (fisika, biologi, kimia)',
      'Menganalisis data atau statistik',
      'Meneliti penyebab suatu masalah secara mendalam',
      'Membaca jurnal ilmiah atau buku pengetahuan',
      'Memecahkan teka-teki matematika atau logika',
      'Mengamati fenomena alam (bintang, cuaca, hewan)',
      'Merancang percobaan untuk menguji hipotesis',
      'Bekerja dengan komputer untuk pemrograman atau analisis',
      'Mencari tahu bagaimana sesuatu bekerja',
    ],
    desc: 'Kamu memiliki rasa ingin tahu yang tinggi dan senang berpikir analitis. Kamu menikmati eksplorasi ide, memecahkan masalah kompleks, dan mengungkap pola tersembunyi dalam data.',
    careers: ['Kedokteran', 'Biologi / Kimia', 'Data Science', 'Psikologi Riset', 'Fisika', 'Farmasi'],
  },
  {
    key: 'A', name: 'Artistic', label: 'Bagian C', color: '#c26db5',
    questions: [
      'Melukis, menggambar, atau membuat ilustrasi',
      'Menulis cerita, puisi, atau artikel kreatif',
      'Bermain musik, bernyanyi, atau menciptakan lagu',
      'Merancang pakaian, grafis, atau interior',
      'Berakting, menari, atau tampil di atas panggung',
      'Memotret atau membuat film / video',
      'Menghadiri pameran seni, konser, atau teater',
      'Mengekspresikan ide melalui karya seni',
      'Mendekorasi ruangan atau membuat kerajinan artistik',
      'Mengembangkan konsep desain atau inovasi visual',
    ],
    desc: 'Kamu penuh kreativitas dan senang mengekspresikan diri. Kamu lebih memilih lingkungan kerja yang bebas dan fleksibel, dan kamu memiliki kepekaan estetis yang tinggi.',
    careers: ['Desain Grafis', 'Seni Rupa', 'Komunikasi Visual', 'Arsitektur', 'Jurnalistik', 'Musik / Film'],
  },
  {
    key: 'S', name: 'Social', label: 'Bagian D', color: '#4cad7a',
    questions: [
      'Mengajar atau melatih orang lain',
      'Memberikan konseling atau nasihat',
      'Bekerja sukarela untuk kegiatan sosial / kemanusiaan',
      'Merawat anak, orang tua, atau orang sakit',
      'Berkomunikasi dan bekerja sama dalam tim',
      'Membantu teman memecahkan masalah pribadi',
      'Menjadi pemimpin diskusi atau kelompok',
      'Menjadi relawan di rumah sakit, panti asuhan, dll.',
      'Melayani pelanggan atau masyarakat',
      'Menjadi pendengar yang baik bagi orang lain',
    ],
    desc: 'Kamu berorientasi pada manusia. Kamu mendapat kepuasan dari membantu, mendidik, dan merawat orang lain. Kamu empatik, ramah, dan pandai berkomunikasi.',
    careers: ['Bimbingan Konseling', 'Pendidikan / Guru', 'Psikologi Klinis', 'Keperawatan', 'Pekerjaan Sosial', 'HR / SDM'],
  },
  {
    key: 'E', name: 'Enterprising', label: 'Bagian E', color: '#e8a84c',
    questions: [
      'Memimpin rapat atau proyek kelompok',
      'Menjual produk atau mempromosikan jasa',
      'Membangun usaha sendiri (berwirausaha)',
      'Meyakinkan orang lain untuk mengikuti pendapat saya',
      'Mengambil risiko dalam bisnis atau karir',
      'Bernegosiasi untuk mencapai kesepakatan',
      'Menjadi pembicara di depan umum',
      'Merencanakan strategi pemasaran atau pengembangan',
      'Mencapai target dan bersaing untuk menjadi yang terbaik',
      'Mengelola keuangan atau sumber daya organisasi',
    ],
    desc: 'Kamu ambisius dan suka memimpin. Kamu nyaman dengan persuasi, negosiasi, dan pengambilan keputusan. Kamu berorientasi pada hasil dan senang berada di posisi berpengaruh.',
    careers: ['Manajemen Bisnis', 'Marketing / Pemasaran', 'Hukum', 'Wirausaha', 'Politik / Pemerintahan', 'Public Relations'],
  },
  {
    key: 'C', name: 'Conventional', label: 'Bagian F', color: '#7a6bb5',
    questions: [
      'Mengatur dan menyimpan dokumen dengan rapi',
      'Memeriksa data untuk memastikan keakuratan',
      'Mengelola jadwal, agenda, atau arsip',
      'Bekerja dengan angka, laporan, atau spreadsheet',
      'Menyusun laporan sesuai prosedur',
      'Mengoperasikan perangkat lunak administrasi',
      'Menjaga kerapian dan keteraturan tempat kerja',
      'Mengikuti instruksi secara sistematis',
      'Menyelesaikan tugas dengan detail yang teliti',
      'Bekerja dalam lingkungan yang terstruktur dan jelas',
    ],
    desc: 'Kamu teliti, terorganisir, dan menyukai kejelasan. Kamu bekerja paling baik dalam sistem yang terstruktur dengan prosedur yang jelas. Kamu handal dan dapat diandalkan.',
    careers: ['Akuntansi', 'Administrasi Bisnis', 'Perbankan', 'Sekretaris / Manajemen Perkantoran', 'Audit', 'Logistik'],
  },
];

const COMBO_NAMES = {
  RIA: 'Pemikir Praktis-Ilmiah-Kreatif',  RIS: 'Teknisi Ilmiah Berempati',
  RIE: 'Inovator Teknis Enterprising',     RIC: 'Analis Teknis Terstruktur',
  IAS: 'Ilmuwan Kreatif-Sosial',           IAE: 'Pemimpin Ilmiah Inovatif',
  IAC: 'Analis Kreatif Metodis',           ISE: 'Konselor Ilmiah Enterprising',
  ISC: 'Profesional Ilmiah Terstruktur',   IEC: 'Wirausahawan Analitis',
  AES: 'Pemimpin Kreatif Sosial',          ASE: 'Fasilitator Kreatif',
  ASC: 'Seniman Sosial Terorganisir',      AEC: 'Desainer Bisnis',
  SEC: 'Manajer Pelayanan',                SAE: 'Pemimpin Humanis',
  SAC: 'Konselor Terstruktur',             SIA: 'Peneliti Sosial Kreatif',
  ESC: 'Manajer Operasional',              EIA: 'Pemimpin Visioner Ilmiah',
  EIS: 'Konsultan Ilmiah',                 CSI: 'Profesional Terstruktur',
  CES: 'Administrator Berjiwa Sosial',     CEI: 'Analis Bisnis',
};


/* ================================================================
   2. STATE
   ================================================================ */

let userData = { nama: '', prodi: '', angkatan: '', telp: '' };
let allQuestions = [];
let answers = {};
let currentSection = 0;
const QUESTIONS_PER_PAGE = 10;


/* ================================================================
   3. UI — render helpers
   ================================================================ */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function renderAllTags() {
  const container = document.getElementById('section-tag-container');
  const tagsHTML = SECTIONS.map(sec => `
    <div class="section-tag" style="background:${sec.color}18; color:${sec.color}; display:inline-flex; align-items:center; margin: 4px; border: 1px solid ${sec.color}33;">
      <div class="section-tag-dot" style="background:${sec.color}"></div>
      ${sec.key}
    </div>
  `).join('');
  container.innerHTML = `<div style="text-align:center; margin-bottom:1.5rem;">${tagsHTML}</div>`;
}

function renderProgress() {
  const totalPages = Math.ceil(allQuestions.length / QUESTIONS_PER_PAGE);
  document.getElementById('section-label').textContent = `Halaman ${currentSection + 1}`;
  document.getElementById('progress-text').textContent = `${currentSection + 1} / ${totalPages}`;
  document.getElementById('progress-fill').style.width = `${((currentSection + 1) / totalPages) * 100}%`;

  const dotsHTML = Array.from({ length: totalPages }).map((_, i) => {
    const cls = i < currentSection ? 'done' : (i === currentSection ? 'active' : '');
    return `<div class="section-dot ${cls}"></div>`;
  }).join('');
  document.getElementById('section-dots').innerHTML = dotsHTML;
}

function renderQuestions() {
  const start = currentSection * QUESTIONS_PER_PAGE;
  const pageQuestions = allQuestions.slice(start, start + QUESTIONS_PER_PAGE);

  const html = pageQuestions.map((q, idx) => {
    const globalIdx = start + idx;
    const val = (answers[q.type] && answers[q.type][q.originalIndex]) || 0;
    const btns = [1, 2, 3, 4, 5].map(v =>
      `<button class="rating-btn ${val === v ? 'selected' : ''}"
               onclick="setAnswer('${q.type}', ${q.originalIndex}, ${v}, this)">${v}</button>`
    ).join('');

    return `
      <div class="question-card">
        <div class="question-num">Pernyataan ${globalIdx + 1} dari ${allQuestions.length}</div>
        <div class="question-text">${q.text}</div>
        <div class="rating-row">
          <span class="rating-label">Tidak Tertarik</span>
          <div class="rating-buttons">${btns}</div>
          <span class="rating-label right">Sangat Tertarik</span>
        </div>
      </div>`;
  }).join('');

  document.getElementById('questions-container').innerHTML = html;
}

function updateAnsweredCount() {
  let totalDone = 0;
  Object.values(answers).forEach(typeObj => { totalDone += Object.keys(typeObj).length; });
  document.getElementById('answered-count').textContent = `${totalDone} / ${allQuestions.length} dijawab`;

  const start = currentSection * QUESTIONS_PER_PAGE;
  const pageQuestions = allQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  const isPageComplete = pageQuestions.every(q => answers[q.type] && answers[q.type][q.originalIndex] !== undefined);
  document.getElementById('btn-next').disabled = !isPageComplete;
}

function renderSection() {
  renderAllTags();
  renderProgress();
  renderQuestions();
  updateAnsweredCount();

  document.getElementById('btn-back').style.visibility = currentSection === 0 ? 'hidden' : 'visible';
  const totalPages = Math.ceil(allQuestions.length / QUESTIONS_PER_PAGE);
  document.getElementById('btn-next').textContent = currentSection === totalPages - 1 ? 'Lihat Hasil →' : 'Lanjut →';
}

function renderResult(scores, sorted, top3, code, comboName) {
  // --- User info header (untuk print) ---
  const userInfoContainer = document.getElementById('user-info-display');
  if (userInfoContainer) {
    userInfoContainer.innerHTML = `
      <div class="print-header" style="text-align:left; border-bottom:2px solid #333; padding-bottom:10px; margin-bottom:20px;">
        <h2 style="margin-bottom:10px;">Laporan Hasil Tes Minat Karier</h2>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr>
            <td style="width:130px; padding:4px 0;"><strong>Nama Lengkap</strong></td>
            <td style="padding:4px 0;">: ${userData.nama}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;"><strong>Program Studi</strong></td>
            <td style="padding:4px 0;">: ${userData.prodi}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;"><strong>Angkatan / NIM</strong></td>
            <td style="padding:4px 0;">: ${userData.angkatan}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;"><strong>Nomor Telepon</strong></td>
            <td style="padding:4px 0;">: ${userData.telp}</td>
          </tr>
          <tr>
            <td style="padding:4px 0;"><strong>Tanggal Tes</strong></td>
            <td style="padding:4px 0;">: ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
          </tr>
        </table>
      </div>`;
  }

  document.getElementById('result-code').textContent = code;
  document.getElementById('result-title').textContent = comboName;

  // --- Score grid ---
  const gridHTML = sorted.map(([key, score]) => {
    const sec = SECTIONS.find(s => s.key === key);
    return `
      <div class="score-card" data-type="${key}">
        <div class="score-letter">${key}</div>
        <div class="score-name">${sec.name}</div>
        <div class="score-bar-wrap">
          <div class="score-bar" style="width:0%" id="bar-${key}"></div>
        </div>
        <span class="score-value">${score}</span><span class="score-max"> / 50</span>
      </div>`;
  }).join('');
  document.getElementById('score-grid').innerHTML = gridHTML;

  // --- Description cards (top 3) ---
  const descHTML = top3.map(key => {
    const sec = SECTIONS.find(s => s.key === key);
    const careers = sec.careers.map(c => `<span class="career-tag">${c}</span>`).join('');
    return `
      <div class="result-desc-card">
        <h3>Tipe ${key} – ${sec.name}</h3>
        <p>${sec.desc}</p>
        <div class="career-tags">
          <strong>Saran Karier:</strong><br>
          ${careers}
        </div>
      </div>`;
  }).join('');
  document.getElementById('result-desc-cards').innerHTML = descHTML;

  // Animate score bars after paint
  setTimeout(() => {
    sorted.forEach(([key, score]) => {
      const bar = document.getElementById(`bar-${key}`);
      if (bar) bar.style.width = `${(score / 50) * 100}%`;
    });
  }, 150);
}


/* ================================================================
   4. LOGIC — event handlers & kalkulasi
   ================================================================ */

function goToForm() {
  showScreen('screen-form');
}

function validateForm() {
  const nama     = document.getElementById('user-nama').value.trim();
  const prodi    = document.getElementById('user-prodi').value.trim();
  const angkatan = document.getElementById('user-angkatan').value.trim();
  const telp     = document.getElementById('user-telp').value.trim();

  if (!nama || !prodi || !angkatan || !telp) {
    alert('Mohon lengkapi semua data diri sebelum memulai.');
    return;
  }

  userData = { nama, prodi, angkatan, telp };
  startTest();
}

function calcScores() {
  const scores = {};
  SECTIONS.forEach(sec => {
    const ans = answers[sec.key] || {};
    scores[sec.key] = Object.values(ans).reduce((a, b) => a + b, 0);
  });
  return scores;
}

function setAnswer(secKey, qi, val, btn) {
  if (!answers[secKey]) answers[secKey] = {};
  answers[secKey][qi] = val;
  const parent = btn.parentElement;
  parent.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  updateAnsweredCount();
}

function startTest() {
  allQuestions = [];
  SECTIONS.forEach(sec => {
    sec.questions.forEach((qText, i) => {
      allQuestions.push({ text: qText, type: sec.key, originalIndex: i });
    });
  });

  // Acak urutan soal (Fisher-Yates shuffle)
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  currentSection = 0;
  answers = {};
  renderSection();
  showScreen('screen-test');
}

function nextSection() {
  const totalPages = Math.ceil(allQuestions.length / QUESTIONS_PER_PAGE);
  if (currentSection < totalPages - 1) {
    currentSection++;
    renderSection();
    window.scrollTo(0, 0);
  } else {
    showResult();
  }
}

function prevSection() {
  if (currentSection > 0) {
    currentSection--;
    renderSection();
    window.scrollTo(0, 0);
  }
}

function showResult() {
  const scores    = calcScores();
  const sorted    = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const top3      = sorted.slice(0, 3).map(([k]) => k);
  const code      = top3.join('');
  const comboName = COMBO_NAMES[code] || COMBO_NAMES[top3.slice().sort().join('')] || 'Profil Unik';

  renderResult(scores, sorted, top3, code, comboName);
  showScreen('screen-result');
}

function scrollToTypes() {
  document.getElementById('types-section').scrollIntoView({ behavior: 'smooth' });
}

function goHome() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-landing').classList.add('active');
}
