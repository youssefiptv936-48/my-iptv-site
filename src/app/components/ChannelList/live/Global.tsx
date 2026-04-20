import Div from "../../HtmlTools/Div";
import SpanHover from "../../HtmlTools/SpanHover";

export default function Global() {
  const globalPackages = [
    "BEIN SPORT FULL",
    "UEFA CHAMPIONS LEAGUE",
    "DAZN MENA PPV",
    "MLS PPV",
    "STC EXCLUSIVE",
    "Netflix",
    "Netflix Germany",
    "Prime Video",
    "Hulu",
    "VIVO",
    "POWER",
    "MAJESTIC",
    "WATCH BOX",
    "StarzPlay / AD SPORTS 4K",
    "StarzPlay / AD SPORTS M",
    "StarzPlay / AD SPORTS BE",
  ];

  return (
    <Div>
      {globalPackages.map((pkg, index) => (
        <SpanHover key={index}>{pkg}</SpanHover>
      ))}
    </Div>
  );
}
