/**
 * Imtihon va Test Tahlili Platformasi
 * Pure Vanilla JavaScript Module Application
 */

// 1. Initial Default Sample Test Pool
const DEFAULT_SAMPLE_TEST = {
  id: "default-sample-test-id",
  name: "Namunaviy Test (Tarix, Geografiya, AT)",
  isSystem: true,
  questions: [
    {
      number: 1,
      text: "Amir Temur nechanchi yilda tavallud topgan?",
      options: [
        { letter: "A", text: "1336-yil 9-aprelda" },
        { letter: "B", text: "1342-yil 12-fevralda" },
        { letter: "C", text: "1405-yil 18-fevralda" },
        { letter: "D", text: "1380-yil 1-avgustda" }
      ],
      correctKey: "A",
      explanation: "Buyuk sarkarda va davlat arbobi Amir Temur 1336-yil 9-aprelda Kesh (hozirgi Shahrisabz) yaqinidagi Xoja Ilg'or qishlog'ida tug'ilgan."
    },
    {
      number: 2,
      text: "Dunyodagi eng chuqur ko'l qaysi?",
      options: [
        { letter: "A", text: "Kaspiy dengiz-ko'li" },
        { letter: "B", text: "Viktoriya ko'li" },
        { letter: "C", text: "Baykal ko'li" },
        { letter: "D", text: "Tanganika ko'li" }
      ],
      correctKey: "C",
      explanation: "Baykal sharqiy Sibirda joylashgan bo'lib, dunyoning eng chuqur ko'li (1642 metr) va eng yirik chuchuk suv zaxiralaridan biridir."
    },
    {
      number: 3,
      text: "Qaysi tarmoq protokoli veb-sahifalarni xavfsiz shifrlangan holatda yuklash uchun ishlatiladi?",
      options: [
        { letter: "A", text: "HTTP" },
        { letter: "B", text: "FTP" },
        { letter: "C", text: "HTTPS" },
        { letter: "D", text: "SMTP" }
      ],
      correctKey: "C",
      explanation: "HTTPS (Hypertext Transfer Protocol Secure) protokoli TLS/SSL shifrlash protokollari orqali xavfsizlik va maxfiylikni ta'minlaydi."
    },
    {
      number: 4,
      text: "Alisher Navoiy nechanchi yilda G'azal mulkining sultoni sifatida dunyoga kelgan?",
      options: [
        { letter: "A", text: "1441-yil 9-fevralda" },
        { letter: "B", text: "1452-yil 1-mayda" },
        { letter: "C", text: "1501-yil 3-yanvarda" },
        { letter: "D", text: "1438-yil 30-dekabrda" }
      ],
      correctKey: "A",
      explanation: "Mutafakkir shoir Alisher Navoiy 1441-yil 9-fevralda Hirot shahrida tavallud topgan."
    },
    {
      number: 5,
      text: "Yer yuzida nechta materik (qit'a) mavjud?",
      options: [
        { letter: "A", text: "5 ta" },
        { letter: "B", text: "6 ta" },
        { letter: "C", text: "7 ta" },
        { letter: "D", text: "4 ta" }
      ],
      correctKey: "B",
      explanation: "Yer sharida 6 ta materik mavjud: Yevrosiyo, Afrika, Shimoliy Amerika, Janubiy Amerika, Antarktida, Avstraliya."
    },
    {
      number: 6,
      text: "JavaScript tilida o'zgaruvchilarni qaysi kalit so'z yordamida qayta e'lon qilib bo'lmaydigan va o'zgarmas qilib yaratish mumkin?",
      options: [
        { letter: "A", text: "var" },
        { letter: "B", text: "let" },
        { letter: "C", text: "const" },
        { letter: "D", text: "def" }
      ],
      correctKey: "C",
      explanation: "const kalit so'zi o'zgarmas qiymatlar (constants) uchun ishlatiladi, ularning qiymatlarini qayta bog'lab yoki o'zgartirib bo'lmaydi."
    },
    {
      number: 7,
      text: "G'arbiy Yevropadagi eng baland tog' cho'qqisi qaysi?",
      options: [
        { letter: "A", text: "Monblan (Mont Blanc)" },
        { letter: "B", text: "Elbrus" },
        { letter: "C", text: "Matterhorn" },
        { letter: "D", text: "Kilimanjaro" }
      ],
      correctKey: "A",
      explanation: "Alp tog'larida joylashgan Monblan cho'qqisi 4810 metr balandlik bilan G'arbiy Yevropadagi eng baland nuqtadir."
    },
    {
      number: 8,
      text: "O'zbekiston Respublikasining Konstitutsiyasi birinchi marta qaysi yilda qabul qilingan?",
      options: [
        { letter: "A", text: "1991-yil 31-avgustda" },
        { letter: "B", text: "1992-yil 8-dekabrda" },
        { letter: "C", text: "1993-yil 1-sentyabrda" },
        { letter: "D", text: "1990-yil 20-iyunda" }
      ],
      correctKey: "B",
      explanation: "Mustaqil O'zbekiston Respublikasining ilk Konstitutsiyasi 1992-yil 8-dekabrda parlament tomonidan qabul qilingan."
    },
    {
      number: 9,
      text: "Python tilida ro'yxatning (list) oxiriga yangi element qo'shish uchun qaysi metod ishlatiladi?",
      options: [
        { letter: "A", text: "add()" },
        { letter: "B", text: "push()" },
        { letter: "C", text: "append()" },
        { letter: "D", text: "insert()" }
      ],
      correctKey: "C",
      explanation: "Python listlarida oxiriga element qo'shish uchun .append() metodi qo'llaniladi."
    },
    {
      number: 10,
      text: "Dunyoga mashhur bo'lgan 'Nil' daryosi qaysi materik hududidan oqib o'tadi?",
      options: [
        { letter: "A", text: "Osiyo" },
        { letter: "B", text: "Amerika" },
        { letter: "C", text: "Afrika" },
        { letter: "D", text: "Avstraliya" }
      ],
      correctKey: "C",
      explanation: "Nil daryosi Afrika materikning shimoli-sharqiy qismida joyhazlashgan va O'rta yer daryosiga quyiladi."
    },
    {
      number: 11,
      text: "Amir Temurning hukmdorlik davridagi davlat poytaxti qaysi shahar bo'lgan?",
      options: [
        { letter: "A", text: "Buxoro" },
        { letter: "B", text: "Samarqand" },
        { letter: "C", text: "Toshkent" },
        { letter: "D", text: "Xiva" }
      ],
      correctKey: "B",
      explanation: "Amir Temur o'z imperiyasining poytaxti qilib Samarqand shahrini tanlagan va uni dunyo madaniyatining eng go'zal markaziga aylantirgan."
    },
    {
      number: 12,
      text: "SQL nima?",
      options: [
        { letter: "A", text: "Dasturlash tili turi" },
        { letter: "B", text: "Ma'lumotlar bazasini boshqarish so'rov tili" },
        { letter: "C", text: "Operatsion tizim" },
        { letter: "D", text: "Veb freymvork" }
      ],
      correctKey: "B",
      explanation: "SQL (Structured Query Language) - relyatsion ma'lumotlar bazalaridan ma'lumotlarni o'qish va boshqarish uchun mo'ljallangan maxsus so'rov tili."
    },
    {
      number: 13,
      text: "Yaponiyaning poytaxti qaysi shahar?",
      options: [
        { letter: "A", text: "Kioto" },
        { letter: "B", text: "Osaka" },
        { letter: "C", text: "Tokio" },
        { letter: "D", text: "Pekin" }
      ],
      correctKey: "C",
      explanation: "Tokio - Yaponiyaning eng yirik shahri, iqtisodiy-madaniy va rasmiy poytaxti hisoblanadi."
    },
    {
      number: 14,
      text: "Kompyuter tezkor xotirasi (RAM) nima vazifani bajaradi?",
      options: [
        { letter: "A", text: "Joriy vaqtda ishlayotgan jarayonlar ma'lumotlarini vaqtinchalik saqlash" },
        { letter: "B", text: "Fayllarni doimiy o'chmas qilib saqlash" },
        { letter: "C", text: "Grafik tasvir sifatini oshirish" },
        { letter: "D", text: "Kompyuter quvvat sarfini kamaytirish" }
      ],
      correctKey: "A",
      explanation: "Tezkor Xotira (Random Access Memory) kompyuter faol vaqtida protsessor tez ishlashi uchun zarur bo'lgan vaqtinchalik ma'lumotlarni o'zida saqlaydi."
    },
    {
      number: 15,
      text: "Avstraliyadagi eng mashhur va o'ziga xos hayvon turi qaysi?",
      options: [
        { letter: "A", text: "Panda" },
        { letter: "B", text: "Kenguru" },
        { letter: "C", text: "Lama" },
        { letter: "D", text: "Yaguar" }
      ],
      correctKey: "B",
      explanation: "Kenguru - Avstraliya qit'asining endemik xaltali hayvoni va milliy ramzlaridan biri hisoblanadi."
    }
  ]
};

