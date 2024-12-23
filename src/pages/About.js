import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* รูปภาพ */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {/* รูปภาพ 1 */}
        <img 
          src="https://uat-backend.thaisisterhood.com/public/uploads/place/13/original/654c65f35a0a11699505651.jpg" 
          alt="ภาพกิจกรรม" 
          style={{ width: '200px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        
        {/* รูปภาพ 2 */}
        <img 
          src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" 
          alt="กิจกรรมที่ 2" 
          style={{ width: '200px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        
        {/* รูปภาพ 3 */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKG0PAuP3-g23avYYe9cTqpMFGv5swuzrvGHPWNef54vRmcHcztNw91VECHmmmUf0zhPY&usqp=CAU" 
          alt="กิจกรรมที่ 3" 
          style={{ width: '200px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
      </div>

      {/* รายละเอียด */}
      <div style={{ textAlign: 'center', color: '#555' }}>
        <p>
          วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่เป็นสถาบันการศึกษาที่เน้นการเรียนรู้เชิงปฏิบัติ 
          และเตรียมนักศึกษาให้พร้อมเข้าสู่โลกแห่งการทำงาน ผ่านหลักสูตร ปวช และ ปวส 
          ในหลากหลายสาขาวิชา.
        </p>
        
        <h3 style={{ marginTop: '30px', color: '#333' }}>รางวัลที่ได้รับ</h3>
        <p>
          วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่ได้รับรางวัล "สถาบันการศึกษาที่มีการพัฒนานวัตกรรมการเรียนรู้ดีเด่น" 
          จากกระทรวงศึกษาธิการ เมื่อปี 2023 ซึ่งถือเป็นเกียรติและแรงบันดาลใจในการพัฒนาคุณภาพการศึกษา.
        </p>
      </div>
    </div>
  );
};

export default About;
