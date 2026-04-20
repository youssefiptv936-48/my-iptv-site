import Div from "../../HtmlTools/Div";
import SpanHover from "../../HtmlTools/SpanHover";

export default function European() {
  // 1. مصفوفة الباقات الأوروبية - سهلة التحديث والإدارة
  const europeanPackages = [
    "UK ULTIMATE", "GERMANY ULTIMATE", "FRANCE ULTIMATE", "SPAIN ULTIMATE",
    "PORTUGAL", "SWITZERLAND", "POLAND", "GREECE ULTIMATE", "CYPRUS ULTIMATE",
    "SWEDEN ULTIMATE", "DENMARK ULTIMATE", "NORWAY ULTIMATE", "FINLAND ULTIMATE",
    "ICELAND ULTIMATE", "HUNGARY", "ROMANIA", "KOSOVO/ALBANIA", "RUSSIA",
    "UKRAINE", "HEBREW", "AUSTRALIA", "NEW ZEALAND", "MALTA", "CZECH REPUBLIC",
    "EXYU 24/7", "SERBIA", "BOSNIA", "CROATIA", "MACEDONIA", "SLOVENIA",
    "MONTENEGRO", "BULGARIA", "ESTONIA"
  ];

  return (
    <Div>
    


          {/* 🏷️ رندرة القائمة باستخدام map لتقليل حجم الـ DOM */}
          {europeanPackages.map((pkg, index) => (
            <SpanHover
              key={index} 
            >
              {pkg}
            </SpanHover>
          ))}
      
    </Div>
  );
}