// 2. Client Side Global States
let tests = [];
let activeTestId = "";
let currentReviewFilter = "all";

const STORAGE_KEYS = {
  tests: "imtihon_test_bank",
  activeTestId: "imtihon_active_test_id"
};

// Active running exam session state
let activeExam = {
  running: false,
  testId: "",
  testName: "",
  questionsPool: [],
  currentIndex: 0,
  userAnswers: {},     // { questionIndex: 'A' }
  flaggedQuestions: {}, // { questionIndex: true }
  timeRemaining: 0,    // seconds left
  totalTime: 0,        // starting seconds
  startTime: null,     // timestamp
  timerInterval: null
};

// Results data of the last quiz taken
let lastResults = null;

// 3. Persistence Helpers
function loadTestsFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.tests);
    if (raw) {
      tests = JSON.parse(raw);
    } else {
      tests = [];
      saveTestsToStorage();
    }
  } catch (err) {
    console.error("Local storage error", err);
    tests = [];
  }

  const storedActive = localStorage.getItem(STORAGE_KEYS.activeTestId);
  if (storedActive) {
    activeTestId = storedActive;
  }

  if (activeTestId && !tests.some(test => test.id === activeTestId)) {
    activeTestId = "";
  }
}

function saveTestsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.tests, JSON.stringify(tests));
    if (activeTestId) {
      localStorage.setItem(STORAGE_KEYS.activeTestId, activeTestId);
    } else {
      localStorage.removeItem(STORAGE_KEYS.activeTestId);
    }
  } catch (err) {
    console.error("Save local storage failed", err);
  }
}

// 4. TXT Custom Parser Engine
function parseTXTContent(text) {
  // normalize and split
  const lines = text.split(/\r?\n/);
  const parsedQuestions = [];
  const warnings = [];
  
  let currentQ = null;
  
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();
    if (!line) continue;
    
    // Pattern matches starting of a new question: e.g. "1. Savol text" or "1) Savol text"
    // Regex matches digit, optional space, then dot or parenthesis, optional space
    const qMatch = line.match(/^(\d+)\s*[\.\)]\s*(.*)$/);
    if (qMatch) {
      if (currentQ) {
        parsedQuestions.push(currentQ);
      }
      currentQ = {
        number: parseInt(qMatch[1], 10),
        text: qMatch[2].trim(),
        options: [],
        correctKey: "",
        explanation: "",
        sourceLine: i + 1
      };
      continue;
    }
    
    if (currentQ) {
      // Check if it's a separate option on its own line: e.g. "A) Option text"
      const optMatch = line.match(/^([A-E])\s*[\.\)]\s*(.*)$/i);
      
      if (optMatch) {
         currentQ.options.push({
           letter: optMatch[1].toUpperCase(),
           text: optMatch[2].trim()
         });
      } else {
         // Check if contains multiple inline choices inside the same line
         // E.g. "A) Apple B) Banana C) Peach D) Pear" or similar
         const inlineOptPattern = /([A-E])\s*[\.\)]\s*([^A-E\n\r]+?)(?=\s*[A-E]\s*[\.\)]|$)/gi;
         const matches = Array.from(line.matchAll(inlineOptPattern));
         
         if (matches.length > 0) {
            matches.forEach(m => {
               currentQ.options.push({
                 letter: m[1].toUpperCase(),
                 text: m[2].trim()
               });
            });
         }
         // Answer designator: e.g. "Javob: A" or "Kalit: B" or "Correct: C" or "Correct answer: C"
         else if (line.toLowerCase().startsWith("javob:") || line.toLowerCase().startsWith("kalit:") || line.toLowerCase().startsWith("correct:") || line.toLowerCase().startsWith("correct answer:")) {
            const separatorIndex = line.indexOf(":");
            const answerPart = line.substring(separatorIndex + 1).trim().toUpperCase();
            if (answerPart.length > 0) {
              currentQ.correctKey = answerPart.charAt(0);
            }
         }
         // Explanation designator: e.g. "Izoh: ..." or "Tushuntirish: ..."
         else if (line.toLowerCase().startsWith("izoh:") || line.toLowerCase().startsWith("tushuntirish:")) {
            const separatorIndex = line.indexOf(":");
            currentQ.explanation = line.substring(separatorIndex + 1).trim();
         }
         // Contiguous lines of the previous content
         else {
            if (currentQ.explanation) {
              currentQ.explanation += " " + line;
            } else if (currentQ.options.length > 0) {
              currentQ.options[currentQ.options.length - 1].text += " " + line;
            } else {
              currentQ.text += " " + line;
            }
         }
      }
    }
  }
  
  if (currentQ) {
    parsedQuestions.push(currentQ);
  }
  
  // Validation Pass for structure integrity
  parsedQuestions.forEach((q, idx) => {
    const qLabel = q.number || (idx + 1);
    
    if (!q.text || q.text.trim() === "") {
      warnings.push(`Savol #${qLabel}: Savol matni topilmadi yoki bo'sh.`);
    }
    
    if (q.options.length === 0) {
      warnings.push(`Savol #${qLabel}: Birorta ham variant (A, B, C...) aniqlanmadi.`);
    } else if (q.options.length < 2) {
      warnings.push(`Savol #${qLabel}: Variantlar soni judayam kam (${q.options.length} ta).`);
    } else if (q.options.length < 4) {
      warnings.push(`Savol #${qLabel}: Variantlar standart 4 tadan kam (${q.options.length} ta variant topildi).`);
    }
    
    if (!q.correctKey) {
      warnings.push(`Savol #${qLabel}: To'g'ri javob kaliti topilmadi (Masalan, "Javob: A" deb qo'shing).`);
    } else {
      const optionExists = q.options.some(opt => opt.letter === q.correctKey);
      if (!optionExists) {
        warnings.push(`Savol #${qLabel}: To'g'ri kalit qilib belgilangan '${q.correctKey}' varianti variantlar ro'yxatida mavjud emas.`);
      }
    }
  });
  
  return { questions: parsedQuestions, warnings };
}

