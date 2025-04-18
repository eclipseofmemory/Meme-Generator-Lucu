const express = require('express');
const app = express();
const port = 3000;

// Array kutipan absurd
const kutipan = [
    "Jangan menyerah... kecuali disuruh diet, itu susah bener.",
    "Teruslah melangkah, walau isi dompet cuma suara gema.",
    "Capek boleh, ngeluh dikit nggak apa-apa, asal tetap posting story semangat.",
    "Hidupmu berat? Tenang, itu tandanya kamu lagi di 'level hard'. EXP-nya gede.",
    "Bangkit! Karena tidur 12 jam juga nggak menyelesaikan masalah.",
    "Maju terus, walau realita sering mentalin kamu kayak bola pingpong.",
    "Rezeki nggak ke mana... tapi seringnya nyasar dulu ke orang lain.",
    "Jangan takut gagal... Elon Musk aja pernah ngeluarin nama anak kayak password Wi-Fi.",
    "Tersesat itu wajar, bahkan Google Maps aja kadang ngaco.",
    "Terus semangat ya! Hidup memang absurd, tapi kamu lebih absurd jadi pasti bisa hadapi.",
    "Kalau jatuh, bangun. Kalau kepleset, ketawa dulu, baru lanjut hidup.",
    "Jangan biarkan mimpi cuma jadi mimpi... minimal jadi bahan tweet lucu.",
    "Tetap positif... tapi jangan pas liat hasil test kesehatan.",
    "Kerja keraslah sampai kucingmu pun mulai mempertanyakan kenapa kamu pulang malam terus.",
    "Ingat: satu-satunya batasan dalam hidupmu adalah... kuota dan sinyal."
];

// Array emoji acak
const emojis = [
   "🤦‍♂️🍔", // Jangan menyerah... kecuali disuruh diet, itu susah bener.
    "🐒💸",    // Teruslah melangkah, walau isi dompet cuma suara gema.
    "🍕📱",    // Capek boleh, ngeluh dikit nggak apa-apa, asal tetap posting story semangat.
    "🎮⚡",    // Hidupmu berat? Tenang, itu tandanya kamu lagi di 'level hard'. EXP-nya gede.
    "🛌💤",    // Bangkit! Karena tidur 12 jam juga nggak menyelesaikan masalah.
    "🏓🌀",    // Maju terus, walau realita sering mentalin kamu kayak bola pingpong.
    "🦥🦋",    // Rezeki nggak ke mana... tapi seringnya nyasar dulu ke orang lain.
    "🧠💡",    // Jangan takut gagal... Elon Musk aja pernah ngeluarin nama anak kayak password Wi-Fi.
    "📍🗺️",    // Tersesat itu wajar, bahkan Google Maps aja kadang ngaco.
    "💪🔥",    // Terus semangat ya! Hidup memang absurd, tapi kamu lebih absurd jadi pasti bisa hadapi.
    "😂🤣",    // Kalau jatuh, bangun. Kalau kepleset, ketawa dulu, baru lanjut hidup.
    "🌈✨",    // Jangan biarkan mimpi cuma jadi mimpi... minimal jadi bahan tweet lucu.
    "🏥😷",    // Tetap positif... tapi jangan pas liat hasil test kesehatan.
    "🐱💻",    // Kerja keraslah sampai kucingmu pun mulai mempertanyakan kenapa kamu pulang malam terus.
    "📶📱"     // Ingat: satu-satunya batasan dalam hidupmu adalah... kuota dan sinyal.
];

// Siapkan templat HTML
const createMemePage = (quote, emoji) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme Motivasi Absurd</title>
  <style>
    body { 
      background-color: #ff9966; 
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      flex-direction: column;
    }
    .meme-container {
      background: linear-gradient(45deg, #ff6b6b, #5f27cd);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 500px;
    }
    .quote { 
      font-size: 24px; 
      color: white;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .emoji { font-size: 70px; }
    button {
      margin-top: 40px;
      padding: 12px 24px;
      background-color: #6c5ce7;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div class="meme-container">
    <div class="quote">"${quote}"</div>
    <div class="emoji">${emoji}</div>
    <div>
    
    </div>
  </div>
  <button onclick="window.location.reload()">Meme Baru!</button>
</body>
</html>
`;

// Route untuk halaman utama
app.get('/', (req, res) => {
  // Mengambil kutipan dan emoji dengan index acak
  const randomIndex = Math.floor(Math.random() * kutipan.length);
  const quote = kutipan[randomIndex];
  const emoji = emojis[randomIndex];
  res.send(createMemePage(quote, emoji));
});

// Mulai server
app.listen(port, () => {
  console.log(`Aplikasi meme absurd berjalan di http://localhost:${port}`);
});