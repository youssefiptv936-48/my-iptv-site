import React, { useMemo } from "react";
import Div from "../../HtmlTools/Div";
import SpanHover from "../../HtmlTools/SpanHover";

// 1. نقل المصفوفة خارج المكون يمنع إعادة تعريفها في كل رندرة (Memory Leak Prevention)
const DISTINCT_CHANNELS = [
  { name: "4K UHD 3840P" },
  { name: "RELAX UHD 3840P" },
  { name: "SPORT ON AIR ⁸ᴷ" },
  { name: "HORSE RACING" },
  { name: "TENNIS" },
  { name: "WORLD CRICKET" },
  { name: "JAPAN" },
  { name: "SAINT LUCIA" },
  { name: "HONGKONG" },
  { name: "RELAX 4K" },
  { name: "ARABIC UHD 3840P" },
  { name: "WATCH IT" },
  { name: "STARZ PLAY PPV" },
  { name: "JAWWY" },
  { name: "ITUNES" },
  { name: "DAZN MENA PPV" },
  { name: "STC EXCLUSIVE" },
  { name: "ACTORS" },
  { name: "TOD" },
  { name: "HBO" },
  { name: "PRIME VIDEO ▶" },
  { name: "WATCH BOX" },
  { name: "HULU" },
  { name: "VIVO" },
  { name: "POWER" },
  { name: "MAJESTIC" },
  { name: "ARABIC EXCLUSIVE LQ" },
  { name: "SPORT EXCLUSIVE LQ" },
];

export default function Distinct() {
  // استخدام useMemo لضمان ثبات البيانات
  const channels = useMemo(() => DISTINCT_CHANNELS, []);

  return (
    <Div>
      {channels.map((item, index) => (
        <SpanHover key={index}>{item.name}</SpanHover>
      ))}
    </Div>
  );
}