// 5. DOM Element Selectors helper
const $ = (id) => document.getElementById(id);

// 6. UI Rendering & Interactions Functions
function initApp() {
  loadTestsFromStorage();
  
  // Set default active test
  if (!activeTestId && tests.length > 0) {
    activeTestId = tests[0].id;
  }
  
  setupTabListeners();
  setupParserListeners();
  setupSetupListeners();
  setupPreviewListeners();
  setupExamRoomListeners();
  setupReviewListeners();
  setupDirectTriggers();
  setupCollapsibleGuide();
  
  // Initial renders
  renderTestBankTable();
  renderSetupDropdown();
  renderPreviewDropdown();
  syncSetupSummaries();
  updateActiveTestStatistics();
}

// Tab Switches Action
function switchTab(tabId) {
  // Switch headers activation
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === tabId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  
  // Switch panels
  document.querySelectorAll(".tab-view").forEach(view => {
    if (view.id === `view-${tabId}`) {
      view.classList.add("active-view");
    } else {
      view.classList.remove("active-view");
    }
  });
}

function setupTabListeners() {
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      
      // If quiz is running, caution first when switching out of quiz
      if (activeExam.running && tabId !== "quiz") {
        if (!confirm("Diqqat! Imtihon hozir ayni vaqtda davom etmoqda. Agar boshqa sahifaga o'tsangiz, imtihon bekor qilinmaydi, ammo taymer ishlashda davom etadi. O'tishni tasdiqlaysizmi?")) {
          return;
        }
      }
      
      switchTab(tabId);
    });
  });
}

