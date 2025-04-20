import React from 'react'

import React, { useState } from "react";

// بيانات الكروت (20 عنصر)
const cards = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Card ${index + 1}`,
  description: `This is card ${index + 1} description`,
  info: `More details about Card ${index + 1}`
}));

function Blogs() {
  const [selectedCard, setSelectedCard] = useState(null); // لإظهار الكرت اللي تم اختياره

  // دالة لاختيار الكرت
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <h1>صفحة الكروت</h1>

      {/* عرض الكروت */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "200px",
              cursor: "pointer",
              borderRadius: "8px",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              textAlign: "center"
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* عرض تفاصيل الكرت عند الضغط عليه */}
      {selectedCard && (
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center" }}>
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.info}</p>
        </div>
      )}
    </div>
  );
}

export default Blogs;


