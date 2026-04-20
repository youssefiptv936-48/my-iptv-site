import Div from "../../HtmlTools/Div";
import SpanHover from "../../HtmlTools/SpanHover";

export default function Sports() {
  // 1. مصفوفة الباقات الرياضية لضمان سرعة الرندرة وخفة الـ DOM
  const sportsPackages = [
    "BEIN SPORT FULL",
    "TOD SPORT PPV",
    "BEIN SPORT 8K",
    "BEIN SPORT SS",
    "BEIN SPORT F",
    "BEIN SPORT BE",
    "BEIN SPORT ◉",
    "BEIN SPORT UHD",
    "BEIN SPORT ᴺᴹ",
    "BEIN SPORT OFF",
    "BEIN SPORT SA",
    "BEIN SPORT TELEKOM",
    "UEFA CHAMPIONS LEAGUE",
    "ALFAJER SPORT",
    "ALFAJER SPORT BE",
    "ALWAN SPORT F",
    "POST SPORT",
    "WATER SPORT ᴮᴱ",
    "SHASHA SPORT ᴮᴱ",
    "ARABIC SPORT FTA",
    "StarzPlay / AD SPORTS 4K",
    "StarzPlay / AD SPORTS M",
    "StarzPlay / AD SPORTS BE",
    "THMANYAH 8K",
    "THMANYAH F",
    "THMANYAH BE",
    "THMANYAH ◉",
    "THMANYAH SA",
    "THMANYAH ᴺᴹ",
    "SHAHID BUNDESLIGA ᴮᴱ",
    "SHAHID BUNDESLIGA ◉",
    "SHAHID BUNDESLIGA ᴺᴹ",
    "DAZN MENA PPV",
    "MLS PPV",
    "STC EXCLUSIVE",
  ];

  return (
     <Div>
      {/* 🏷️ عرض الباقات الرياضية بشكل أنيق */}
      {sportsPackages.map((pkg, index) => (
        <SpanHover key={index}>{pkg}</SpanHover>
      ))}
    </Div>
  );
}