// Upload Tab (Parser & Test list table) Management
function renderTestBankTable() {
  const tbody = $("test-bank-tbody");
  tbody.innerHTML = "";
  
  if (tests.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align: center; color: var(--text-muted); padding: 24px;">
           Hozirda hech qanday test to'plami yuklanmagan. Yuklash boksidan foydalaning yoki Namunaviy test yuklang.
        </td>
      </tr>
    `;
    return;
  }
  
  tests.forEach(test => {
    const tr = document.createElement("tr");
    
    // Check if currently active in setup config
    const isActive = test.id === activeTestId;
    const activeHTML = isActive 
      ? `<span class="test-badge test-badge-user" style="background-color: var(--primary-light); color: var(--primary); font-weight: 600;">Faol tanlangan</span>`
      : "";
      
    const badgeType = test.isSystem 
      ? `<span class="test-badge test-badge-system">SISTEMA</span>`
      : `<span class="test-badge test-badge-user">YUKLANGAN</span>`;
      
    const deleteBtn = test.isSystem
      ? `<span style="font-size: 0.8rem; color: var(--text-muted);">Tizimli (o'chirib bo'lmaydi)</span>`
      : `<button class="btn btn-danger btn-sm delete-test-btn" data-id="${test.id}" style="padding: 4px 8px; font-size: 0.75rem;">O'chirish</button>`;
      
    tr.innerHTML = `
      <td>
        <div style="font-weight: 500; display: flex; align-items: center; gap: 8px;">
          ${test.name}
          ${badgeType}
        </div>
        <div style="margin-top: 4px;">${activeHTML}</div>
      </td>
      <td style="font-family: 'JetBrains Mono', monospace; font-weight: 600;">${test.questions.length} ta savol</td>
      <td style="text-align: center; display: flex; flex-direction: column; gap: 6px; align-items: center; justify-content: center; height: 100%;">
        <button class="btn btn-secondary btn-sm select-test-btn" data-id="${test.id}" style="padding: 4px 8px; font-size: 0.75rem; width: 100px;">Tanlash</button>
        ${deleteBtn}
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  // Attach select click
  tbody.querySelectorAll(".select-test-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tId = btn.getAttribute("data-id");
      activeTestId = tId;
      saveTestsToStorage();
      renderTestBankTable();
      renderSetupDropdown();
      syncSetupSummaries();
      updateActiveTestStatistics();
      alert("Test muvaffaqiyatli tanlandi! Imtihon sozlamalari panelini tekshirishingiz mumkin.");
    });
  });
  
  // Attach delete click
  tbody.querySelectorAll(".delete-test-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tId = btn.getAttribute("data-id");
      if (confirm("Ushbu test to'plamini o'chirib tashlamoqchimisiz?")) {
        tests = tests.filter(t => t.id !== tId);
        if (activeTestId === tId) {
          activeTestId = tests.length > 0 ? tests[0].id : "";
        }
        saveTestsToStorage();
        renderTestBankTable();
        renderSetupDropdown();
        syncSetupSummaries();
        updateActiveTestStatistics();
      }
    });
  });
}

function handleUploadedTXTFile(file) {
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const result = parseTXTContent(text);
    
    if (result.questions.length === 0) {
      alert("Xato! Fayldan birorta ham to'g'ri formatdagi savol tahlil qilib bo'linmadi. Iltimos, namunaviy formatga rioya qilinganligini tekshiring.");
      return;
    }
    
    // Add custom parsed test object
    const cleanName = file.name.replace(/\.[^/.]+$/, ""); // strip extension
    const newTest = {
      id: "test-" + Date.now(),
      name: cleanName + " (Tahlil)",
      isSystem: false,
      questions: result.questions
    };
    
    tests.push(newTest);
    activeTestId = newTest.id;
    saveTestsToStorage();
    
    // Show warnings if any
    const warningsPanel = $("parser-warnings");
    const warningList = $("warning-list");
    warningList.innerHTML = "";
    
    if (result.warnings.length > 0) {
      result.warnings.forEach(warn => {
        const li = document.createElement("li");
        li.textContent = warn;
        warningList.appendChild(li);
      });
      warningsPanel.style.display = "block";
    } else {
      warningsPanel.style.display = "none";
    }
    
    renderTestBankTable();
    renderSetupDropdown();
    syncSetupSummaries();
    updateActiveTestStatistics();
    
    alert(`Muvaffaqiyatli! '${newTest.name}' yuklandi. ${newTest.questions.length} ta savol aniq tahlil qilindi. ${result.warnings.length > 0 ? 'Ba\'zi ogohlantirishlar mavjud!' : 'Hech qanday ogohlantirish ruy berishmadi!'}`);
  };
  reader.readAsText(file);
}

function setupParserListeners() {
  const dropZone = $("drop-zone");
  const fileInput = $("file-input");
  
  dropZone.addEventListener("click", () => {
    fileInput.click();
  });
  
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleUploadedTXTFile(e.target.files[0]);
    }
  });
  
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  
  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });
  
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleUploadedTXTFile(e.dataTransfer.files[0]);
    }
  });
  
  // Loader system sample triggers
  $("load-sample-btn").addEventListener("click", () => {
    // Check if default test already exists, otherwise add it
    const exists = tests.some(t => t.id === DEFAULT_SAMPLE_TEST.id);
    if (!exists) {
      tests.unshift(DEFAULT_SAMPLE_TEST);
    } else {
      // Add a clean clone under a different name
      const clone = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_TEST));
      clone.id = "sample-clone-" + Date.now();
      clone.name = "Namunaviy Test (Qayta yuklangan)";
      clone.isSystem = false;
      tests.push(clone);
    }
    activeTestId = tests[tests.length - 1].id;
    saveTestsToStorage();
    renderTestBankTable();
    renderSetupDropdown();
    syncSetupSummaries();
    updateActiveTestStatistics();
    alert("Namunaviy Tarix, Geografiya va AT savollari to'plami test bankiga yuklandi va faollashtirildi!");
  });
  
  // Clear all button triggers
  $("clear-all-tests-btn").addEventListener("click", () => {
    if (confirm("Chindan ham barcha yuklangan testlarni tozalab tashlamoqchimisiz?")) {
      tests = [];
      activeTestId = "";
      saveTestsToStorage();
      renderTestBankTable();
      renderSetupDropdown();
      syncSetupSummaries();
      updateActiveTestStatistics();
      $("parser-warnings").style.display = "none";
    }
  });
}

// Setup Tab (Exam parameters configuring) Management
function renderSetupDropdown() {
  const select = $("setup-test-select");
  select.innerHTML = "";
  
  if (tests.length === 0) {
    select.innerHTML = `<option value="">-- Avval test yuklang --</option>`;
    if (typeof renderPreviewDropdown === "function") {
      renderPreviewDropdown();
    }
    return;
  }
  
  tests.forEach(test => {
    const opt = document.createElement("option");
    opt.value = test.id;
    opt.textContent = `${test.name} (${test.questions.length} ta savol)`;
    if (test.id === activeTestId) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });
  
  if (typeof renderPreviewDropdown === "function") {
    renderPreviewDropdown();
  }
}

function syncSetupSummaries() {
  const selectedTest = tests.find(t => t.id === activeTestId);
  const qRange = $("setup-q-range");
  const qNumber = $("setup-q-number");
  
  if (!selectedTest) {
    $("summary-test-name").textContent = "Tanlanmagan";
    $("summary-q-count").textContent = "0";
    qRange.max = "10";
    qRange.value = "5";
    qNumber.max = "10";
    qNumber.value = "5";
    return;
  }
  
  const totalQsLength = selectedTest.questions.length;
  
  // Update Range slider limits dynamically based on current selected test question weight
  qRange.max = totalQsLength;
  qNumber.max = totalQsLength;
  
  // clamp current selected value
  let curQVal = parseInt(qNumber.value, 10);
  if (curQVal > totalQsLength) {
    curQVal = totalQsLength;
  }
  if (curQVal < 1) curQVal = 1;
  
  qRange.value = curQVal;
  qNumber.value = curQVal;
  
  // Update quick view labels
  $("summary-test-name").textContent = selectedTest.name;
  $("summary-q-count").textContent = curQVal;
  $("summary-time-limit").textContent = $("setup-time-number").value;
  $("summary-shuffle").textContent = $("setup-shuffle-toggle").checked ? "Ha, tasodifiy tartib" : "Yo'q, ketma-ketlikda";
  
  const optionsToggle = $("setup-shuffle-options-toggle");
  if (optionsToggle) {
    $("summary-shuffle-options").textContent = optionsToggle.checked ? "Ha, tasodifiy tartib" : "Yo'q, ketma-ketlikda";
  }
}

function setupSetupListeners() {
  const select = $("setup-test-select");
  const qRange = $("setup-q-range");
  const qNumber = $("setup-q-number");
  const timeRange = $("setup-time-range");
  const timeNumber = $("setup-time-number");
  const shuffleToggle = $("setup-shuffle-toggle");
  
  select.addEventListener("change", (e) => {
    activeTestId = e.target.value;
    saveTestsToStorage();
    syncSetupSummaries();
    updateActiveTestStatistics();
  });
  
  // Question Count synchronous sliders & numbers matching
  qRange.addEventListener("input", (e) => {
    qNumber.value = e.target.value;
    syncSetupSummaries();
  });
  
  qNumber.addEventListener("input", (e) => {
    let val = parseInt(e.target.value, 10);
    const maxVal = parseInt(qRange.max, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > maxVal) val = maxVal;
    
    qRange.value = val;
    syncSetupSummaries();
  });
  
  qNumber.addEventListener("blur", (e) => {
    // on blur ensure cleaned formatting
    let val = parseInt(e.target.value, 10);
    const maxVal = parseInt(qRange.max, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > maxVal) val = maxVal;
    e.target.value = val;
  });
  
  // Presets trigger for question counts
  document.querySelectorAll("#q-count-presets .preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedTest = tests.find(t => t.id === activeTestId);
      if (!selectedTest) return;
      
      const targetMode = btn.getAttribute("data-val");
      const totalCount = selectedTest.questions.length;
      
      let finalVal = 5;
      if (targetMode === "all") {
        finalVal = totalCount;
      } else {
        finalVal = Math.min(parseInt(targetMode, 10), totalCount);
      }
      
      qRange.value = finalVal;
      qNumber.value = finalVal;
      syncSetupSummaries();
    });
  });
  
  // Time limits range and number input matching
  timeRange.addEventListener("input", (e) => {
    timeNumber.value = e.target.value;
    syncSetupSummaries();
  });
  
  timeNumber.addEventListener("input", (e) => {
    let val = parseInt(e.target.value, 10);
    const maxVal = parseInt(timeRange.max, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > maxVal) val = maxVal;
    
    timeRange.value = val;
    syncSetupSummaries();
  });
  
  // Presets trigger for Time counts
  document.querySelectorAll("#time-presets .preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mins = parseInt(btn.getAttribute("data-val"), 10);
      timeRange.value = mins;
      timeNumber.value = mins;
      syncSetupSummaries();
    });
  });
  
  shuffleToggle.addEventListener("change", () => {
    syncSetupSummaries();
  });
  
  const shuffleOptionsToggle = $("setup-shuffle-options-toggle");
  if (shuffleOptionsToggle) {
    shuffleOptionsToggle.addEventListener("change", () => {
      syncSetupSummaries();
    });
  }
}

// 7. Active Exam Room Logical Engines
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startExam() {
  const selectedTest = tests.find(t => t.id === activeTestId);
  if (!selectedTest || selectedTest.questions.length === 0) {
    alert("Iltimos, avval test to'plamini yuklang yoki tanlang!");
    switchTab("upload");
    return;
  }
  
  const questionCount = parseInt($("setup-q-number").value, 10);
  const timeLimitMinutes = parseInt($("setup-time-number").value, 10);
  const shouldShuffle = $("setup-shuffle-toggle").checked;
  const shouldShuffleOptions = $("setup-shuffle-options-toggle") ? $("setup-shuffle-options-toggle").checked : false;
  
  // Clone selected questions subset
  let rawPool = selectedTest.questions.map(q => {
    return {
      ...q,
      options: q.options.map(o => ({ ...o }))
    };
  });
  
  if (shouldShuffle) {
    rawPool = shuffleArray(rawPool);
  }
  
  // Slice to targeted count
  const questionsPool = rawPool.slice(0, questionCount);
  
  // Shuffle options if requested
  if (shouldShuffleOptions) {
    questionsPool.forEach(q => {
      if (q.options && q.options.length > 1) {
        const origCorrectKey = (q.correctKey || "").trim().toUpperCase();
        const correctOptObj = q.options.find(o => o.letter === origCorrectKey);
        
        q.options = shuffleArray(q.options);
        
        // Re-assign letters
        const letters = ["A", "B", "C", "D", "E", "F", "G"];
        q.options.forEach((opt, idx) => {
          opt.letter = letters[idx] || String.fromCharCode(65 + idx);
        });
        
        // Update correctKey to point to the new letter of the correct option
        if (correctOptObj) {
          const newCorrectOpt = q.options.find(o => o === correctOptObj);
          if (newCorrectOpt) {
            q.correctKey = newCorrectOpt.letter;
          }
        }
      }
    });
  }
  
  // Reset previous intervals if working
  if (activeExam.timerInterval) {
    clearInterval(activeExam.timerInterval);
  }
  
  // Bootstrap global exam state
  activeExam = {
    running: true,
    testId: selectedTest.id,
    testName: selectedTest.name,
    questionsPool: questionsPool,
    currentIndex: 0,
    userAnswers: {},
    flaggedQuestions: {},
    timeRemaining: timeLimitMinutes * 60,
    totalTime: timeLimitMinutes * 60,
    startTime: Date.now(),
    timerInterval: null
  };
  
  // Enable UI render blocks
  $("quiz-not-started-state").style.display = "none";
  $("quiz-running-container").style.display = "block";
  
  $("active-quiz-subtitle").textContent = selectedTest.name;
  $("active-quiz-title").textContent = `Imtihon topshirish jarayoni`;
  
  // Start countdown stopwatch clock
  runTimer();
  
  // Redraw state
  renderQuestion(0);
  switchTab("quiz");
}

function runTimer() {
  updateTimerDisplay();
  
  activeExam.timerInterval = setInterval(() => {
    activeExam.timeRemaining--;
    updateTimerDisplay();
    
    // Urgent vibration effect if under 1 minute remaining
    if (activeExam.timeRemaining < 60) {
      $("quiz-timer").classList.add("timer-urgent");
    } else {
      $("quiz-timer").classList.remove("timer-urgent");
    }
    
    if (activeExam.timeRemaining <= 0) {
      clearInterval(activeExam.timerInterval);
      activeExam.timerInterval = null;
      alert("Belgilangan vaqt o'z nihoyasiga yetdi!");
      finishExamDirectly(true); // auto submission
    }
  }, 1000);
}

function updateTimerDisplay() {
  const totalSeconds = activeExam.timeRemaining;
  if (totalSeconds < 0) return;
  
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  
  let timeStr = "";
  if (h > 0) {
    timeStr += `${h.toString().padStart(2, '0')}:`;
  }
  timeStr += `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  
  $("timer-display").textContent = timeStr;
}

function renderQuestion(index) {
  if (!activeExam.running) return;
  activeExam.currentIndex = index;
  
  const totalQs = activeExam.questionsPool.length;
  const question = activeExam.questionsPool[index];
  
  // Render headers labels & status lines
  $("quiz-progress-label").textContent = `Savol: ${index + 1} / ${totalQs}`;
  
  // calculate completion percentage (answered / total)
  const answeredCount = Object.keys(activeExam.userAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQs) * 100) || 0;
  $("quiz-progress-pct").textContent = `Bajarilgan: ${progressPercent}%`;
  $("quiz-progress-bar").style.width = `${progressPercent}%`;
  
  // Render question content
  $("active-question-text").textContent = `${index + 1}. ${question.text}`;
  
  // Render variants
  const optionsList = $("active-options-list");
  optionsList.innerHTML = "";
  
  question.options.forEach(opt => {
    const isSelected = activeExam.userAnswers[index] === opt.letter;
    
    const div = document.createElement("div");
    div.className = `option-item ${isSelected ? 'selected' : ''}`;
    div.innerHTML = `
      <div class="option-letter">${opt.letter}</div>
      <div class="option-body">${opt.text}</div>
    `;
    
    div.addEventListener("click", () => {
      activeExam.userAnswers[index] = opt.letter;
      
      // visual change
      optionsList.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
      div.classList.add("selected");
      
      // Update progress metrics instantly
      const updatedAnswered = Object.keys(activeExam.userAnswers).length;
      const updatedPct = Math.round((updatedAnswered / totalQs) * 100) || 0;
      $("quiz-progress-pct").textContent = `Bajarilgan: ${updatedPct}%`;
      $("quiz-progress-bar").style.width = `${updatedPct}%`;
      
      // Re-render Navigator matrix numbers to reflect answered state instantly
      renderMatrixNavigator();
    });
    
    optionsList.appendChild(div);
  });
  
  // Previous button check
  const prevBtn = $("quiz-prev-btn");
  if (index === 0) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = "0.5";
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = "1";
  }
  
  // Next / Finish check button labels
  const nextBtn = $("quiz-next-btn");
  if (index === totalQs - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-flex";
  }
  
  // Toggle Flag button visual check
  const flagBtn = $("quiz-flag-btn");
  const isFlagged = activeExam.flaggedQuestions[index] === true;
  if (isFlagged) {
    flagBtn.classList.remove("btn-warning");
    flagBtn.classList.add("btn-primary"); // Change to accent to indicate active flag state
    flagBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      Belgilangan (Flagged)
    `;
  } else {
    flagBtn.classList.add("btn-warning");
    flagBtn.classList.remove("btn-primary");
    flagBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      Belgilash (Flag)
    `;
  }
  
  renderMatrixNavigator();
}

