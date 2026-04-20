
import Div from "../../HtmlTools/Div";
import SpanHover from "../../HtmlTools/SpanHover";

export default function Family() {
  // 1. مصفوفة باقات العائلة لسهولة الإدارة وتقليل حجم الـ DOM
  const familyPackages = [
    "MBC",
    "LEBANON",
    "SYRIA",
    "MOROCCO",
    "OSN PLATINUM",
    "OSN F",
    "OSN BE",
    "GOBX PLATINUM",
    "GOBX BE",
    "MYHD F",
    "ROTANA & ART",
    "EGYPT",
    "ALWAN ENTERTAINMENT",
    "WEYYAK",
    "SHOOF DRAMA",
    "SHOOF COMEDY",
    "ON DEMAND",
    "NETFLIX",
    "NETFLIX GERMANY",
    "BOX OFFICE",
    "SHAHID VIP",
    "SHAHID CINEMA",
    "ACTORS",
    "PRIME VIDEO",
    "WATCH BOX",
    "HULU",
    "VIVO",
    "POWER",
    "MAJESTIC",
    "TOD",
    "HBO",
  ];

  return (
    <Div>
      {/* 🏷️ عرض القائمة باستخدام .map لرفع كفاءة الرندرة */}
      {familyPackages.map((pkg, index) => (
        <SpanHover key={index}>{pkg}</SpanHover>
      ))}
    </Div>
  );
}
