import { useState, useEffect } from "react";

export default function CryptoTracker() {
  const [coin, setCoin] = useState("Bitcoin"); // State 1: Kaunsa coin track karna ha
  const [price, setPrice] = useState(null); // State 2: Coin ka live price kya hai
  const [loading, setLoading] = useState(true); // State 3: Loading status
  const [refreshCount, setRefreshCount] = useState(0); // State 4: Manual refresh trigger

  useEffect(() => {
    setLoading(true);
    console.log(`Fetching new data for ${coin}`);

    // 1. API fetch function
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`,
        );
        const data = await response.json();

        // Dynamic key se price nikalna (e.g., data.bitcoin.usd)
        setPrice(data[coin]?.usd);
        setLoading(false);
      } catch (error) {
        console.error("API Limit hit or Error fetching data", error);
        const fakePrices = { bitcoin: 65420, ethereum: 3450, dogecoin: 0.15 };
        setPrice(fakePrices);
        setLoading(false);
      }
    };
    fetchPrice();

    // 2. AUTO REFRESH: Har 10 second me price automatic update hoga
    const intervalId = setInterval(()=>{
        console.log("Auto-refreshing price in 10 secs..");
        fetchPrice();
    },10000)

    // 3. cleanup function
    return () => {
        clearInterval(intervalId);
        console.log(`Cleanup done for ${coin}! old interval closed.`)
    }
  }, [coin, refreshCount]); // Jab bhi coin badlega ya manual refresh hoga, ye fir chalega!

  return <>
  <div style={styles.card}>
    <h2 style={styles.title}>Live Crypto Tracker</h2>

    {/* Dropdown to change dependency [coin] */}
    <div style={styles.formGroup}>
        <label style={styles.label}>Choose crypto: </label>
        <select value={coin} 
        onChange={(e)=> setCoin(e.target.value)}
        style={styles.select}
        >
            <option value="bitcoin">Bitcoin(BTC)</option>
            <option value="ethereum">Ethereum (ETH)</option>
            <option value="dogecoin">Dogecoin (DOGE)</option>
        </select>
    </div>

    {/* Price Display */}
    <div style={styles.priceContainer}>
        {loading ? (<p style={styles.loading}>Loading Fresh Price...</p>) : (
          <h1 style={styles.price}>
            ${price ? price.toLocaleString() : "N/A"} <span style={styles.usd}>USD</span>
          </h1>
        )}

    </div>
    <p style={styles.info}> Auto-refreshes every 10 seconds in the background.</p>

    {/* Button to change dependency [refreshCount] */}
    <button onClick={()=> setRefreshCount(prev => prev + 1)}
        style={styles.button}
        >Force Refresh Now</button>
  </div>
  </>;
}

// Simple Inline Styles taaki badhiya dikhe
const styles = {
  card: { background: "#1e1e2f", color: "#fff", padding: "30px", borderRadius: "15px", maxWidth: "400px", margin: "40px auto", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.3)", fontFamily: "Arial, sans-serif" },
  title: { margin: "0 0 20px 0", color: "#00d2ff" },
  formGroup: { marginBottom: "20px" },
  label: { fontSize: "1.1rem", marginRight: "10px" },
  select: { padding: "8px 15px", borderRadius: "6px", border: "none", fontSize: "1rem", background: "#3a3a55", color: "#fff", cursor: "pointer" },
  priceContainer: { background: "#2a2a40", padding: "20px", borderRadius: "10px", margin: "20px 0" },
  price: { margin: 0, fontSize: "2.5rem", color: "#2ecc71" },
  usd: { fontSize: "1rem", color: "#aaa" },
  loading: { margin: 0, color: "#f1c40f" },
  info: { fontSize: "0.85rem", color: "#888", fontStyle: "italic" },
  button: { width: "100%", padding: "12px", background: "#00d2ff", border: "none", borderRadius: "6px", color: "#1e1e2f", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", transition: "0.2s" }
};