function renderMatrixNavigator() {
  const grid = $("quiz-matrix-grid");
  grid.innerHTML = "";
  
  activeExam.questionsPool.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "matrix-btn";
    btn.textContent = idx + 1;
    
    // Check states classes
    if (idx === activeExam.currentIndex) {
      btn.classList.add("current");
    }
    
    if (activeExam.userAnswers[idx] !== undefined) {
      btn.classList.add("answered");
    }
    
    if (activeExam.flaggedQuestions[idx] === true) {
      btn.classList.add("flagged");
    }
    
    btn.addEventListener("click", () => {
      renderQuestion(idx);
    });
    
    grid.appendChild(btn);
  });
}

function setupExamRoomListeners() {
  $("quiz-prev-btn").addEventListener("click", () => {
    if (activeExam.currentIndex > 0) {
      renderQuestion(activeExam.currentIndex - 1);
    }
  });
  
  $("quiz-next-btn").addEventListener("click", () => {
    if (activeExam.currentIndex < activeExam.questionsPool.length - 1) {
      renderQuestion(activeExam.currentIndex + 1);
    }
  });
  
  $("quiz-flag-btn").addEventListener("click", () => {
    const curIdx = activeExam.currentIndex;
    activeExam.flaggedQuestions[curIdx] = !activeExam.flaggedQuestions[curIdx];
    renderQuestion(curIdx);
  });
  
  // Go to setup button on placeholder
  $("go-to-setup-btn").addEventListener("click", () => {
    switchTab("setup");
  });
  
  // Modal confirm finish exam
  const modal = $("confirm-modal");
  
  $("quiz-finish-btn").addEventListener("click", () => {
    const total = activeExam.questionsPool.length;
    const answered = Object.keys(activeExam.userAnswers).length;
    const unfilled = total - answered;
    
    $("modal-title").textContent = "Imtihonni Yakunlash";
    if (unfilled > 0) {
      $("modal-answered-info").innerHTML = `Siz jami ${total} ta savoldan <strong style="color:var(--error);">${answered} ta</strong>siga javob berdingiz. <strong style="color:var(--error);">${unfilled} tasi</strong> hanuz bo'sh qoldi.`;
    } else {
      $("modal-answered-info").innerHTML = `Siz barcha <strong>${total} ta</strong> test savollariga javob berdingiz.`;
    }
    
    modal.classList.add("active");
  });
  
  $("modal-cancel-btn").addEventListener("click", () => {
    modal.classList.remove("active");
  });
  
  $("modal-confirm-btn").addEventListener("click", () => {
    modal.classList.remove("active");
    finishExamDirectly(false);
  });
}

