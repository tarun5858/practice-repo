import { useState } from 'react';

// 1. Pehla Sibling: Jo state ko badlega
function CouponInput({ setCoupon }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <h3>Component A (Input)</h3>
      <input 
        type="text" 
        placeholder="Enter Coupon (e.g. PREHOME)" 
        onChange={(e) => setCoupon(e.target.value)} 
      />
    </div>
  );
}
// function CouponInput({se})

// 2. Doosra Sibling: Jo badli hui state ko dikhayega
function BillDisplay({ couponCode }) {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '5px' }}>
      <h3>Component B (Bill)</h3>
      <p>Applied Coupon: <strong>{couponCode || "None"}</strong></p>
      <p>Discount: {couponCode === "TARUN20" ? "20% OFF! 🎉" : "0%"}</p>
    </div>
  );
}

// 3. MAIN COMMON PARENT (Yahan humne state ko LIFT UP kiya hai)
export default function App(){
   const [coupon, setCoupon] = useState("");

   return(
    <>
    <div>
        <h2>Parent Component</h2>
        <p>State resides here: {coupon}</p>

        {/* isko function diya h state badalne ke liye */}
        <CouponInput setCoupon={setCoupon}/>

        {/* isko value di h display krne ke liye */}
        <BillDisplay couponCode={coupon}/>
    </div>
    </>
   )
}