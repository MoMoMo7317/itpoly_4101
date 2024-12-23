import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Welcome To Lanna Polytechnic ChiangMai</h2>
      
      {/* กล่องข้อความที่ใส่รูปภาพ */}
      <div 
        style={{
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          marginTop: '30px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3>หลักสูตรของเรา</h3>
        <p>หลักสูตรการเรียนการสอนมีทั้ง ปวช ถึง ปวส </p>
        
        {/* รูปภาพ */}
        <img 
          src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" 
          alt="หลักสูตร" 
          style={{
            width: '80%', // ลดขนาดรูปภาพให้เล็กลง
            height: 'auto',
            borderRadius: '8px',
            marginTop: '20px',
          }} 
        />
      </div>
    </div>
  );
};

export default Home;