function finishExamDirectly(autoSubmitDueToTimeout = false) {
  if (activeExam.timerInterval) {
    clearInterval(activeExam.timerInterval);
    activeExam.timerInterval = null;
  }
  
  activeExam.running = false;
  
  // Calculate analytics metrics
  const pool = activeExam.questionsPool;
  const total = pool.length;
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  
  pool.forEach((q, idx) => {
    const userAns = activeExam.userAnswers[idx];
    if (userAns === undefined) {
      unanswered++;
    } else if (userAns === q.correctKey) {
      correct++;
    } else {
      incorrect++;
    }
  });
  
  const pct = Math.round((correct / total) * 100) || 0;
  
  // Grade Rating Badge Assignment
  let ratingClass = "qayta";
  let ratingText = "Qayta urinish";
  if (pct >= 86) {
    ratingClass = "alo";
    ratingText = "A'lo";
  } else if (pct >= 70) {
    ratingClass = "yaxshi";
    ratingText = "Yaxshi";
  } else if (pct >= 55) {
    ratingClass = "qoniqarli";
    ratingText = "Qoniqarli";
  }
  
  // Calculate exact duration spent
  const elapsedMs = Date.now() - activeExam.startTime;
  const elapsedMins = Math.floor(elapsedMs / 60000);
  const elapsedSecs = Math.floor((elapsedMs % 60000) / 1000);
  const durationStr = `${elapsedMins.toString().padStart(2, '0')}:${elapsedSecs.toString().padStart(2, '0')}`;
  
  // Compile summary outcomes
  lastResults = {
    testName: activeExam.testName,
    timeTakenStr: durationStr,
    totalQuestions: total,
    correctCount: correct,
    incorrectCount: incorrect,
    unansweredCount: unanswered,
    percentage: pct,
    ratingClass,
    ratingText,
    questionsPool: pool,
    userAnswers: activeExam.userAnswers,
    flaggedQuestions: activeExam.flaggedQuestions,
    submittedAt: new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString()
  };
  
  // Clean active container states and show placeholder
  $("quiz-running-container").style.display = "none";
  $("quiz-not-started-state").style.display = "flex";
  
  // Render results
  renderResultsView();
  
  // Switch to results tab automatically
  switchTab("results");
  
  if (autoSubmitDueToTimeout) {
    alert("Vaqt to'lganligi sababli imtihoningiz avtomatik ro'yxatga olindi va topshirildi!");
  } else {
    alert("Imtihon muvaffaqiyatli topshirildi va tahlil etildi!");
  }
}

// 8. Results & Detailed analysis panel
function renderResultsView() {
  if (!lastResults) {
    $("results-empty-state").style.display = "flex";
    $("results-active-container").style.display = "none";
    return;
  }
  
  $("results-empty-state").style.display = "none";
  $("results-active-container").style.display = "block";
  
  // Basic info line
  $("results-test-info").textContent = `${lastResults.testName} - Topshirilgan vaqt: ${lastResults.submittedAt}`;
  
  // Table results counts
  $("stat-total").textContent = lastResults.totalQuestions;
  $("stat-correct").textContent = lastResults.correctCount;
  $("stat-incorrect").textContent = lastResults.incorrectCount;
  $("stat-unanswered").textContent = lastResults.unansweredCount;
  $("stat-time").textContent = lastResults.timeTakenStr;
  
  // Set Radial circular progress dashoffset
  const pct = lastResults.percentage;
  $("radial-text-pct").textContent = `${pct}%`;
  
  // circular stroke length: perimeter of circle with r=70 is approximately 439.8
  const strokeLen = 439.8;
  const targetOffset = strokeLen - (pct / 100) * strokeLen;
  
  const circleElement = $("radial-progress-circle");
  // update circle stroke representation
  circleElement.style.strokeDasharray = strokeLen;
  circleElement.style.strokeDashoffset = strokeLen; // start empty
  
  // Animate offset fill with a microscopic timeout to allow SVG reflow
  setTimeout(() => {
    circleElement.style.strokeDashoffset = targetOffset;
  }, 50);
  
  // Grade rating badge
  const ratingBadge = $("results-rating-badge");
  ratingBadge.className = `badge-rating ${lastResults.ratingClass}`;
  ratingBadge.textContent = lastResults.ratingText;
  
  // Update segment filter numbers
  $("count-all").textContent = lastResults.totalQuestions;
  $("count-correct").textContent = lastResults.correctCount;
  $("count-incorrect").textContent = lastResults.incorrectCount;
  
  // count flagged
  let flaggedCount = 0;
  lastResults.questionsPool.forEach((q, idx) => {
    if (lastResults.flaggedQuestions[idx] === true) flaggedCount++;
  });
  $("count-flagged").textContent = flaggedCount;
  
  // Render detailed question list with current filter
  renderReviewList();
  renderResultsComparisonAnalysis();
}

function renderReviewList() {
  const container = $("results-review-list");
  container.innerHTML = "";
  
  if (!lastResults) return;
  
  const pool = lastResults.questionsPool;
  const userAnswers = lastResults.userAnswers;
  const flagged = lastResults.flaggedQuestions;
  
  let matchCount = 0;
  
  pool.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = userAns === q.correctKey;
    const isFlagged = flagged[idx] === true;
    
    // Filtering logic matching
    if (currentReviewFilter === "correct" && !isCorrect) return;
    if (currentReviewFilter === "incorrect" && isCorrect) return;
    if (currentReviewFilter === "flagged" && !isFlagged) return;
    
    matchCount++;
    
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-item";
    
    let statusBadgeHTML = "";
    if (userAns === undefined) {
      statusBadgeHTML = `<span class="review-badge-status review-status-unanswered">JAVOB BERILMAGAN</span>`;
    } else if (isCorrect) {
      statusBadgeHTML = `<span class="review-badge-status review-status-correct">TO'G'RI</span>`;
    } else {
      statusBadgeHTML = `<span class="review-badge-status review-status-incorrect">XATO</span>`;
    }
    
    const flaggedBadgeHTML = isFlagged 
      ? `<span class="test-badge test-badge-user" style="background-color: var(--warning-light); color: var(--warning); border:1px solid rgb(217,119,6,0.2);">FLAGS</span>`
      : "";
      
    // Create choices/variants items
    let optionsHTML = "";
    q.options.forEach(opt => {
      let optClass = "";
      let addonText = "";
      
      const wasChosenByUser = userAns === opt.letter;
      const constitutesCorrect = q.correctKey === opt.letter;
      
      if (constitutesCorrect) {
        optClass = "correct";
        addonText = `<span style="margin-left:auto; font-weight:600; font-size: 0.8rem;">To'g'ri variant ✅</span>`;
      } else if (wasChosenByUser && !isCorrect) {
        optClass = "incorrect";
        addonText = `<span style="margin-left:auto; font-weight:600; font-size: 0.8rem;">Siz tanlagan variant ❌</span>`;
      }
      
      optionsHTML += `
        <div class="review-option ${optClass}">
          <div class="review-option-letter">${opt.letter}</div>
          <div>${opt.text}</div>
          ${addonText}
        </div>
      `;
    });
    
    // Explanation drawer content element setup
    const explanationText = q.explanation && q.explanation.trim() !== "" 
      ? q.explanation 
      : "Ushbu savol uchun tushuntirish kiritilmagan.";
      
    reviewCard.innerHTML = `
      <div class="review-info-line">
        <span class="review-num">Savol #${idx + 1} ${flaggedBadgeHTML}</span>
        ${statusBadgeHTML}
      </div>
      <div class="question-text" style="font-size: 0.95rem; margin-bottom: 12px;"><strong>${q.text}</strong></div>
      
      <div class="review-options">
        ${optionsHTML}
      </div>
      
      <div>
        <button class="explanation-trigger" data-index="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          💡 Tushuntirish / Izohni ko'rish
        </button>
        <div id="exp-wrapper-${idx}" class="explanation-content">
          <strong>Izohli tahlil:</strong> ${explanationText}
        </div>
      </div>
    `;
    
    container.appendChild(reviewCard);
  });
  
  if (matchCount === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 40px 12px; font-size: 0.9rem; border:1px dashed var(--border); border-radius:var(--radius);">
        Ushbu filtr bo'yicha hech qanday element topilmadi.
      </div>
    `;
  }
  
  // Attach trigger toggles for explanations
  container.querySelectorAll(".explanation-trigger").forEach(trig => {
    trig.addEventListener("click", () => {
      const qIndex = trig.getAttribute("data-index");
      const wrapper = $(`exp-wrapper-${qIndex}`);
      
      if (wrapper.classList.contains("show")) {
        wrapper.classList.remove("show");
      } else {
        wrapper.classList.add("show");
      }
    });
  });
}

function setupReviewListeners() {
  // Filters switching listeners
  document.querySelectorAll(".filters-bar .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters-bar .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filterType = btn.getAttribute("data-filter");
      currentReviewFilter = filterType;
      renderReviewList();
    });
  });
}

// 9. Quick direct triggers matching across tabs
function setupDirectTriggers() {
  // Start Exam button setup
  $("start-exam-btn").addEventListener("click", () => {
    startExam();
  });
}

// 10. Statistical Analysis & Educational Elements
function updateActiveTestStatistics() {
  const selectedTest = tests.find(t => t.id === activeTestId);
  const barsContainer = $("selected-test-key-distribution-bars");
  const modeKeyEl = $("stats-most-frequent-key");
  const modeCountEl = $("stats-most-frequent-count");
  
  if (!barsContainer || !modeKeyEl || !modeCountEl) return;

  if (!selectedTest || selectedTest.questions.length === 0) {
    barsContainer.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Ma'lumotlar mavjud emas</div>`;
    modeKeyEl.textContent = "--";
    modeCountEl.textContent = "0 ta savolda";
    return;
  }
  
  const total = selectedTest.questions.length;
  const tallies = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };
  
  selectedTest.questions.forEach(q => {
    const key = (q.correctKey || "").trim().toUpperCase();
    if (key && tallies[key] !== undefined) {
      tallies[key]++;
    }
  });
  
  // Find the mode (most common answer)
  let maxKey = "A";
  let maxVal = 0;
  for (const [letter, val] of Object.entries(tallies)) {
    if (val > maxVal) {
      maxVal = val;
      maxKey = letter;
    }
  }
  
  modeKeyEl.textContent = maxVal > 0 ? maxKey : "--";
  modeCountEl.textContent = maxVal > 0 ? `${maxVal} ta savolda (${Math.round((maxVal / total) * 100) || 0}%)` : "0 ta savolda";
  
  // Render bar gauges
  let barsHTML = "";
  for (const letter of ['A', 'B', 'C', 'D']) {
    const val = tallies[letter] || 0;
    const pct = Math.round((val / total) * 100) || 0;
    barsHTML += `
      <div>
        <div style="font-size: 0.76rem; margin-bottom: 2px; display: flex; justify-content: space-between; align-items: center; color: var(--text);">
          <span>Variant <strong>${letter}</strong> asosiy kalit</span>
          <span style="font-weight: 600; font-family: 'JetBrains Mono', monospace;">${val} ta (${pct}%)</span>
        </div>
        <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; margin-bottom: 2px;">
          <div style="width: ${pct}%; height: 100%; background: var(--primary); border-radius: 3px; transition: var(--transition);"></div>
        </div>
      </div>
    `;
  }
  barsContainer.innerHTML = barsHTML;
}

function renderResultsComparisonAnalysis() {
  if (!lastResults) return;
  
  const userChoiceContainer = $("results-user-choice-bars");
  const keyChoiceContainer = $("results-key-choice-bars");
  
  if (!userChoiceContainer || !keyChoiceContainer) return;
  
  const pool = lastResults.questionsPool;
  const total = pool.length;
  
  // Tally user answers & correct keys
  const userTallies = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };
  const keyTallies = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };
  
  pool.forEach((q, idx) => {
    // Correct keys
    const key = (q.correctKey || "").trim().toUpperCase();
    if (key && keyTallies[key] !== undefined) {
      keyTallies[key]++;
    }
    
    // User chosen answers
    const userAns = lastResults.userAnswers[idx];
    if (userAns && userTallies[userAns] !== undefined) {
      userTallies[userAns]++;
    }
  });
  
  // Find user's mode choice
  let userMaxKey = "A";
  let userMaxVal = 0;
  for (const [letter, val] of Object.entries(userTallies)) {
    if (val > userMaxVal) {
      userMaxVal = val;
      userMaxKey = letter;
    }
  }
  
  // Find key's mode choice
  let keyMaxKey = "A";
  let keyMaxVal = 0;
  for (const [letter, val] of Object.entries(keyTallies)) {
    if (val > keyMaxVal) {
      keyMaxVal = val;
      keyMaxKey = letter;
    }
  }
  
  // Set text elements
  const userFreqText = userMaxVal > 0 
    ? `"${userMaxKey}" varianti (${userMaxVal} marta - ${Math.round((userMaxVal/total)*100)}%)` 
    : "Siz birorta ham savolga javob bermadingiz";
  $("results-user-most-frequent-key").textContent = userFreqText;
  
  $("results-key-most-frequent-key").textContent = keyMaxVal > 0 
    ? `"${keyMaxKey}" varianti (${keyMaxVal} marta - ${Math.round((keyMaxVal/total)*100)}%)` 
    : "--";
  
  // Build bars comparison html for user choices
  let userBarsHTML = "";
  for (const letter of ['A', 'B', 'C', 'D']) {
    const val = userTallies[letter] || 0;
    const pct = Math.round((val / total) * 100) || 0;
    userBarsHTML += `
      <div>
        <div style="font-size: 0.74rem; margin-bottom: 2px; display: flex; justify-content: space-between; align-items: center; color: var(--text);">
          <span>Harf <strong>${letter}</strong> tanlangan</span>
          <span style="font-weight: 600; font-family: 'JetBrains Mono', monospace;">${val} marta (${pct}%)</span>
        </div>
        <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; margin-bottom: 2px;">
          <div style="width: ${pct}%; height: 100%; background: var(--primary); border-radius: 3px; transition: var(--transition);"></div>
        </div>
      </div>
    `;
  }
  userChoiceContainer.innerHTML = userBarsHTML;
  
  // Build bars comparison html for correct keys
  let keyBarsHTML = "";
  for (const letter of ['A', 'B', 'C', 'D']) {
    const val = keyTallies[letter] || 0;
    const pct = Math.round((val / total) * 100) || 0;
    keyBarsHTML += `
      <div>
        <div style="font-size: 0.74rem; margin-bottom: 2px; display: flex; justify-content: space-between; align-items: center; color: var(--text);">
          <span>Harf <strong>${letter}</strong> to'g'ri kalit</span>
          <span style="font-weight: 600; font-family: 'JetBrains Mono', monospace;">${val} ta savolda (${pct}%)</span>
        </div>
        <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; margin-bottom: 2px;">
          <div style="width: ${pct}%; height: 100%; background: var(--success); border-radius: 3px; transition: var(--transition);"></div>
        </div>
      </div>
    `;
  }
  keyChoiceContainer.innerHTML = keyBarsHTML;
}

function setupCollapsibleGuide() {
  const header = $("toggle-guide-header");
  const body = $("guide-content-body");
  const icon = $("guide-toggle-icon");
  const copyBtn = $("copy-template-btn");
  
  if (header && body && icon) {
    header.addEventListener("click", () => {
      if (body.style.display === "none" || body.style.display === "") {
        body.style.display = "block";
        icon.textContent = "Yashirish [-]";
      } else {
        body.style.display = "none";
        icon.textContent = "Ko'rsatish [+]";
      }
    });
  }
  
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent collapsing header trigger
      const sampleText = `1. Quyidagi qaysi operatsion tizim ochiq kodli (open-source) hisoblanadi?
A) Windows 11
B) Linux Kernel
C) macOS Monterey
D) MS-DOS
Javob: B
Izoh: Linux ochiq manbali va jamoaviy boshqariladigan yadro hisoblanadi.

2. Kompyuter tezkor xotirasi (RAM) nima vazifani bajaradi?
A) Joriy vaqtda ishlayotgan jarayonlar ma'lumotlarini vaqtinchalik saqlash
B) Grafik tasvirlarni boshqarish
C) Doimiy fayllarni uzoq muddat o'chmas qilib saqlash
D) Tizimdagi xatoliklarni kamaytirish
Javob: A
Izoh: RAM faol ilova va tizim buyruqlarini protsessor o'qishi uchun vaqtinchalik saqlaydi.`;
      
      try {
        navigator.clipboard.writeText(sampleText).then(() => {
          alert("Nusxalandi! Endi buni Notepad dasturiga tahrirlash uchun joylashtirishingiz mumkin.");
        }).catch(() => {
          // fallback copy
          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = sampleText;
          document.body.appendChild(tempTextArea);
          tempTextArea.select();
          document.execCommand("copy");
          document.body.removeChild(tempTextArea);
          alert("Nusxalandi! (muqobil usul orqali)");
        });
      } catch (err) {
        alert("Nusxalash ruxsati berilmadi. Matnni qo'lda nusxalab oling.");
      }
    });
  }
}

// Test Preview Section
function renderPreviewDropdown() {
  const select = $("preview-test-select");
  if (!select) return;
  select.innerHTML = "";
  
  if (tests.length === 0) {
    select.innerHTML = `<option value="">-- Avval test yuklang --</option>`;
    const container = $("preview-questions-container");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 40px 12px; font-size: 0.9rem; border:1px dashed var(--border); border-radius:var(--radius); background-color: var(--card-bg);">
          Hali hech qanday test kiritilmagan. Iltimos, "Test Yuklash" bo'limidan yangi test yuklang.
        </div>
      `;
    }
    return;
  }
  
  tests.forEach((test, idx) => {
    const opt = document.createElement("option");
    opt.value = test.id;
    opt.textContent = `${test.name} (${test.questions.length} ta savol)`;
    // default to activeTestId or first item
    if (test.id === activeTestId || idx === 0) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });
  
  renderPreviewQuestions();
}

function renderPreviewQuestions() {
  const select = $("preview-test-select");
  const container = $("preview-questions-container");
  if (!select || !container) return;
  
  const selectedTestId = select.value;
  const test = tests.find(t => t.id === selectedTestId);
  
  container.innerHTML = "";
  
  if (!test || !test.questions || test.questions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 40px 12px; font-size: 0.9rem; border:1px dashed var(--border); border-radius:var(--radius); background-color: var(--card-bg);">
        Ushbu test to'plamida savollar mavjud emas.
      </div>
    `;
    return;
  }
  
  test.questions.forEach((q, idx) => {
    const previewCard = document.createElement("div");
    previewCard.className = "review-item";
    previewCard.style.marginBottom = "16px";
    
    // Options renderer
    let optionsHTML = "";
    q.options.forEach(opt => {
      const isCorrect = q.correctKey && q.correctKey.trim().toUpperCase() === opt.letter.trim().toUpperCase();
      const optClass = isCorrect ? "correct" : "";
      const addonText = isCorrect 
        ? `<span style="margin-left:auto; font-weight:600; font-size: 0.8rem; color: var(--success);">To'g'ri javob ✅</span>`
        : "";
        
      optionsHTML += `
        <div class="review-option ${optClass}">
          <div class="review-option-letter">${opt.letter}</div>
          <div>${opt.text}</div>
          ${addonText}
        </div>
      `;
    });
    
    const explanationText = q.explanation && q.explanation.trim() !== "" 
      ? q.explanation 
      : "Ushbu savol uchun qo'shimcha tushuntirish kiritilmagan.";
      
    previewCard.innerHTML = `
      <div class="review-info-line" style="margin-bottom: 12px;">
        <span class="review-num" style="color: var(--primary);">Savol #${idx + 1}</span>
        <span class="review-badge-status review-status-correct">TO'G'RI JAVOBLI KALIT: ${q.correctKey}</span>
      </div>
      <div class="question-text" style="font-size: 0.95rem; margin-bottom: 12px; font-weight: 600; color: var(--text);">
        ${q.text}
      </div>
      <div class="review-options">
        ${optionsHTML}
      </div>
      <div style="margin-top: 12px; padding: 12px; background-color: var(--primary-light); border-left: 4px solid var(--primary); border-radius: 0 var(--radius) var(--radius) 0; font-size: 0.85rem; color: var(--text);">
        <strong>💡 Tushuntirish / Izoh:</strong> ${explanationText}
      </div>
    `;
    container.appendChild(previewCard);
  });
}

function setupPreviewListeners() {
  const select = $("preview-test-select");
  if (select) {
    select.addEventListener("change", () => {
      renderPreviewQuestions();
    });
  }
}

// Ensure execution triggers on content loaded
window.addEventListener("DOMContentLoaded", () => {
  initApp();
});
